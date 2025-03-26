<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    protected $fillable = ['title', 'developer', 'platform', 'release_date', 'genre', 'price', 'cover_image'];
}
