<?php

namespace App\Observers;

use App\Models\Movie;


class MovieObserver
{
    /**
     * Handle the Movie "created" event.
     */
    public function created(Movie $movie): void
    {
        if ($movie->active)
        {
            $this->schedule($movie);
        }
    }

    /**
     * Handle the Movie "updated" event.
     */
    public function updated(Movie $movie): void
    {
        if(! $movie ->wasChanged('active'))
        {
            return;
        }

        if($movie->wasChanged('active') && $movie->active )
        {
            $this->schedule($movie);
        } else {
            $this->unSchedule($movie);
        }

    }


    public function schedule(Movie $movie): void
    {

    }

    public function unSchedule(Movie $movie): void
    {

    }
}
