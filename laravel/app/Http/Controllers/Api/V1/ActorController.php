<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Actors;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\V1\StoreActorRequest;
use App\Http\Resources\V1\ActorResource;
use App\Models\Actor;

class ActorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store(StoreActorRequest $request)
    {
        $actor = Actor::create($request->validated());

        return new ActorResource($actor);
    }

    /**
     * Display the specified resource.
     */
    public function show(Actor $actors)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Actor $actors)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Actor $actors)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Actor $actors)
    {
        //
    }
}
