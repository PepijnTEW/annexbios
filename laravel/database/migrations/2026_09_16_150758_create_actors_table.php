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
        Schema::create('actors', function (Blueprint $table) {
            $table->unsignedBigInteger('actor_id')->primary();
            $table->text('name');
            $table->timestamps();
        });

        Schema::table('casts', function (Blueprint $table) {
            $table->foreignId('actor_id')
                ->constrained('actors', 'actor_id')
                ->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('actors');
    }
};
