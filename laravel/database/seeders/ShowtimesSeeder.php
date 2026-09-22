<?php

namespace Database\Seeders;

use App\Models\Cinema;
use App\Models\Showroom;
use App\Models\Showtime;
use Illuminate\Database\Seeder;

class ShowtimesSeeder extends Seeder
{
    public function run(): void
    {
        foreach (Cinema::all() as $cinema) {
            foreach (['Screen 1', 'Screen 2', 'Screen 3'] as $screenName) {
                Showroom::firstOrCreate([
                    'cinema_id' => $cinema->cinema_id,
                    'showroom_name' => $screenName,
                ]);
            }
        }

        Showtime::factory()->count(20)->create();
    }
}
