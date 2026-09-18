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
        Schema::create('showrooms', function (Blueprint $table) {
            $table->id('showroom_id');
            $table->foreignId('cinema_id')
                ->constrained('cinemas', 'cinema_id')
                ->cascadeOnDelete();
            $table->text('showroom_name');
            $table->timestamps();
            $table->index('cinema_id');
        });

        Schema::table('showtimes', function (Blueprint $table) {
            $table->foreignId('showroom_id')
                ->constrained('showrooms', 'showroom_id')
                ->cascadeOnDelete();
            $table->index(['showroom_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('showrooms');
    }
};
