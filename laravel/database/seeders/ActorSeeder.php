<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Seeder;
use App\Models\Actor;

class ActorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $actors = Actor::factory()
            ->count(20)
            ->create();

        $movies = Movie::all();

        foreach ($movies as $movie) {
            $movie->actors()->attach(
                $actors->random(rand(1, 4))->pluck('actor_id')
            );
        }
    }
}
