<div class="text-white py-5" style="background-color: #03224c">
    <!-- Conteneur start -->
    <div class="container text-start mb-5">
        <!-- Titre de la section -->
        <h3 class="text-uppercase font-weight-bold mb-4">
            <span class="border-bottom fw-bold border-white pb-1">Nos missions</span>
        </h3>
        <p class=" fs-5">
            Vous méritez d'être libéré du fardeau pour que votre cabinet aille encore plus haut.
        </p>
        {{-- <p class="lead">Découvrez les missions comptables, fiscales et administratives que nous offrons à nos clients</p> --}}
    </div>

    <!-- Grille des missions -->
    <div class="container">
        <div class="row g-4">
            <!-- Missions comptables -->
            <div class="col-md-4 mb-4 ">
                <div class="card h-100 border-1 border-white rounded-lg" style="background: transparent">
                    <div class="card-header text-center border rounded-top">
                        <img src="{{ asset('images/comptable.png') }}" alt="" class="mx-auto w-25 mb-3">
                        <h5 class="card-title font-weight-bold text-white">Missions comptables</h5>
                    </div>
                    <div class="card-body ">
                        <ul>
                            <li>Tenue complète de la comptabilité :
                                <ul>
                                    <li>Récupération des pièces</li>
                                    <li>Traitement des pièces (classement, saisie)</li>
                                    <li>Révision des comptes</li>
                                    <li>Lettrage</li>
                                </ul>
                            </li>
                            <li class="mt-3">Rapprochement bancaire</li>
                            <li class="mt-3">Établissement de situation</li>
                            <li class="mt-3">Bilan annuel</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Missions fiscales -->
            <div class="col-md-4 mb-4">
                <div class="card h-100 border-1 border-white rounded-lg" style="background: transparent">
                    <div class="card-header text-center border rounded-top">
                        <img src="{{ asset('images/tax.png') }}" alt="" class="mx-auto w-25 mb-3">
                        <h5 class="card-title text-dark  text-white">Missions fiscales</h5>
                    </div>
                    <div class="card-body">
                        <ul>
                            <li>Préparation de la TVA</li>
                            <li class="mt-3">Télédéclaration à la demande du client</li>
                            <li class="mt-3">Préparation de la liasse fiscale</li>
                            <li class="mt-3">Préparation des annexes et plaquettes</li>
                            <li class="mt-3">Préparation et envoi DAS2</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Missions administratives -->
            <div class="col-md-4 mb-4">
                <div class="card h-100 border-1 border-white rounded-lg" style="background: transparent">
                    <div class="card-header text-center border rounded-top">
                        <img src="{{ asset('images/admin.png') }}" alt="" class="mx-auto w-25 mb-3">
                        <h5 class="card-title text-dark font-weight-bold text-white">Missions administratives</h5>
                    </div>
                    <div class="card-body">
                        <ul>
                            <li>Saisie de données</li>
                            <li class="mt-3">Service après-vente</li>
                            <li class="mt-3">Relance client</li>
                            <li class="mt-3">Support client</li>
                            <li class="mt-3">Assistanat virtuel</li>
                            <li class="mt-3">Facturation clients</li>
                            <li class="mt-3">Autres tâches à la demande</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
