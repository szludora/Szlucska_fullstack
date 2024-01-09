<?php

use App\Models\Literature;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('literatures', function (Blueprint $table) {
            $table->id();
            $table->foreignId('authorId')->references('id')->on('users');
            $table->string('title');
            $table->decimal('evaluation', 4, 1)->default('5');
            $table->string('description')->default('Nincs hozzá leírás.');
            $table->timestamps();
        });
    }
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('literatures');
    }
};
