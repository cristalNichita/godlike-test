<?php

namespace App\Repositories;

use App\Models\Game;
use App\Repositories\Interfaces\GameRepositoryInterface;
use Illuminate\Database\Eloquent\Collection;

class GameRepository implements GameRepositoryInterface
{
    public function all(): Collection
    {
        return Game::all();
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
