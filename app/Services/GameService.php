<?php

namespace App\Services;

use App\Models\Game;
use App\Repositories\Interfaces\GameRepositoryInterface;
use Illuminate\Database\Eloquent\Collection;

class GameService
{
    public function __construct(protected GameRepositoryInterface $repository) {}

    public function getAllGames(): Collection
    {
        return $this->repository->all();
    }

    public function getGameById(int $id): Game
    {
        return $this->repository->find($id);
    }

    public function createGame(array $data): Game
    {
        return $this->repository->create($data);
    }

    public function updateGame(int $id, array $data): Game
    {
        return $this->repository->update($id, $data);
    }

    public function deleteGame(int $id): bool
    {
        return $this->repository->delete($id);
    }
}
