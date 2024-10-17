<div class="text-white py-5" style="background-color: #03224c">
    <!-- Titre de la section -->
    <div class="container" data-aos="fade-right">
        <h3 class="text-uppercase  mb-4">
            <span class="border-bottom fw-bold border-white"><i class="fas fa-gift"></i> Nos offres</span>
        </h3>
        <p class="text-white fw-medium fs-5 fst-italic" data-aos="fade-right">
            " Vous méritez l'efficacité, laissez-nous vous aider avec rigueur, et ensemble, <br> bâtissons l'avenir de
            votre
            grandeur "
        </p>
    </div>

    <!-- Grille des offres -->
    <div class="container mt-5">
        <div class="row">
            <!-- Boucle pour afficher chaque offre -->
            @php
                $tiers = [
                    [
                        'name' => 'BASIC',
                        'price' => '850€',
                        'title' => '1 collaborateur niveau junior :',
                        'description' => ['Tenue comptable (saisie, révision, lettrage, rapprochement bancaire)'],

                        'featured' => false,
                    ],
                    [
                        'name' => 'CLASSIC',
                        'price' => '1200€',
                        'title' => '1 collaborateur niveau senior :',
                        'description' => [
                            'Tenue comptable (saisie, révision, lettrage, rapprochement bancaire)',
                            'Fiscalité (préparation de la TVA, situation/bilan, préparation de la liasse fiscale)',
                        ],
                        'featured' => false,
                    ],
                    [
                        'name' => 'STRATEGIC',
                        'price' => '1750€',
                        'title' => '1 binôme senior + junior :',
                        'description' => ['Tenue comptable (saisie, révision, lettrage, rapprochement bancaire)', 'Fiscalité (préparation de la TVA, situation/bilan, préparation de la liasse fiscale)', 'Rapport d activité (listing pièces manquantes, points en suspens, différents contrôle dans un fichier Excel)'],
                        'featured' => false,
                    ],
                    [
                        'name' => 'MAGIC',
                        'price' => 'Sur devis',
                        'description' => [
                            'Personnalisé et sur mesure',
                            // 'Équipe dédiée',
                            // 'Support prioritaire',
                            // 'Solutions sur mesure',
                        ],
                        'featured' => false,
                    ],
                ];
            @endphp

            @foreach ($tiers as $tier)
                <div class="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="{{ $loop->index * 100 }}">
                    <div class="card h-100 border {{ $tier['featured'] ? 'border-warning' : '' }}"
                        style="background: transparent">
                        <div class="card-body">
                            <h4 class="card-title ">{{ $tier['name'] }}</h4>

                            @if ($tier['featured'])
                                <span class="badge bg-warning text-dark position-absolute" style="top: 20px;">Best
                                    seller</span>
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
    <p class="mt-5 text-center" data-aos="fade-up">
        1 collaborateur peut absorber 30 à 60 dossiers <br>
        Licence et logiciel à la charge du client
    </p>
</div>
