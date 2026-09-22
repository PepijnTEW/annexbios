<?php

namespace Database\Factories;

use App\Models\Showroom;
use App\Models\Cinema;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Showroom>
 */
class ShowroomFactory extends Factory
{
    protected $model = Showroom::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'showroom_name' => fake()->randomElement([
                'Screen 1',
                'Screen 2',
                'Screen 3',
                'IMAX Theater',
                'Dolby Cinema',
                'VIP Lounge',
                'Auditorium A',
                'Auditorium B'
            ]),
            'cinema_id' => Cinema::inRandomOrder()->value('cinema_id'),
        ];
    }
}
