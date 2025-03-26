<?php

namespace App\Providers;

use App\Repositories\GameRepository;
use App\Repositories\Interfaces\GameRepositoryInterface;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(GameRepositoryInterface::class, GameRepository::class);
    }

    public function boot(): void
    {
        //
    }
}
