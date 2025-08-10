import './style.css'

document.querySelector('#app').innerHTML = `
<div class="wrapper">
  <!-- navbar -->
  <nav class="page-header shadow-md font-medium">

    <!-- navbar header -->
    <div class="shadow-sm">
      <div class="hidden md:flex h-10 items-center justify-end md:text-xl/6">
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
            <button id="desktop-language-selector" class="flex items-center pr-4 hover:text-blue-600 focus:outline-none">
              Español
              <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div id="language-desktop" class="absolute right-0 w-32 bg-white rounded-xl shadow-md inset-shadow-xs opacity-100 group-hover:opacity-100 invisible group-hover:visible transition-opacity py-3">
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
    <div class="px-4 sm:px-6 lg:px-12 2xl:px-16">
      <div class="flex h-23 items-center justify-between">
        <!-- Left: Logo -->
        <div class="flex items-center space-x-2">
          <!-- Icon (placeholder box) -->
          <div class="h-7 w-5 md:h-8 md:w-6 lg:h-10 lg:w-7 rounded bg-logo-red"></div>
          <span class="font-bold text-3xl md:text-4xl lg:text-5xl">Logo</span>
        </div>

        <!-- Right: Links and actions -->
        <div class="hidden items-center space-x-5 md:flex">

          <!-- Sobre Nosotros Dropdown -->
          <div class="relative group">
            <button class="px-4 py-2 flex items-center hover:text-blue-600 md:text-xl/6 focus:outline-none">
              Sobre Nosotros
              <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
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
          <button href="#" class="inline-flex items-center rounded-full border md:border-2 border-primary-00 pl-7 md:text-sm pr-3 py-1 text-primary-00 transition hover:bg-blue-50 z-0">
            <span class="mr-1">Comprar ahora</span>
            <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" transform="rotate(-90)">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
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
    
    <!-- Header mobile menu -->
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
        <button id="dropdownBtnMobileLanguage" class="w-full flex justify-between items-center hover:text-blue-600">
          Español
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div id="dropdownMenuMobileLanguage" class="hidden pl-4 space-y-1 mt-2">
          <a href="#" class="block text-sm hover:text-blue-600">Español</a>
          <a href="#" class="block text-sm hover:text-blue-600">Inglés</a>
          <a href="#" class="block text-sm hover:text-blue-600">Francés</a>
          <a href="#" class="block text-sm hover:text-blue-600">Portugués</a>
        </div>
      </div>

      <!-- Sobre Nosotros Dropdown (Mobile) -->
      <div>
        <button id="dropdownBtnMobileAbout" class="w-full flex justify-between items-center hover:text-blue-600">
          Sobre Nosotros
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div id="dropdownMenuMobileAbout" class="hidden pl-4 space-y-1 mt-2">
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
    <!-- Hero -->
    <section class="max-w-7xl mx-auto px-24 py-24 grid md:grid-cols-2 gap-6 items-center">
      <div class="space-y-15">
        <h1 class="text-18/20 text-heading font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
        <div class="p-12 bg-gray-100 rounded">
          <h3 class="text-xl/6 font-medium mb-2 uppercase text-opacities-dark-05">Referencia</h3>
          <h2 class="text-lg/5 font-normal uppercase text-neutral-40">Modelo X</h2>
          <div class="border border-primary-60-light my-4"></div>
          <ul class="list-disc list-inside text-sm space-y-1">
            <li class="text-neutral-40 "><span class="text-neutral-60 font-normal text-base/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span></li>
            <li class="text-neutral-40"><span class="text-neutral-60 font-normal text-base/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span></li>
            <li class="text-neutral-40"><span class="text-neutral-60 font-normal text-base/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span></li>
            <li class="text-neutral-40"><span class="text-neutral-60 font-normal text-base/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span></li>
            <li class="text-neutral-40"><span class="text-neutral-60 font-normal text-base/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span></li>
            <li class="text-neutral-40"><span class="text-neutral-60 font-normal text-base/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span></li>
            <li class="text-neutral-40"><span class="text-neutral-60 font-normal text-base/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span></li>
            <li class="text-neutral-40"><span class="text-neutral-60 font-normal text-base/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span></li>
          </ul>
        </div>
      </div>

      <div class="relative flex items-center justify-center w-full max-w-3xl overflow-hidden">
        <!-- Carousel wrapper -->
        <div id="carousel" class="flex transition-transform duration-500">
          <div class="w-full flex-shrink-0">
            <img src="https://picsum.photos/id/100/800/400" class="w-full h-64 object-cover" alt="Slide 1">
          </div>
          <div class="w-full flex-shrink-0">
            <img src="https://picsum.photos/id/108/800/400" class="w-full h-64 object-cover" alt="Slide 2">
          </div>
          <div class="w-full flex-shrink-0">
            <img src="https://picsum.photos/id/58/800/400" class="w-full h-64 object-cover" alt="Slide 3">
          </div>
        </div>

        <!-- Carousel controls -->
        <div class="text-primary-medium">
          <button id="prev" class="absolute top-1/2 left-4 -translate-y-1/2">
            <svg class="h-8 w-8" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24" transform="rotate(90)">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <button id="next" class="absolute top-1/2 right-4 -translate-y-1/2">
            <svg class="h-8 w-8" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24" transform="rotate(-90)">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          </button>
        </div>
      </div>
    </section>

    <!-- Lorem ipsum passage -->
    <section class="mx-auto max-w-6xl px-24 py-12 text-center">
      <h2 class="text-18/20 font-medium text-heading">Lorem Ipsum passage</h2>
      <p class="my-24 text-primary-40-light font-medium text-12-5/15 ">The standard used since the 1500s</p>
      <p class="font-normal text-2xl/10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </section>

  </main>

  <!-- Footer -->
  <footer class="footer w-full font-sans">
    
    <!-- Top section -->
    <div class="grid grid-cols-1 items-center md:items-start gap-6 bg-primary-medium px-24 py-24 pb-12 text-white md:grid-cols-3">
      
      <!-- Column 1 -->
      <div class="space-y-4 text-center md:text-left">
        <h3 class="text-md font-bold text-secondary-90-light">Sobre nosotros</h3>
        <ul class="space-y-2">
          <li><a href="#" class="text-sm underline text-secondary-60-light hover:text-gray-300">Acerca de Nosotros</a></li>
          <li><a href="#" class="text-sm underline text-secondary-60-light hover:text-gray-300">Partner Program</a></li>
        </ul>
      </div>

      <!-- Column 2 -->
      <div class="space-y-4 text-center md:text-left">
        <h3 class="text-md font-bold text-secondary-90-light">Software</h3>
        <a href="#" class="block text-sm underline text-secondaryh-60-light hover:text-gray-300">Aplicación móvil</a>
        <div class="flex flex-col gap-4 items-center justify-center md:items-start md:justify-start">
          <a href="#">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_(iOS).svg" alt="App Store" class="h-11" />
          </a>
          <a href="#">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" class="h-11" />
          </a>
        </div>
      </div>

      <!-- Column 3 (Logo) -->
      <div class="flex flex-col items-center justify-center md:items-start md:justify-start gap-6">
        <div class="flex items-center space-x-2">
          <div class="flex items-center space-x-2">
            <!-- Icon (placeholder box) -->
            <div class="h-7 w-5 md:h-8 md:w-6 lg:h-10 lg:w-7 rounded bg-logo-red"></div>
            <span class="font-bold text-2xl md:text-3xl lg:text-4xl text-secondary-90-light">Logo</span>
          </div>
        </div>
        <div class="">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="30" height="30" viewBox="0 0 256 256" xml:space="preserve">
            <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(45.02412451361867 45.024124513618645) scale(1.83 1.83)">
              <path d="M 1.48 29.91 h 18.657 v 60.01 H 1.48 V 29.91 z M 10.809 0.08 c 5.963 0 10.809 4.846 10.809 10.819 c 0 5.967 -4.846 10.813 -10.809 10.813 C 4.832 21.712 0 16.866 0 10.899 C 0 4.926 4.832 0.08 10.809 0.08" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
              <path d="M 31.835 29.91 h 17.89 v 8.206 h 0.255 c 2.49 -4.72 8.576 -9.692 17.647 -9.692 C 86.514 28.424 90 40.849 90 57.007 V 89.92 H 71.357 V 60.737 c 0 -6.961 -0.121 -15.912 -9.692 -15.912 c -9.706 0 -11.187 7.587 -11.187 15.412 V 89.92 H 31.835 V 29.91 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
            </g>
          </svg>
        </div>
      </div>
    </div>

    <!-- Bottom section -->
    <div class="flex flex-col md:flex-row items-center justify-between bg-primary-dark px-24 pt-12 pb-6 text-xs text-white">
      
    <!-- Left -->
      <div>
        <div class="font-bold mb-3 md:mb-4 text-center md:text-left">© Copyright 2025</div>
        <div class="flex flex-col md:flex-row md:flex-wrap justify-center md:gap-y-1 md:gap-x-2 lg:gap-y-2 lg:gap-x-4 text-center">
          <a href="#" class="hover:underline mb-3 md:mb-0">Política de privacidad</a>
          <span class="hidden md:inline">|</span>
          <a href="#" class="hover:underline mb-3 md:mb-0">Política de cookies</a>
          <span class="hidden md:inline">|</span>
          <a href="#" class="hover:underline mb-3 md:mb-0">Configuración de cookies</a>
          <span class="hidden md:inline">|</span>
          <a href="#" class="hover:underline md:mb-0">Aviso legal</a>
        </div>
      </div>

      <!-- Footer Language selector - Dropdown Wrapper -->
      <div class="relative inline-block text-left mt-3 md:mt-0">
        <!-- Trigger Button -->
        <button id="dropdownBtnFooterLanguage" class="inline-flex cursor-pointer items-center hover:underline">
          <span>Español</span>
          <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" transform="rotate(-180)">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <!-- Dropdown Menu (Opens Up) -->
        <div id="dropdownMenuFooterLanguage" class="absolute right-0 bottom-full mb-2 hidden w-28 rounded-xl bg-primary-dark py-3 opacity-100 shadow-md inset-shadow-xs transition-opacity group-hover:visible group-hover:opacity-100">
          <a href="#" class="block px-6 py-2 text-xs hover:bg-gray-500">Español</a>
          <a href="#" class="block px-6 py-2 text-xs hover:bg-gray-500">Inglés</a>
          <a href="#" class="block px-6 py-2 text-xs hover:bg-gray-500">Francés</a>
          <a href="#" class="block px-6 py-2 text-xs hover:bg-gray-500">Portugués</a>
        </div>
      </div>

    </div>
  </footer>
</div>
`

// Mobile Menu toggle
const openBtn = document.getElementById('openMenu');
const closeBtn = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');
const mobileBg = document.getElementById('menuBg');

openBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('translate-x-full');
  mobileBg.classList.remove('hidden');
});

closeBtn.addEventListener('click', closeMenu);
mobileBg.addEventListener('click', closeMenu);

function closeMenu() {
  mobileMenu.classList.add('translate-x-full');
  mobileBg.classList.add('hidden');
}

// Mobile dropdown toggle
function toggleDropdown(id) {
  document.getElementById(id).classList.toggle('hidden');
}

// Mobile Language dropdown toggle onclick
const btnDdpMobileLanguage = document.getElementById('dropdownBtnMobileLanguage');
const menuDdpMobileLanguage = document.getElementById('dropdownMenuMobileLanguage');

btnDdpMobileLanguage.addEventListener('click', () => {
  menuDdpMobileLanguage.classList.toggle('hidden');
});

// Close if clicked outside
document.addEventListener('click', (event) => {
  if (!btnDdpMobileLanguage.contains(event.target) && !menuDdpMobileLanguage.contains(event.target)) {
    menuDdpMobileLanguage.classList.add('hidden');
  }
});

// Mobile About dropdown toggle onclick
const btnDdpMobileAbout = document.getElementById('dropdownBtnMobileAbout');
const menuDdpMobileAbout = document.getElementById('dropdownMenuMobileAbout');

btnDdpMobileAbout.addEventListener('click', () => {
  menuDdpMobileAbout.classList.toggle('hidden');
});

// Close if clicked outside
document.addEventListener('click', (event) => {
  if (!btnDdpMobileAbout.contains(event.target) && !menuDdpMobileAbout.contains(event.target)) {
    menuDdpMobileAbout.classList.add('hidden');
  }
});

// Footer Language dropdown toggle onclick
const btnDdpFooterLanguage = document.getElementById('dropdownBtnFooterLanguage');
const menuDdpFooterLanguage = document.getElementById('dropdownMenuFooterLanguage');

btnDdpFooterLanguage.addEventListener('click', () => {
  menuDdpFooterLanguage.classList.toggle('hidden');
});

// Close if clicked outside
document.addEventListener('click', (event) => {
  if (!btnDdpFooterLanguage.contains(event.target) && !menuDdpFooterLanguage.contains(event.target)) {
    menuDdpFooterLanguage.classList.add('hidden');
  }
});

// Carousel
const carousel = document.getElementById('carousel');
const slides = carousel.children;
const totalSlides = slides.length;
let index = 0;

document.getElementById('next').addEventListener('click', () => {
  index = (index + 1) % totalSlides;
  updateCarousel();
});

document.getElementById('prev').addEventListener('click', () => {
  index = (index - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

function updateCarousel() {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}