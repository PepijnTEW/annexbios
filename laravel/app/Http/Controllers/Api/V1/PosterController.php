<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PosterController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'file' => ['required', 'file', 'max:10240'],
        ]);

        $path = $request->file('file')->store('uploads', 'public');

        return response()->json([
            'message' => 'File uploaded succesfully',
            'path' => $path,
        ], 201);
    }
}
