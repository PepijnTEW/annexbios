<?php

namespace Database\Factories;

use App\Models\Movie;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Movie>
 */
class MovieFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(3),
            'description' => fake()->paragraph(),
            'release_date' => fake()->date(),
            'language' => fake()->languageCode(),
            'imd_rating' => fake()->randomFloat(3, 1, 10),
            'poster_path' => fake()->optional()->imageUrl(),
            'active' => fake()->boolean(),
            'runtime' => fake()->randomDigitNotNull()
        ];
    }
}
