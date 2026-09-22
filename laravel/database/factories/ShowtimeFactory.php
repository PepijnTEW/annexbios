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
    protected $model = Showtime::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'showroom_id' => Showroom::inRandomOrder()->value('showroom_id'),
            'movie_id' => Movie::inRandomOrder()->value('movie_id'),
            'start_time' => $this->faker->dateTime('H:i:s'),
            'end_time' => $this->faker->dateTime('H:i:s')
        ];
    }
}
