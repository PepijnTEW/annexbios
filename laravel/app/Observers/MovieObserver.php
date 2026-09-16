<?php

namespace App\Observers;

use App\Models\Movie;
use App\Models\Cinema;
use App\Models\Showtimes;


class MovieObserver
{
    /**
     * Handle the Movie "created" event.
     */
    public function created(Movie $movie): void
    {
        if ($movie->active)
        {
            $this->showtimeGenerator($movie);
        }
    }

    /**
     * Handle the Movie "updated" event.
     */
    public function updated(Movie $movie): void
    {
        if($movie->wasChanged('active') && $movie->active )
        {
            $this->showtimeGenerator($movie);
        }
    }

    public function showtimeGenerator(Movie $movie): void
    {
        $cinemas = Cinema::all();
        $showtimes = Showtimes::all();
    }
}
