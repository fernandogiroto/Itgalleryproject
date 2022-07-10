<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Galeria extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */

    public function up()
    {
        Schema::create('art', function (Blueprint $table) {
            $table->id();
            $table->string('name_art');
            $table->string('name_artist_art');
            $table->string('image_art');
            $table->string('year_art');
            $table->integer('inventory_number');
            $table->string('measurements');
            $table->string('description');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('art');
    }
}