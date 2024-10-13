@extends('layouts.app')

{{-- Titre de la page --}}
@section('title', 'Bienvenue sur MIA')

{{-- Contenu --}}
@section('content')

    <div class="min-h-screen relative">
        {{-- En-tête --}}
        <header class="bg-cover bg-center h-screen relative" style="background-image: url('{{ asset('images/slider.jpg') }}');">
          
            {{-- Barre de navigation --}}
            @include('partials.navbar')

            <!-- Section Héros -->
            @include('partials.hero_section')
        </header>

        {{-- Contenu --}}
        <main>

        </main>

        {{-- Pied de page --}}
        <footer></footer>
    </div>

@endsection
