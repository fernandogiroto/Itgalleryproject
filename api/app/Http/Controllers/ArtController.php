<?php

namespace App\Http\Controllers;

use App\Models\Art;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use phpDocumentor\Reflection\DocBlock\Tags\Var_;
use Symfony\Component\Console\Input\Input;

class ArtController extends Controller
{

    public function __construct(Art $art)
    {
        $this->art = $art;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        $arts = Art::all();
        foreach ($arts as $art) {
            $art->image_art = asset(Storage::url($art->image_art));
        }
        return response()->json($arts);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function store(Request $request)
    {
        $image = $request->file('file')->store('images', 'public');
        if (!$image) {
            return response()->json('Image file does not exist.');
        }
        $art = Art::create(
            [
                'name_art' => $request->name_art,
                'name_artist_art' => $request->name_art,
                'year_art' => $request->year_art,
                'inventory_number' => $request->inventory_number,
                'measurements' => $request->measurements,
                'description' => $request->description,
                'image_art' => $image
            ]
        );
        return response()->json($art);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function show(Art $art)
    {
        if ($art === null) {
            return response()->json(['erro' => 'The art does not exist'], 404);
        }
        return response()->json($art, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function update(Request $request, $id)
    {
        $art = Art::findOrFail($id);
     
        if ($request->file('file')) {
            $image = $request->file('file')->store('images', 'public'); 
            $art->image_art = $image;
        }

        $art->name_art = $request->name_art;
        $art->name_artist_art = $request->name_artist_art;
        $art->year_art = $request->year_art;
        $art->inventory_number = $request->inventory_number;
        $art->measurements = $request->measurements;
        $art->description = $request->description;
       
        $art->save();
        return response()->json($art);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function destroy($id)
    {
        return response()->delete($id);
    }
}
