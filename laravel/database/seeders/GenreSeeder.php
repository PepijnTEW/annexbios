<?php

namespace Database\Seeders;

use App\Models\Genre;
use Illuminate\Database\Seeder;

class GenreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $genres = [
            28 => 'Action',
            12 => 'Adventure',
            16 => 'Animation',
            35 => 'Comedy',
            80 => 'Crime',
            99 => 'Documentary',
            18 => 'Drama',
            10751 => 'Family',
            14 => 'Fantasy',
            36 => 'History',
            27 => 'Horror',
            10402 => 'Music',
            9648 => 'Mystery',
            10749 => 'Romance',
            878 => 'Science Fiction',
            10770 => 'TV Movie',
            53 => 'Thriller',
            10752 => 'War',
            37 => 'Western'
        ];

        foreach ($genres as $id => $name)
        {
            $id = Genre::create([
                'genre_id' => $id,
                'genre_name' => $name,
            ]);
        }
    }
}
