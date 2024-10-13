<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title')</title>

    <!-- Inclusion de Tailwind CSS via CDN -->
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- Inclusion d'Animate.css via CDN pour les animations -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />

    <!-- Ton CSS personnalisé si nécessaire -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

</head>

<body class="bg-gray-100 text-gray-900">

    <!-- Contenu spécifique à chaque page -->
    <div>
        @yield('content')
    </div>

    <!-- Scripts JavaScript si nécessaire -->
    <script src="https://cdn.jsdelivr.net/npm/alpinejs@3.5.0/dist/cdn.min.js" defer></script>

</body>

</html>
