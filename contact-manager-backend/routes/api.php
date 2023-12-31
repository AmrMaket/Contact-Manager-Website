<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Contact;
use App\Http\Controllers\ContactController;



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/add_update_contact/{id?}', [ContactController::class, "addOrUpdateContact"]);
Route::get('/show_contacts', [ContactController::class, "getContacts"]);