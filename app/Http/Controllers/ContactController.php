<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function sendEmail(Request $request)
    {
        // Valider les données du formulaire
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        // Envoyer l'e-mail
        Mail::to($data['email'])->send(new ContactMail($data));

        // Rediriger avec un message de succès via Inertia
        return Inertia::render('Contact', [
            'successMessage' => 'E-mail envoyé avec succès !'
        ]);
    }
}