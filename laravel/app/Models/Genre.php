<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Genre extends Model
{
    use HasFactory;

    protected $table = 'genres';

    protected $primaryKey = 'genre_id';

    // We will be using the ids of tmdb so we dont have to convert them
    public $incrementing = false;

    protected $fillable = [
        'genre_id',
        'genre_name',
    ];

    /**
         * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany<\App\Models\Movie, \App\Models\Genre>
    */
    public function movieGenre(): BelongsToMany
    {
        return $this->belongsToMany(Movie::class, 'movie_genres', 'genre_id', 'movie_id');
    }
}
