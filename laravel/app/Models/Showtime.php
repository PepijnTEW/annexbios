<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Showtime extends Model
{
    use HasFactory;

    //Tells to laravel what table it should use
    protected $table = 'showtimes';

    //Sets primary key
    protected $primaryKey = 'showtime_id';
    public $incrementing = true;

    protected $fillable = [
        'showroom_id',
        'movie_id',
<<<<<<< HEAD
=======
        'date',
>>>>>>> 4000ba8 (rebase done)
        'start_time',
        'end_time',
    ];

    protected $casts = [
        'start_time' => 'datetime',
        'end_time' => 'datetime',
    ];

    /**
<<<<<<< HEAD
<<<<<<< HEAD:laravel/app/Models/Showtime.php
         * @return \Illuminate\Database\Eloquent\Relations\BelongsTo<\App\Models\Showroom, \App\Models\Showtime>
    */
    public function showroom(): BelongsTo
=======
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo<\App\Models\Cinema, \App\Models\Showtime>
     */
    public function cinema(): BelongsTo
>>>>>>> 2e817ab (create showtimes test data):laravel/app/Models/Showtimes.php
=======
<<<<<<< HEAD:laravel/app/Models/Showtimes.php
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo<\App\Models\Cinema, \App\Models\Showtime>
     */
    public function cinema(): BelongsTo
=======
         * @return \Illuminate\Database\Eloquent\Relations\BelongsTo<\App\Models\Showroom, \App\Models\Showtime>
    */
    public function showroom(): BelongsTo
>>>>>>> 85227d5 (fixed issues with database and logic for movies):laravel/app/Models/Showtime.php
>>>>>>> 4000ba8 (rebase done)
    {
        return $this->belongsTo(Showroom::class, 'showroom_id', 'showroom_id');
    }

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo<\App\Models\Movie, \App\Models\Showtime>
     */
    public function movie(): BelongsTo
    {
        return $this->belongsTo(Movie::class, 'movie_id', 'movie_id');
    }
}
