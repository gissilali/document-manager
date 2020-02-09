<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DocumentsController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Resumes/Index');
    }

    public function create(Request $request)
    {
        return Inertia::render('Resumes/Create');
    }
}
