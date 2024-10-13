<nav class="navbar navbar-expand-lg navbar-dark bg-transparent position-absolute w-100">
    <div class="container">
        <!-- Logo -->
        <a class="navbar-brand" href="#">
            <img src="{{ asset('images/logo.png') }}" alt="MIA" width="200">
        </a>

        <!-- Bouton pour le menu mobile -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Liens du menu -->
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto  gap-4">
                <li class="nav-item">
                    <a class="nav-link text-white" href="#"><i class="fas fa-info-circle"></i> À propos de nous</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#"><i class="fas fa-tasks"></i> Nos missions</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#"><i class="fas fa-gift"></i> Nos offres</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#"><i class="fas fa-hands-helping"></i> Nos valeurs</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#"><i class="fas fa-check-circle"></i> Nos avantages</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
