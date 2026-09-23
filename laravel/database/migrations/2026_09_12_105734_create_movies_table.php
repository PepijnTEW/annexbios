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
        Schema::create('movies', function (Blueprint $table) {
            $table->id('movie_id');
            $table->text('title');
            $table->text('description');
            $table->date('release_date');
            $table->text('language')->default('en');
            $table->decimal('imd_rating', 4, 3)->nullable();
            $table->text('poster_path')->nullable();
            $table->unsignedInteger('runtime');
            $table->boolean('active')->default(false);
            $table->dateTime('run_start_at')->nullable()->after('active');
            $table->dateTime('run_end_at')->nullable()->after('run_start_at');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('movies');
    }
};
