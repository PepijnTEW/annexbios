<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Annex Bios',
            'email' => 'hoofdkantoor@annexbios.nl',
            'password' => Hash::make('password'),
            'cinema_id' => 1
        ]);

        User::create([
            'name' => 'Annex Bios Leerdam',
            'email' => 'leerdam@annexbios.nl',
            'password' => Hash::make('password'),
            'cinema_id' => 2
        ]);

        User::create([
            'name' => 'Annex Bios Maarssen',
            'email' => 'maarssen@annexbios.nl',
            'password' => Hash::make('password'),
            'cinema_id' => 3
        ]);

        User::create([
            'name' => 'Annex Bios Breukelen',
            'email' => 'breukelen@annexbios.nl',
            'password' => Hash::make('password'),
            'cinema_id' => 4
        ]);

        User::create([
            'name' => 'Annex Bios Bilthoven',
            'email' => 'bilthoven@annexbios.nl',
            'password' => Hash::make('password'),
            'cinema_id' => 5
        ]);

        User::create([
            'name' => 'Annex Bios Montfoort',
            'email' => 'montfoort@annexbios.nl',
            'password' => Hash::make('password'),
            'cinema_id' => 6
        ]);

        User::create([
            'name' => 'Annex Bios Woerden',
            'email' => 'woerden@annexbios.nl',
            'password' => Hash::make('password'),
            'cinema_id' => 7
        ]);

        User::create([
            'name' => 'Annex Bios Leidsche Rijn',
            'email' => 'leidscherijn@annexbios.nl',
            'password' => Hash::make('password'),
            'cinema_id' => 8
        ]);

        User::create([
            'name' => 'Annex Bios Zeist',
            'email' => 'zeist@annexbios.nl',
            'password' => Hash::make('password'),
            'cinema_id' => 9
        ]);
    }
}
