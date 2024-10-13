<nav class="bg-transparent absolute w-full">
    <div class="container mx-auto flex justify-between items-center p-4">
        <!-- Logo -->
        <a href="#" class="navbar-brand">
            <img src="{{ asset('images/logo.png') }}" alt="MIA" class="w-32 lg:w-48">
        </a>

        <!-- Menu burger pour mobile -->
        <button id="menu-btn" class="lg:hidden text-white focus:outline-none" aria-label="Toggle navigation">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
        </button>

        <!-- Liens du menu -->
        <div id="menu" class="hidden lg:flex flex-col lg:flex-row gap-4 items-center">
            <ul class="lg:flex lg:gap-6 text-white">
                <li class="nav-item">
                    <a class="nav-link transition duration-500 ease-in-out hover:text-blue-400" href="#">
                        <i class="fas fa-info-circle"></i> À propos de nous
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link transition duration-500 ease-in-out hover:text-blue-400" href="#">
                        <i class="fas fa-tasks"></i> Nos missions
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link transition duration-500 ease-in-out hover:text-blue-400" href="#">
                        <i class="fas fa-gift"></i> Nos offres
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link transition duration-500 ease-in-out hover:text-blue-400" href="#">
                        <i class="fas fa-hands-helping"></i> Nos valeurs
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link transition duration-500 ease-in-out hover:text-blue-400" href="#">
                        <i class="fas fa-check-circle"></i> Nos avantages
                    </a>
                </li>
            </ul>
        </div>
    </div>

    <!-- Menu mobile -->
    <div id="mobile-menu" class="lg:hidden hidden p-4 bg-gray-900 text-white animate__animated animate__fadeIn">
        <ul class="flex flex-col gap-4">
            <li>
                <a class="block transition duration-500 ease-in-out hover:text-blue-400" href="#">
                    <i class="fas fa-info-circle"></i> À propos de nous
                </a>
            </li>
            <li>
                <a class="block transition duration-500 ease-in-out hover:text-blue-400" href="#">
                    <i class="fas fa-tasks"></i> Nos missions
                </a>
            </li>
            <li>
                <a class="block transition duration-500 ease-in-out hover:text-blue-400" href="#">
                    <i class="fas fa-gift"></i> Nos offres
                </a>
            </li>
            <li>
                <a class="block transition duration-500 ease-in-out hover:text-blue-400" href="#">
                    <i class="fas fa-hands-helping"></i> Nos valeurs
                </a>
            </li>
            <li>
                <a class="block transition duration-500 ease-in-out hover:text-blue-400" href="#">
                    <i class="fas fa-check-circle"></i> Nos avantages
                </a>
            </li>
        </ul>
    </div>
</nav>

<!-- JavaScript pour le toggle du menu mobile -->
<script>
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('animate__fadeIn');
    });
</script>
