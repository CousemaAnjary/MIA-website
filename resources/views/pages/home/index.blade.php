@extends('layouts.app')

{{-- Titre de la page --}}
@section('title', 'Bienvenue sur MIA')

{{-- Contenu --}}
@section('content')

    <div class="">
        {{-- En-tête --}}
        <header>
            @include('partials.navbar') <!-- Navbar incluse ici -->
        </header>

        {{-- Contenu --}}
        <main></main>

        {{-- Pied de page --}}
        <footer></footer>
    </div>

@endsection
