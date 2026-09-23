<?php

namespace Database\Factories;

use App\Models\Movie;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Movie>
 */
class MovieFactory extends Factory
{
    protected $model = Movie::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $runtime = fake()->numberBetween(90, 150);
        $runStartAt = fake()->dateTime();

        return [
            'title' => fake()->sentence(3),
            'description' => fake()->paragraph(),
            'release_date' => fake()->date(),
            'language' => fake()->languageCode(),
            'imd_rating' => fake()->randomFloat(3, 1, 10),
            'poster_path' => fake()->optional()->imageUrl(),
            'runtime' => $runtime,
            'run_start_at' => $runStartAt,
            'run_end_at' => \Carbon\Carbon::parse($runStartAt)
                ->addMinutes($runtime)
                ->format('H:i:s'),
            'active' => fake()->boolean(),
            'runtime' => fake()->randomDigitNotNull()
        ];
    }
}
