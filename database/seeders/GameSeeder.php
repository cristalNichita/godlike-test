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
                'release_date' => '18/07/2013',
                'platform' => 'PC',
                'price' => 15,
            ],
            [
                'title' => 'Counter Strike 2',
                'developer' => 'Valve',
                'genre' => 'FPS',
                'release_date' => '27/09/2023',
                'platform' => 'PC',
                'price' => 20,
            ],
            [
                'title' => 'Cyberpunk 2077',
                'developer' => 'CD Project Red',
                'genre' => 'Adventure',
                'release_date' => '10/12/2020',
                'platform' => 'PlayStation',
                'price' => 30,
            ]
        ]);
    }
}
