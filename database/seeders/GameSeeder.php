<?php

namespace Database\Seeders;

use App\Models\Game;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GameSeeder extends Seeder
{
    public function run(): void
    {
        Game::insert([
            [
                'title' => 'Dota 2',
                'developer' => 'Valve',
                'genre' => 'MOBA',
                'release_date' => '2013-07-18',
                'platform' => 'PC',
                'price' => 15,
            ],
            [
                'title' => 'Counter Strike 2',
                'developer' => 'Valve',
                'genre' => 'FPS',
                'release_date' => '2023-09-27',
                'platform' => 'PC',
                'price' => 20,
            ],
            [
                'title' => 'Cyberpunk 2077',
                'developer' => 'CD Project Red',
                'genre' => 'Adventure',
                'release_date' => '2020-12-10',
                'platform' => 'PlayStation',
                'price' => 30,
            ]
        ]);
    }
}
