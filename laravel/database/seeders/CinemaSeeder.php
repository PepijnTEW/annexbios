<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Cinema;

class CinemaSeeder extends Seeder
{


    public function run(): void
    {
        Cinema::factory()->count(6)->create();
    }
}
