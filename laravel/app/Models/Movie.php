<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    //Tells to laravel what table it should use
    protected $table = 'movies';

    //Sets primary key
    protected $primaryKey = 'movie_id';
    public $incrementing = true;

    protected $fillable = [
        'title',
        'description',
        'release_date',
        'language',
        'imdb_rating',
        'poster_path',
        'active'
    ];

}
