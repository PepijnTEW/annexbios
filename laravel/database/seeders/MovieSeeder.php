<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Movie;
use App\Models\Genre;
use App\Models\Actor;


class MovieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Movie::factory()->count(10)->create()->each(function ($movie) {
            $genres = Genre::inRandomOrder()->take(rand(1, 3))->pluck('genre_id');
            $movie->genres()->attach($genres);

            $actors = Actor::inRandomOrder()->take(rand(2, 5))->pluck('actor_id');
            $movie->actors()->attach($actors);
        });
    }
}
