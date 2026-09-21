<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Cinema;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class CinemaSeeder extends Seeder
{


    public function run(): void
    {
        $cinemas = [
            'Leerdam',
            'Maarssen',
            'Breukelen',
            'Bilthoven',
            'Montfoort',
            'Woerden',
            'LeidscheRijn',
            'Zeist'
        ];

        foreach ($cinemas as $city) {
            $cinema = Cinema::create([
                'cinema_name' => "Annex Bios $city"
            ]);

            $user = User::create([
                'name' => "Annex Bios $city",
                'email' => strtolower($city) . '@annexbios.nl',
                'password' => Hash::make('password'),
                'cinema_id' => $cinema->cinema_id,
            ]);

            $token = $user->createToken(
                'cinema-api-token',
                [
                    'movies:read',
                    'showtimes:read'
                ]
            )->plainTextToken;

            $this->command->info("$city token: $token");
        }

        $hoofdkantoor = Cinema::create([
            'cinema_name' => "Annex Bios Hoofdkantoor",
        ]);

        $hoofdkantoorUser = User::create([
            'name' => "Annex Bios Hoofdkantoor",
            'email' => "hoofdkantoor@annexbios.nl",
            'password' => Hash::make('password'),
            'cinema_id' => $hoofdkantoor->cinema_id,
        ]);

        $token = $hoofdkantoorUser->createToken(
            'hoofdkantoor-api-token',
            [
                'movies:read',
                'showtimes:read',
                'movies:create',
                'showtimes:create'
            ]
        )->plainTextToken;

        $this->command->info("Hoofdkantoor token: $token");
    }
}
