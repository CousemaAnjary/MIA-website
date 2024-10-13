@extends('layouts.app')

{{-- Titre de la page --}}
@section('title', 'Bienvenue sur MIA')

{{-- Contenu --}}
@section('content')

    <div>
        {{-- En-tête --}}
        <header class="bg-cover bg-center vh-100 position-relative" style="background-image: url('{{ asset('images/slider.jpg') }}');">
             <!-- Navbar -->
            @include('partials.navbar') 
             <!-- Section Héros -->
            @include('partials.hero_section') 
        </header>

        {{-- Contenu --}}
        <main></main>

        {{-- Pied de page --}}
        <footer></footer>
    </div>

@endsection
