<?php

use App\Http\Controllers\Api\V1\MovieController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

//still need to add the middleware!! don't have the tokens set up yet! 'middleware' => 'auth:sanctum'
Route::group(['prefix' => 'v1', 'namespace' => 'App\Http\Controllers\Api\V1'], function () {
    Route::apiResource('movies', MovieController::class); // api/v1/movies
    // Route::apiResource('showtimes', ShowtimeController::class); // api/v1/showtimes

    // Route::apiResource('cinemas', CinemaController::class); // api/v1/cinemas
});
