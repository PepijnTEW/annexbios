<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
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
        'run_start_at',
        'run_end_at',
        'active',
    ];

    protected $casts = [
        'release_date' => 'date',
        'imdb_rating' => 'float',
        'run_start_at' => 'date',
        'run_end_at' => 'date',
        'runtime' => 'integer',
        'active' => 'boolean',
    ];

    /**
         * @return \Illuminate\Database\Eloquent\Relations\HasMany<\App\Models\Showtime, \App\Models\Movie>
    */
    public function showtimes(): HasMany
    {
       return $this->hasMany(Showtime::class);
    }

    /**
         * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany<\App\Models\Genre, \App\Models\Movie>
    */
    public function genres(): BelongsToMany
    {
       return $this->belongsToMany(Genre::class, 'movie_genres', 'movie_id', 'genre_id');
    }

    /**
         * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany<\App\Models\Actor, \App\Models\Movie>
    */
    public function actors(): BelongsToMany
    {
       return $this->belongsToMany(Actor::class, 'casts', 'movie_id', 'actor_id');
    }

    /**
     * @param  \Illuminate\Database\Eloquent\Builder<\App\Models\Movie>  $query
     * @return \Illuminate\Database\Eloquent\Builder<\App\Models\Movie>
     */
    public function scopeActive($query)
    {
        return $query->where('active', true);
    }


    /**
     * @return bool
     */
    public function isActive()
    {
        return (bool) $this->active;
    }

    /**
        * Determine if this movie runs on the given date.
        *
        * @param  \Carbon\Carbon  $date
        * @return bool
        */
       public function runsOn(\Carbon\Carbon $date): bool
       {
           $start = $this->run_starts_at ?? $this->release_date;
           $end   = $this->run_ends_at   ?? $start?->copy()->addWeeks(2);

           if ($start && $date->lt($start)) {
               return false;
           }
           if ($end && $date->gt($end)) {
               return false;
           }
           return true;
       }
}
