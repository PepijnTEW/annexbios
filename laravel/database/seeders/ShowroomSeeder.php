<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Showroom;

class ShowroomSeeder extends Seeder
{
    public function run(): void
    {
        Showroom::factory()->count(20)->create();
    }
}
