<?php

namespace Database\Factories;

use App\Models\Movie;
use App\Models\Cinema;
use App\Models\Showtimes;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Showtimes>
 */
class ShowtimesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'cinema_id' => Cinema::inRandomOrder()->value('cinema_id'),
            'movie_id' => Movie::inRandomOrder()->value('movie_id'),
            'date' => $this->faker->dateTimeBetween('now', '+30 days')->format('Y-m-d'),
            'time' => $this->faker->time('H:i:s')
        ];
    }
}
