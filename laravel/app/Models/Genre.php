<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    use HasFactory;

    protected $table = 'genres';

    protected $primaryKey = 'genre_id';

    // We will be using the ids of tmdb so we dont have to convert them
    protected $incrementing = false;

    protected $fillable = [
        'genre_name',
    ];

}
