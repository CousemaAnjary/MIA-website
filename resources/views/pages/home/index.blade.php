@extends('layouts.app')

{{-- Titre de la page --}}
@section('title', 'Bienvenue sur MIA')

{{-- Contenu --}}
@section('content')

    <div class="">
        {{-- En-tête --}}
        <header>
            @include('partials.navbar') 
            @include('partials.hero_section') 
        </header>

        {{-- Contenu --}}
        <main></main>

        {{-- Pied de page --}}
        <footer></footer>
    </div>

@endsection
