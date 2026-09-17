<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Showtimes;

class ShowtimesSeeder extends Seeder
{


    public function run(): void
    {
        Showtimes::factory()->count(20)->create();
    }
}
