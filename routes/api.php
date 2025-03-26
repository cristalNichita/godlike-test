<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GameController;

Route::apiResource('games', GameController::class)->except(['create', 'edit']);
