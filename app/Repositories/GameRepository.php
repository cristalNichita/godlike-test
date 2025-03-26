<?php

namespace App\Repositories;

use App\Models\Game;
use App\Repositories\Interfaces\GameRepositoryInterface;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;

class GameRepository implements GameRepositoryInterface
{
    public function all(array $filters = []): LengthAwarePaginator
    {
        return Game::query()
            ->when($filters['title'] ?? null, fn($q, $title) =>
            $q->where('title', 'like', "%$title%"))
            ->when($filters['genre'] ?? null, fn($q, $genre) =>
            $q->where('genre', $genre))
            ->when($filters['platform'] ?? null, fn($q, $platform) =>
            $q->where('platform', $platform))
            ->orderBy('created_at', 'desc')
            ->paginate(6)
            ->appends($filters);
    }

    public function find(int $id): Game
    {
        return Game::findOrFail($id);
    }

    public function create(array $data): Game
    {
        return Game::create($data);
    }

    public function update(int $id, array $data): Game
    {
        $game = $this->find($id);
        $game->update($data);
        return $game;
    }

    public function delete(int $id): bool
    {
        $game = $this->find($id);
        return $game->delete();
    }
}
