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
        <main>
            {{-- Section À propos de nous --}}
            @include('partials.about_section')

            {{-- Section Nos missions --}}
            @include('partials.mission_section')

            {{-- Section Nos offres --}}
            @include('partials.offre_section')

            {{-- Section Nos valeurs --}}
            @include('partials.valeur_section')

            {{-- Section Nos valeurs --}}
            @include('partials.avantage_section')

            {{-- Section contact --}}
            @include('partials.contact_section')

        </main>

        {{-- Pied de page --}}
        <footer>
            @include('partials.footer')
        </footer>
    </div>

@endsection
