<?php

namespace App\Repositories\Interfaces;

use App\Models\Game;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

interface GameRepositoryInterface
{
    public function all(array $filters = []): LengthAwarePaginator;
    public function find(int $id): Game;
    public function create(array $data): Game;
    public function update(int $id, array $data): Game;
    public function delete(int $id): bool;
}
