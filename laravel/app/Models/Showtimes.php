<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Showtimes extends Model
{
    use HasFactory;

    //Tells to laravel what table it should use
    protected $table = 'showtimes';

    //Sets primary key
    protected $primaryKey = 'showtime_id';
    protected $incrementing = true;

    protected $fillable = [
        'cinema_id',
        'movie_id',
        'date',
        'time',
    ];

    protected $casts = [
        'date' => 'date',
    ];

    /**
         * @return \Illuminate\Database\Eloquent\Relations\BelongsTo<\App\Models\Cinema, \App\Models\Showtime>
    */
    public function cinema(): BelongsTo
    {
        return $this->belongsTo(Cinema::class, 'cinema_id', 'cinema_id');
    }

    /**
         * @return \Illuminate\Database\Eloquent\Relations\BelongsTo<\App\Models\Movie, \App\Models\Showtime>
    */
    public function movie(): BelongsTo
    {
        return $this->belongsTo(Movie::class, 'movie_id', 'movie_id');
    }
}
