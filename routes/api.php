<?php

use Illuminate\Support\Facades\Route;

Route::apiResource('games', 'GameController')->except(['create', 'edit']);
