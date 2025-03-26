<?php

namespace App\Services;

use App\Models\Game;
use App\Repositories\Interfaces\GameRepositoryInterface;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class GameService
{
    public function __construct(protected GameRepositoryInterface $repository) {}

    public function getAllGames(array $filters = []): LengthAwarePaginator
    {
        return $this->repository->all($filters);
    }

    public function getGameById(int $id): Game
    {
        return $this->repository->find($id);
    }

    public function createGame(array $data): Game
    {
        if (isset($data['cover_image']) && $data['cover_image'] instanceof UploadedFile) {
            $data['cover_image'] = $data['cover_image']->store('covers', 'public');
        }

        return $this->repository->create($data);
    }

    public function updateGame(int $id, array $data): Game
    {
        if (isset($data['cover_image']) && $data['cover_image'] instanceof UploadedFile) {
            $game = $this->getGameById($id);

            if ($game->cover_image && Storage::disk('public')->exists($game->cover_image)) {
                Storage::disk('public')->delete($game->cover_image);
            }

            $data['cover_image'] = $data['cover_image']->store('covers', 'public');
        }

        return $this->repository->update($id, $data);
    }

    public function deleteGame(int $id): bool
    {
        return $this->repository->delete($id);
    }
}
