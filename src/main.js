import './style.css'

document.querySelector('#app').innerHTML = `
<div class="wrapper">
  <!-- navbar -->
  <nav class="page-header shadow-md">

    <!-- navbar header -->
    <div class="shadow-sm">
      <div class="hidden md:flex h-10 items-center justify-end font-medium md:text-lg lg:text-2xl">
        <!-- Right: Links and actions -->
        <div class="flex items-center space-x-8">
          <!-- Partner Program with Icon -->
          <div>
            <a href="#" class="flex items-center pl-4 hover:text-blue-600">
              <svg class="mr-2 h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A9.936 9.936 0 0112 15c2.137 0 4.114.66 5.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Partner Program
            </a>
          </div>

          <!-- Language Dropdown -->
          <div class="relative group z-10">
            <button id="dropdownBtn" class="flex items-center pr-4 hover:text-blue-600 focus:outline-none">
              Español
              <svg class="ml-2 mt-1 h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div id="languages" class="absolute right-0 w-32 bg-white rounded-xl shadow-md inset-shadow-xs opacity-100 group-hover:opacity-100 invisible group-hover:visible transition-opacity py-3">
              <a href="#" class="block px-6 py-2 text-sm hover:bg-blue-50">Español</a>
              <a href="#" class="block px-6 py-2 text-sm hover:bg-blue-50">Inglés</a>
              <a href="#" class="block px-6 py-2 text-sm hover:bg-blue-50">Francés</a>
              <a href="#" class="block px-6 py-2 text-sm hover:bg-blue-50">Portugués</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- navbar content -->
    <div class="px-4 sm:px-6 lg:px-12 2xl:px-16 font-medium">
      <div class="flex h-23 items-center justify-between">
        <!-- Left: Logo -->
        <div class="flex items-center space-x-2">
          <!-- Icon (placeholder box) -->
          <div class="h-7 w-5 md:h-8 md:w-6 lg:h-10 lg:w-7 rounded bg-red-500"></div>
          <span class="font-bold text-3xl md:text-4xl lg:text-5xl">Logo</span>
        </div>

        <!-- Right: Links and actions -->
        <div class="hidden items-center space-x-5 md:flex">

          <!-- Sobre Nosotros Dropdown -->
          <div class="relative group">
            <button class="px-4 py-2 flex items-center hover:text-blue-600 text-md md:text-lg lg:text-2xl focus:outline-none">
              Sobre Nosotros
              <svg class="ml-2 mt-1 h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
             <div class="absolute right-0 w-36 py-3 bg-white rounded-xl shadow-md inset-shadow-xs opacity-100 group-hover:opacity-100 invisible group-hover:visible transition-opacity">
              <a href="#" class="block px-8 py-2 text-sm hover:bg-blue-50">Historia</a>
              <a href="#" class="block px-8 py-2 text-sm hover:bg-blue-50">Valores</a>
              <a href="#" class="block px-8 py-2 text-sm hover:bg-blue-50">Equipo</a>
            </div>
          </div>

          <!-- CTA Button -->
          <a href="#" class="inline-flex items-center rounded-full border lg:border-2 border-primary-00 pl-4.5 md:text-xxs/5  lg:text-xs/6 pr-2 text-primary-00 transition hover:bg-blue-50 z-0">
            <span class="pr-0.75 pt-0.75 pb-1.25">Comprar ahora</span>
            <svg class="ml-1 h-3 w-3 lg:h-4 lg:w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" transform="rotate(-90)">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button id="openMenu" class="">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>

  <!-- Mobile menu Background -->
  <div id="menuBg" class="bg-opacity-50 fixed inset-0 hidden bg-primary-00"></div>

  <!-- Mobile menu -->
  <div id="mobileMenu" class="fixed top-0 right-0 z-50 h-full w-64 translate-x-full transform bg-white shadow-lg transition-transform duration-300 ease-in-out">
    
    <!-- Headedr mobile menu -->
    <div class="flex items-center justify-between border-b p-4">
      <span class="text-lg font-semibold">Menú</span>
      <button id="closeMenu">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile menu content -->
    <nav class="space-y-4 p-4 font-medium my-3">
      
    <!-- Partner Program (Mobile) -->
      <div>
        <a href="#" class="block hover:text-blue-600">Partner Program</a>
      </div>

      <!-- Language Dropdown (Mobile) -->
      <div>
        <button class="w-full flex justify-between items-center hover:text-blue-600" onclick="toggleDropdown('languagesMobile')">
          Español
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div id="languagesMobile" class="hidden pl-4 space-y-1 mt-2">
          <a href="#" class="block text-sm hover:text-blue-600">Español</a>
          <a href="#" class="block text-sm hover:text-blue-600">Inglés</a>
          <a href="#" class="block text-sm hover:text-blue-600">Francés</a>
          <a href="#" class="block text-sm hover:text-blue-600">Portugués</a>
        </div>
      </div>

      <!-- Sobre Nosotros Dropdown (Mobile) -->
      <div>
        <button class="w-full flex justify-between items-center hover:text-blue-600" onclick="toggleDropdown('aboutMobile')">
          Sobre Nosotros
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div id="aboutMobile" class="hidden pl-4 space-y-1 mt-2">
          <a href="#" class="block text-sm hover:text-blue-600">Historia</a>
          <a href="#" class="block text-sm hover:text-blue-600">Valores</a>
          <a href="#" class="block text-sm hover:text-blue-600">Equipo</a>
        </div>
      </div>

      <!-- Comprar ahora (Mobile) -->
      <div>
        <a href="#" class="mt-9 block rounded-full border-2 border-primary-00 px-4 pt-2 pb-3 text-center text-primary-00 transition hover:bg-blue-50">
      <span>Comprar ahora</span>
      </a>
      </div>
    </nav>
  </div>

  <!-- Main page content -->
  <main class="page-body">
    <p>body</p>
  </main>

  <!-- Footer -->
  <footer class="footer">footer</footer>
</div>
`

// Mobile Menu toggle
const openBtn = document.getElementById('openMenu');
const closeBtn = document.getElementById('closeMenu');
const menu = document.getElementById('mobileMenu');
const bg = document.getElementById('menuBg');

openBtn.addEventListener('click', () => {
  menu.classList.remove('translate-x-full');
  bg.classList.remove('hidden');
});

closeBtn.addEventListener('click', closeMenu);
bg.addEventListener('click', closeMenu);

function closeMenu() {
  menu.classList.add('translate-x-full');
  bg.classList.add('hidden');
}

// Mobile dropdown toggle
function toggleDropdown(id) {
  document.getElementById(id).classList.toggle('hidden');
}
