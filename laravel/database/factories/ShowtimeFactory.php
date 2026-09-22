<?php

namespace Database\Factories;

use App\Models\Movie;
use App\Models\Showroom;
use App\Models\Showtime;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Showtime>
 */
class ShowtimeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $startTime = $this->faker->dateTimeBetween('now', '+30 days');

        return [
            'showroom_id' => Showroom::inRandomOrder()->value('showroom_id') ?? Showroom::query()->firstOrFail()->showroom_id,
            'movie_id' => Movie::inRandomOrder()->value('movie_id') ?? Movie::query()->firstOrFail()->movie_id,
            'start_time' => $startTime->format('Y-m-d H:i:s'),
            'end_time' => (clone $startTime)->modify('+2 hours')->format('Y-m-d H:i:s'),
        ];
    }
}
