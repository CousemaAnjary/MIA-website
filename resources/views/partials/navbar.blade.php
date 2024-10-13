<nav class="container-fluid relative flex justify-between lg:justify-center xl:justify-between items-center p-2 lg:p-5 xl:p-1">
    <!-- Logo -->
    <div class="logo ml-4 lg:ml-16">
        <img class="w-24 lg:hidden xl:w-64 xl:block" src="{{ asset('images/logo.png') }}" alt="MIA Logo">
    </div>

    <!-- Menu Toggle Button for Mobile -->
    <div class="lg:hidden mr-4">
        <button id="menu-btn" class="text-white focus:outline-none">
            <!-- Icone burger pour mobile -->
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
        </button>

        <!-- Menu Mobile (Hidden by default) -->
        <div id="mobile-menu" class="hidden fixed top-[134px] right-0 w-full bg-gray-900 text-white p-3 shadow-lg">
            <ul class="flex flex-col gap-4">
                <li>
                    <a href="#" class="font-semibold text-sm text-white flex items-center gap-2">
                        <i class="fas fa-info-circle"></i> À propos de nous
                    </a>
                </li>
                <li>
                    <a href="#" class="font-semibold text-sm text-white flex items-center gap-2">
                        <i class="fas fa-tasks"></i> Nos missions
                    </a>
                </li>
                <li>
                    <a href="#" class="font-semibold text-sm text-white flex items-center gap-2">
                        <i class="fas fa-gift"></i> Nos offres
                    </a>
                </li>
                <li>
                    <a href="#" class="font-semibold text-sm text-white flex items-center gap-2">
                        <i class="fas fa-hands-helping"></i> Nos valeurs
                    </a>
                </li>
                <li>
                    <a href="#" class="font-semibold text-sm text-white flex items-center gap-2">
                        <i class="fas fa-check-circle"></i> Nos avantages
                    </a>
                </li>
            </ul>
        </div>
    </div>

    <!-- Navbar Links for Larger Screens -->
    <div class="navbar hidden lg:flex flex-col lg:flex-row gap-4 mr-4 lg:mr-16">
        <ul class="flex flex-col lg:flex-row gap-4">
            <li>
                <a href="#" class="font-semibold text-base text-white flex items-center gap-2">
                    <i class="fas fa-info-circle"></i> À propos de nous
                </a>
            </li>
            <li>
                <a href="#" class="font-semibold text-base text-white flex items-center gap-2">
                    <i class="fas fa-tasks"></i> Nos missions
                </a>
            </li>
            <li>
                <a href="#" class="font-semibold text-base text-white flex items-center gap-2">
                    <i class="fas fa-gift"></i> Nos offres
                </a>
            </li>
            <li>
                <a href="#" class="font-semibold text-base text-white flex items-center gap-2">
                    <i class="fas fa-hands-helping"></i> Nos valeurs
                </a>
            </li>
            <li>
                <a href="#" class="font-semibold text-base text-white flex items-center gap-2">
                    <i class="fas fa-check-circle"></i> Nos avantages
                </a>
            </li>
        </ul>
    </div>
</nav>

<!-- JavaScript pour le toggle du menu mobile -->
<script>
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
</script>
