<?php

namespace App\Http\Controllers\Api\V1;

use App\Filters\V1\ShowtimesFilter;
use App\Models\Showtime;
use App\Http\Controllers\Controller;
use App\Http\Resources\V1\ShowtimesCollection;
use App\Http\Resources\V1\ShowtimesResource;
use Illuminate\Http\Request;

class ShowtimesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new ShowtimesFilter();
        $filterItems = $filter->transform($request);

        $showtimes = Showtimes::with('movie')
            ->where($filterItems)
            ->where('cinema_id', $request->user()->cinema_id);

        return new ShowtimesCollection($showtimes->paginate()->appends($request->query()));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Showtimes $showtimes)
    {
        return new ShowtimesResource($showtimes);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Showtimes $showtimes)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Showtimes $showtimes)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Showtimes $showtimes)
    {
        //
    }
}
