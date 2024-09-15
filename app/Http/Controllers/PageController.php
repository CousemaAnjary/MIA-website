<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function home()
    {
        // Rendu de la page "Home" avec des données optionnelles
        return Inertia::render('Home');
    }
}