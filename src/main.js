import './style.css'

document.querySelector('#app').innerHTML = `
<div class="page">
  <!-- navbar -->
  <nav class="shadow-sm">
    <div class="shadow-sm">
      <div class="flex h-10 items-center justify-end font-medium text-md md:text-lg lg:text-2xl">
        <!-- Right: Links and actions -->
        <div class="flex items-center space-x-8">
          <!-- Partner Program with Icon -->
          <a href="#" class="flex items-center pl-4 hover:text-blue-600">
            <svg class="mr-2 h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A9.936 9.936 0 0112 15c2.137 0 4.114.66 5.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Partner Program
          </a>

          <!-- Language Dropdown -->
          <div class="relative">
            <button class="flex items-center pr-4 hover:text-blue-600">
              Español
              <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
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
          <div class="relative">
            <button class="px-4 py-2 flex items-center hover:text-blue-600 text-md md:text-lg lg:text-2xl">
              Sobre Nosotros
              <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <!-- CTA Button -->
          <a href="#" class="inline-flex items-center rounded-full border lg:border-2 border-primary-00 pl-4.5 md:text-xxs/5  lg:text-xs/6 pr-2 text-primary-00 transition hover:bg-blue-50">
            <span class="pr-0.75 pt-0.75 pb-1.25">Comprar ahora</span>
            <svg class="ml-1 h-3 w-3 lg:h-4 lg:w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" transform="rotate(-90)">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button class="">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
</div>
`
