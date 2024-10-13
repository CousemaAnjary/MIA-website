<div class="text-white py-5" style="background-color: #03224c">
    <!-- Titre de la section -->
    <div class="container">
        <h3 class="text-uppercase  mb-4">
            <span class="border-bottom fw-bold  border-white">Nos offres</span>
        </h3>
        <p class="fs-5">
            Vous méritez l'efficacité, laissez-nous vous aider avec rigueur, et ensemble, <br> bâtissons l'avenir de votre
            grandeur.
        </p>

    </div>

    <!-- Grille des offres -->
    <div class="container mt-5">
        <div class="row">
            <!-- Boucle pour afficher chaque offre -->
            @php
                $tiers = [
                    [
                        'name' => 'BRONZE',
                        'price' => '800€',
                        'title' => '1 collaborateur junior :',
                        'description' => ['Saisie et traitement', 'Nécessite une révision au bout', 'Français moyen'],
                        'featured' => false,
                    ],
                    [
                        'name' => 'SILVER',
                        'price' => '1200€',
                        'title' => '1 collaborateur senior niveau intermédiaire :',
                        'description' => [
                            'Traitement et révision avec édition de rapport',
                            'Bon niveau de français',
                            'Travail autonome sans révision nécessaire',
                        ],
                        'featured' => false,
                    ],
                    [
                        'name' => 'GOLD',
                        'price' => '1750€',
                        'title' => '1 binôme senior + junior :',
                        'description' => ['Traitement et révision', 'Français excellent', 'Rapport d\'activité inclus'],
                        'featured' => true,
                    ],
                    [
                        'name' => 'DIAMOND',
                        'price' => 'Sur devis',
                        'description' => [
                            'Personnalisé selon vos besoins',
                            'Équipe dédiée',
                            'Support prioritaire',
                            'Solutions sur mesure',
                        ],
                        'featured' => false,
                    ],
                ];
            @endphp

            @foreach ($tiers as $tier)
                <div class="col-md-6 mb-4" >
                    <div class="card h-100 border {{ $tier['featured'] ? 'border-warning' : '' }}" style="background: transparent">
                        <div class="card-body">
                            <h4 class="card-title ">{{ $tier['name'] }}</h4>

                            @if ($tier['featured'])
                                <span class="badge bg-warning text-dark position-absolute"
                                    style="top: 20px;">Populaire</span>
                            @endif

                            <p class="mt-3 display-4 fw-bold ">{{ $tier['price'] }}</p>

                            @if (isset($tier['title']))
                                <p class="mt-4 fw-bold ">{{ $tier['title'] }}</p>
                            @endif

                            <ul class="list-unstyled mt-4">
                                @foreach ($tier['description'] as $feature)
                                    <li class="d-flex align-items-center mb-2 gap-2">
                                        <i class="fas fa-check-circle text-success mr-2"></i>
                                        <span>{{ $feature }}</span>
                                    </li>
                                @endforeach
                            </ul>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </div>

    <!-- Note supplémentaire -->
    <p class="mt-5 text-center">
        1 collaborateur peut absorber 30 à 60 dossiers <br>
        Licence et logiciel à la charge du client
    </p>
</div>
