<?php

namespace App\Http\Controllers\Api\V1;

use App\Filters\V1\ShowtimesFilter;
use App\Models\Showtime;
use App\Http\Controllers\Controller;
use App\Http\Requests\V1\StoreShowtimeRequest;
use App\Http\Resources\V1\ShowtimesCollection;
use App\Http\Resources\V1\ShowtimesResource;
use Illuminate\Http\Request;

class ShowtimeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $filter = new ShowtimesFilter();
        $filterItems = $filter->transform($request);

        $showtimes = Showtime::with(['movie', 'showroom'])
            ->where($filterItems)
            ->whereHas('showroom', function ($query) use ($request) {
                $query->where('cinema_id', $request->user()->cinema_id);
            });

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
    public function store(StoreShowtimeRequest $request)
    {
        return new ShowtimesResource(Showtime::create($request->validated()));
    }

    /**
     * Display the specified resource.
     */
    public function show(Showtime $showtimes)
    {
        return new ShowtimesResource($showtimes);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Showtime $showtimes)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Showtime $showtimes)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Showtime $showtimes)
    {
        //
    }
}
