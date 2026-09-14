<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MovieGenre extends Model
{
    use HasFactory;

    protected $fillable = [
        'movie_id',
        'genre_id',
    ];

    /**
         * @return \Illuminate\Database\Eloquent\Relations\BelongsTo<\App\Models\Movie, \App\Models\MovieGenre>
    */
    public function movie(): BelongsTo
    {
        return $this->belongsTo(Movie::class, 'movie_id', 'movie_id');
    }

    /**
         * @return \Illuminate\Database\Eloquent\Relations\BelongsTo<\App\Models\Genre, \App\Models\MovieGenre>
    */
    public function genre(): BelongsTo
    {
        return $this->belongsTo(Genre::class, 'genre_id', 'genre_id');
    }
}
