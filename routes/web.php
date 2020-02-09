<?php

Route::group(['middleware' => 'auth'], function(){
    Route::get('/', 'DocumentsController@index');
    Route::get('/documents/create', 'DocumentsController@create')->name('documents.create');
});

Route::auth();
