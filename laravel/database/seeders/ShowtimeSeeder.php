<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Showtime;

class ShowtimeSeeder extends Seeder
{
    public function run(): void
    {
        Showtime::factory()->count(20)->create();
    }
}
