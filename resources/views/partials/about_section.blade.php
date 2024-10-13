<div class="about-section py-5">
    <div class="container d-flex flex-column flex-md-row align-items-center gap-5">
        <!-- Ajout de gap-3 pour réduire l'espace -->
        <!-- Texte -->
        <div class="col-md-6">
            <h3 class="text-uppercase font-weight-bold mb-4">
                <span class="border-bottom border-primary pb-1">À propos de nous</span>
            </h3>
            <h2 class="font-weight-bold mb-3">
                MIA, votre partenaire digital pour une comptabilité simplifiée
            </h2>
            <p class="text-muted mb-4">
                MIA, diminutif de Mi-Assiste, est une société basée à Madagascar qui propose des services de
                sous-traitance pour les PME et cabinets comptables. Avec plus de 10 ans d'expérience, nous sommes le
                partenaire digital idéal pour accompagner la croissance de votre entreprise en France.
            </p>

            <p class="fst-italic">
                Vous méritez la tranquillité sans perdre en qualité. Laissez-nous vous aider et vivez sans pression.
            </p>

            <!-- Accordéon -->
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Quels services comptables proposons-nous ?
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Nous offrons des services complets : récupération et traitement des pièces comptables,
                            révision des comptes, lettrage, rapprochement bancaire et établissement du bilan annuel.
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Quelles solutions fiscales mettons-nous en place ?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Nous nous occupons de la préparation et de la télédéclaration de la TVA, de la liasse
                            fiscale, des annexes et plaquettes, ainsi que de l'envoi des déclarations fiscales (DAS2).
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Quels sont nos services administratifs ?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Nous proposons des services de saisie de données, de service après-vente, de relance
                            clients, d'assistanat virtuel et de facturation clients, ainsi que d'autres tâches
                            administratives sur demande.
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Image -->
        <div class="col-md-6 mt-4 mt-md-0">
            <img src="{{ asset('images/about.png') }}" alt="À propos de MIA" class="img-fluid rounded">
        </div>
    </div>
</div>
