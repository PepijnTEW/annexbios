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
            'Hoofdkantoor',
            'Leerdam',
            'Maarssen',
            'Breukelen',
            'Bilthoven',
            'Montfoort',
            'Woerden',
            'Leidsche Rijn',
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

            $token = $user->createToken('cinema-api-token')->plainTextToken;

            $this->command->info("$city token: $token");
        }
    }
}
