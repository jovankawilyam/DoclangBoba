<?php

namespace App\Http\Controllers;

use App\Models\Lelang;
use App\Http\Requests\StoreLelangRequest;
use App\Http\Requests\UpdateLelangRequest;
use App\Http\Resources\LelangResource;
use Illuminate\Http\Response;

class LelangController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $lelangs = Lelang::orderBy('created_at', 'desc')->paginate(10);
        return LelangResource::collection($lelangs);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreLelangRequest $request)
    {
        $lelang = Lelang::create($request->validated());
        return new LelangResource($lelang);
    }

    /**
     * Display the specified resource.
     */
    public function show(Lelang $lelang)
    {
        return new LelangResource($lelang);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLelangRequest $request, Lelang $lelang)
    {
        $lelang->update($request->validated());
        return new LelangResource($lelang);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Lelang $lelang)
    {
        $lelang->delete();
        return response()->noContent();
    }
}
