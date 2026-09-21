<?php

use App\Http\Controllers\Api\V1\MovieController;
use App\Http\Controllers\Api\V1\CinemaController;
use App\Http\Controllers\Api\V1\ShowtimesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::group(['prefix' => 'v1', 'namespace' => 'App\Http\Controllers\Api\V1', 'middleware' => 'auth:sanctum'], function () {
    Route::apiResource('movies', MovieController::class) // api/v1/movies
        // ->only(['index', 'show'])
        ->middleware('ability:movies:read');
    Route::apiResource('showtimes', ShowtimesController::class) // api/v1/showtimes
        ->only(['index', 'show'])
        ->middleware('ability:showtimes:read');
    Route::apiResource('cinemas', CinemaController::class) // api/v1/cinemas
        ->only(['index', 'show'])
        ->middleware('ability:cinemas:read');
});
