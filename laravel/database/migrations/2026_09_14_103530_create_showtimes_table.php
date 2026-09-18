<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('showtimes', function (Blueprint $table) {
            $table->id('showtime_id');
            $table->foreignId('movie_id')
                ->constrained('movies', 'movie_id')
                ->cascadeOnDelete();
            $table->dateTime('start_time');
            $table->dateTime('end_time');
            $table->timestamps();

            $table->index(['start_time', 'end_time']);
            $table->index(['movie_id', 'start_time']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('showtimes');
    }
};
