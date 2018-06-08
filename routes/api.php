<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/test', function(){
    return response()->json([
        'user'  => [
            'first_name'  => 'Swapnil',
            'last_name'   => 'Chaudhari'
        ]
    ]);
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group(['middleware' => 'auth:api'], function() {
    Route::resource('categories', 'CategoriesController');

    Route::get('getLoggedInUser', function(){
        $user = Auth::user();
        return response()->json([
              'results'  => [
                'username' => $user->name
              ]
            ]);
    });

    Route::get('/categoriesCount', 'CategoriesController@fetchCategoriesCount');
});
