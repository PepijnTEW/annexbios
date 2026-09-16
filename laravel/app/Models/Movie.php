<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Movie extends Model
{
    use HasFactory;
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
        'runtime',
        'active',
    ];

    protected $casts = [
        'release_date' => 'date',
        'imdb_rating' => 'float',
        'active' => 'boolean',
    ];

    /**
         * @return \Illuminate\Database\Eloquent\Relations\BelongsTo<\App\Models\Movie, \App\Models\MovieGenre>
    */
    public function movieGenre(): HasMany
    {
        return $this->hasMany(MovieGenre::class);
    }

    /**
         * @return \Illuminate\Database\Eloquent\Relations\BelongsTo<\App\Models\Movie, \App\Models\Showtimes>
    */
    public function showtimes(): HasMany
    {
       return $this->hasMany(Showtimes::class);
    }
}
