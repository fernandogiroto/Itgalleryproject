<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Art extends Model
{
    use HasFactory;
    protected $fillable = ['name_art', 'name_artist_art', 'image_art', 'year_art', 'inventory_number', 'measurements', 'description'];
    public function rules()
    {
        return [
            'name_art' => 'required',
            'name_artist_art' => 'required',
            'image_art' => 'required',
            'year_art' => 'required',
            'inventory_number' => 'required',
            'measurements' => 'required',
            'image_art' => 'required|file|mimes:png,jpg,jpeg',
        ];
    }
    public function feedback()
    {
        return [
            'required' => 'Field :attribute ir required',
        ];
    }
}
