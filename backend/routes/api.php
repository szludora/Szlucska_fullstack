<?php

use App\Http\Controllers\LiteratureController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('literatures/descriptor', [LiteratureController::class, 'descriptor']);
// Route::get('literatures', [App\Http\Controllers\LiteratureController::class, 'index']);
// Route::get('literatures/{id}', [App\Http\Controllers\LiteratureController::class, 'show']);
// Route::delete('literatures/{id}', [App\Http\Controllers\LiteratureController::class, 'destroy']);
// Route::post('literatures', [App\Http\Controllers\LiteratureController::class, 'store']);
// Route::put('literatures/{id}', [App\Http\Controllers\LiteratureController::class, 'update']);
Route::resource('literatures', LiteratureController::class); 
Route::resource('users', UserController::class);

