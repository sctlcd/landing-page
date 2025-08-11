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
            <a
              href="#"
              class="flex items-center pl-4 hover:text-secondary-20-dark focus:outline-none focus:text-primary-10-light"
            >
              <svg
                class="mr-2 h-6 w-6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5.121 17.804A9.936 9.936 0 0112 15c2.137 0 4.114.66 5.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Partner Program
            </a>
          </div>

          <!-- Language Dropdown -->
          <div class="relative group z-10">
            <button
              id="desktop-language-selector"
              class="flex items-center pr-4 hover:text-secondary-20-dark focus:outline-none focus:text-primary-10-light"
            >
              Español
              <svg
                class="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              class="absolute right-0 w-36 py-3 bg-primary-light rounded-xl shadow-md inset-shadow-xs opacity-100 group-hover:opacity-100 invisible group-hover:visible transition-opacity"
            >
              <a href="#" class="block px-6 py-2 text-sm hover:bg-neutral-20"
                >Español</a
              >
              <a href="#" class="block px-6 py-2 text-sm hover:bg-neutral-20"
                >Inglés</a
              >
              <a href="#" class="block px-6 py-2 text-sm hover:bg-neutral-20"
                >Francés</a
              >
              <a href="#" class="block px-6 py-2 text-sm hover:bg-neutral-20"
                >Portugués</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- navbar content -->
    <div class="px-4 sm:px-6 lg:px-12 2xl:px-16">
      <div class="flex h-23 items-center justify-between">
        <!-- Left: Logo -->
        <a href="./index.html" target="_blank">
          <div class="flex items-center space-x-2">
            <!-- Icon (placeholder box) -->
            <div
              class="h-7 w-5 md:h-8 md:w-6 lg:h-10 lg:w-7 rounded bg-logo-red"
            ></div>
            <span class="font-bold text-3xl md:text-4xl lg:text-5xl">Logo</span>
          </div>
        </a>

        <!-- Right: Links and actions -->
        <div class="hidden items-center space-x-5 md:flex">
          <!-- Sobre Nosotros Dropdown -->
          <div class="relative group">
            <button
              class="px-4 py-2 flex items-center hover:text-secondary-20-dark focus:outline-none focus:text-primary-10-light md:text-xl/6"
            >
              Sobre Nosotros
              <svg
                class="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              class="absolute right-0 w-36 py-3 bg-primary-light rounded-xl shadow-md inset-shadow-xs opacity-100 group-hover:opacity-100 invisible group-hover:visible transition-opacity"
            >
              <a href="#" class="block px-8 py-2 text-sm hover:bg-neutral-20"
                >Historia</a
              >
              <a href="#" class="block px-8 py-2 text-sm hover:bg-neutral-20"
                >Valores</a
              >
              <a href="#" class="block px-8 py-2 text-sm hover:bg-neutral-20"
                >Equipo</a
              >
            </div>
          </div>

          <!-- CTA Button -->
          <button
            type="button"
            onclick="alert('To do')"
            class="inline-flex items-center rounded-full border md:border-2 border-primary-00 pl-7 md:text-sm pr-3 py-1 text-primary-00 transition hover:bg-neutral-20 z-0 focus:text-primary-10-light focus:outline-none focus:border-primary-10-light"
          >
            <span class="mr-1">Comprar ahora</span>
            <svg
              class="ml-1 h-4 w-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              transform="rotate(-90)"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button id="openMenu">
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>

  <!-- Mobile menu Background -->
  <div
    id="menuBg"
    class="bg-opacity-50 fixed inset-0 hidden bg-primary-00 z-10"
  ></div>

  <!-- Mobile menu -->
  <div
    id="mobileMenu"
    class="fixed top-0 right-0 z-50 h-full w-64 translate-x-full transform bg-primary-light shadow-lg transition-transform duration-300 ease-in-out"
  >
    <!-- Header mobile menu -->
    <div class="flex items-center justify-between border-b p-4">
      <span class="text-lg font-semibold">Menú</span>
      <button id="closeMenu">
        <svg
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile menu content -->
    <nav class="space-y-4 p-4 font-medium my-4">
      <!-- Partner Program (Mobile) -->
      <div>
        <a
          href="#"
          class="block hover:text-secondary-20-dark focus:outline-none focus:text-primary-10-light"
          >Partner Program</a
        >
      </div>

      <!-- Language Dropdown (Mobile) -->
      <div>
        <button
          id="dropdownBtnMobileLanguage"
          class="w-full flex justify-between items-center hover:text-secondary-20-dark focus:outline-none focus:text-primary-10-light"
        >
          Español
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div id="dropdownMenuMobileLanguage" class="hidden pl-4 space-y-3 mt-2">
          <a
            href="#"
            class="block text-sm hover:text-secondary-20-dark focus:outline-none focus:text-primary-10-light"
            >Español</a
          >
          <a
            href="#"
            class="block text-sm hover:text-secondary-20-dark focus:outline-none focus:text-primary-10-light"
            >Inglés</a
          >
          <a
            href="#"
            class="block text-sm hover:text-secondary-20-dark focus:outline-none focus:text-primary-10-light"
            >Francés</a
          >
          <a
            href="#"
            class="block text-sm hover:text-secondary-20-dark focus:outline-none focus:text-primary-10-light"
            >Portugués</a
          >
        </div>
      </div>

      <!-- Sobre Nosotros Dropdown (Mobile) -->
      <div>
        <button
          id="dropdownBtnMobileAbout"
          class="w-full flex justify-between items-center hover:text-secondary-20-dark focus:outline-none focus:text-primary-10-light"
        >
          Sobre Nosotros
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div id="dropdownMenuMobileAbout" class="hidden pl-4 space-y-3 mt-2">
          <a
            href="#"
            class="block text-sm hover:text-secondary-20-dark focus:outline-none focus:text-primary-10-light"
            >Historia</a
          >
          <a
            href="#"
            class="block text-sm hover:text-secondary-20-dark focus:outline-none focus:text-primary-10-light"
            >Valores</a
          >
          <a
            href="#"
            class="block text-sm hover:text-secondary-20-dark focus:outline-none focus:text-primary-10-light"
            >Equipo</a
          >
        </div>
      </div>

      <!-- Comprar ahora (Mobile) -->
      <div>
        <button
          type="button"
          onclick="alert('To do')"
          class="mt-9 block rounded-full border-2 border-primary-00 px-4 pt-2 pb-2 text-center text-primary-00 transition hover:bg-neutral-20 focus:text-primary-10-light focus:outline-none focus:border-primary-10-light"
        >
          <span>Comprar ahora</span>
        </button>
      </div>
    </nav>
  </div>

  <!-- Main page content -->
  <main class="page-body">
    <div class="main-content pt-24">
      <!-- Hero -->
      <section
        id="hero"
        class="mb-24 max-w-7xl mx-auto px-24 py-24 grid md:grid-cols-2 gap-6 items-center"
      >
        <div class="space-y-15">
          <h1 class="text-18/20 text-heading font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h1>
          <div class="p-12 bg-gray-100 rounded">
            <h3
              class="text-xl/6 font-medium mb-2 uppercase text-opacities-dark-05"
            >
              Referencia
            </h3>
            <h2 class="text-lg/5 font-normal uppercase text-neutral-40">
              Modelo X
            </h2>
            <div class="border border-primary-60-light my-4"></div>
            <ul class="list-disc list-inside text-sm space-y-1">
              <li class="text-neutral-40">
                <span class="text-neutral-60 font-normal text-base/5"
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit</span
                >
              </li>
              <li class="text-neutral-40">
                <span class="text-neutral-60 font-normal text-base/5"
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit</span
                >
              </li>
              <li class="text-neutral-40">
                <span class="text-neutral-60 font-normal text-base/5"
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit</span
                >
              </li>
              <li class="text-neutral-40">
                <span class="text-neutral-60 font-normal text-base/5"
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit</span
                >
              </li>
              <li class="text-neutral-40">
                <span class="text-neutral-60 font-normal text-base/5"
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit</span
                >
              </li>
              <li class="text-neutral-40">
                <span class="text-neutral-60 font-normal text-base/5"
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit</span
                >
              </li>
              <li class="text-neutral-40">
                <span class="text-neutral-60 font-normal text-base/5"
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit</span
                >
              </li>
              <li class="text-neutral-40">
                <span class="text-neutral-60 font-normal text-base/5"
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit</span
                >
              </li>
            </ul>
          </div>
        </div>

        <div
          class="relative flex items-center justify-center w-full max-w-3xl overflow-hidden"
        >
          <!-- Carousel wrapper -->
          <div id="carousel" class="flex transition-transform duration-500">
            <div class="w-full flex-shrink-0">
              <img
                src="https://picsum.photos/id/100/800/400"
                class="w-full h-64 object-cover"
                alt="Slide 1"
              />
            </div>
            <div class="w-full flex-shrink-0">
              <img
                src="https://picsum.photos/id/108/800/400"
                class="w-full h-64 object-cover"
                alt="Slide 2"
              />
            </div>
            <div class="w-full flex-shrink-0">
              <img
                src="https://picsum.photos/id/58/800/400"
                class="w-full h-64 object-cover"
                alt="Slide 3"
              />
            </div>
          </div>

          <!-- Carousel controls -->
          <div class="text-primary-medium">
            <button id="prev" class="absolute top-1/2 left-4 -translate-y-1/2">
              <svg
                class="h-8 w-8"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                viewBox="0 0 24 24"
                transform="rotate(90)"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <button id="next" class="absolute top-1/2 right-4 -translate-y-1/2">
              <svg
                class="h-8 w-8"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                viewBox="0 0 24 24"
                transform="rotate(-90)"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <!-- Ventajas -->
      <section id="advantage" class="mb-24 p-24">
        <div class="max-w-5xl mx-auto text-center">
          <!-- Title -->
          <h2 class="mb-24 font-medium text-12-5/15 text-primary-40-light">
            Ventajas
          </h2>

          <!-- Icons Grid -->
          <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-8 gap-y-12 gap-x-16 justify-center"
          >
            <!-- Item -->
            <div class="flex flex-col items-center text-center">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAADH0lEQVR4AexUbUiTURQ+WMw/FmUrEvsyKBRBZUSMsvygREqSPgiUoC2i/sgII4QIIxFBIpEQooi0COtHGYuMMAhXUqtgaRGFRJNqFGUf2CCMoPYcvKMFsffyUtyNM3bee+9z77n3nOc592bklzX/TGfLoDT/SYKpLrAoKAoazoCUqOECJQ1PFExKkeELREHDBUoaniiYlCLDF4iChguUNDxRMIGiFByIgikoWkLIomACHSk4EAX/FK31QC09GzwSN4yxBq3Cr/U0ANKy7o6d8T0f32wm365KcrvyaPDSfsYVprVpbLG2grk5sygYekkF5YfZDh3106aqYiopXEjexh7GJr//4ABj+1v+z82eQZf7Q+xftL6Fjp+5RXt3rKWh+y8YO31hiMrcyy3vpxZqJ4hA3K6lzCrYBcsri5cQkupqrWM80zGdA1SH+GJq3PU3MREgA31gah57ZGVl0taNLvZHBQDDWQXLchjbXVdKgeCocrHcaiWIQx2x4E+cCzCr4VfjzDJOW7wgm1o6+xnHGCWLFgY1Lvof0p76NdTgqSD0gWEONs85Ew01tfXF/b3bVxOSnoh+YwwK1qwr4rLlxRY/WgkGQ2Gqqu8kFVzk7RcCyzjryfMIXR0YQZc+fPpKKGUeTH3gAzzy7nPcf2qK/cq3HeMWGNY552RRNDpJV24MA6KxNx/J4ZhGigwGLXy0EkR5oSzRYm/cu+Gnr+nByBjlLXJyCUJl9JE81iiDoiADhr7C0fpiJTzQu4/VgX/u/NkUuDfKRG2uLsESwjVA5/34BBrLppUgFMKlbz+4he8FTsEj8zve3eFh5oFjHoaEqisK6VTvHbbK0vyERwjqQln4wtAHdvL8bSYOrzNI7bv+KPbAhbGlZdNKELsicPWC1ni6ALH9Dcck5lZsaOMSBBmratsJCWBOmbfxLN817I0+cFwJlC4w9bIC1zHtBHU2N2GtJGiCCnZiEAVtsGeEqyhohAw2ghAFbZBnhKsoaIQMNoIQBW2QZ4SrKGiEDDaCEAVtkGeEqyhohAw2ghAFbZBnhKso+N9k+EcHpb2CvwAAAP//UKJw/QAAAAZJREFUAwDVaoRg8PVQJAAAAABJRU5ErkJggg=="
                alt="Odd zonas"
                class="w-8 h-8 mb-2"
              />
              <span class="font-medium text-base/5 text-neutral-60"
                >640 zonas</span
              >
            </div>

            <div class="flex flex-col items-center text-center">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAADH0lEQVR4AexUbUiTURQ+WMw/FmUrEvsyKBRBZUSMsvygREqSPgiUoC2i/sgII4QIIxFBIpEQooi0COtHGYuMMAhXUqtgaRGFRJNqFGUf2CCMoPYcvKMFsffyUtyNM3bee+9z77n3nOc592bklzX/TGfLoDT/SYKpLrAoKAoazoCUqOECJQ1PFExKkeELREHDBUoaniiYlCLDF4iChguUNDxRMIGiFByIgikoWkLIomACHSk4EAX/FK31QC09GzwSN4yxBq3Cr/U0ANKy7o6d8T0f32wm365KcrvyaPDSfsYVprVpbLG2grk5sygYekkF5YfZDh3106aqYiopXEjexh7GJr//4ABj+1v+z82eQZf7Q+xftL6Fjp+5RXt3rKWh+y8YO31hiMrcyy3vpxZqJ4hA3K6lzCrYBcsri5cQkupqrWM80zGdA1SH+GJq3PU3MREgA31gah57ZGVl0taNLvZHBQDDWQXLchjbXVdKgeCocrHcaiWIQx2x4E+cCzCr4VfjzDJOW7wgm1o6+xnHGCWLFgY1Lvof0p76NdTgqSD0gWEONs85Ew01tfXF/b3bVxOSnoh+YwwK1qwr4rLlxRY/WgkGQ2Gqqu8kFVzk7RcCyzjryfMIXR0YQZc+fPpKKGUeTH3gAzzy7nPcf2qK/cq3HeMWGNY552RRNDpJV24MA6KxNx/J4ZhGigwGLXy0EkR5oSzRYm/cu+Gnr+nByBjlLXJyCUJl9JE81iiDoiADhr7C0fpiJTzQu4/VgX/u/NkUuDfKRG2uLsESwjVA5/34BBrLppUgFMKlbz+4he8FTsEj8zve3eFh5oFjHoaEqisK6VTvHbbK0vyERwjqQln4wtAHdvL8bSYOrzNI7bv+KPbAhbGlZdNKELsicPWC1ni6ALH9Dcck5lZsaOMSBBmratsJCWBOmbfxLN817I0+cFwJlC4w9bIC1zHtBHU2N2GtJGiCCnZiEAVtsGeEqyhohAw2ghAFbZBnhKsoaIQMNoIQBW2QZ4SrKGiEDDaCEAVtkGeEqyhohAw2ghAFbZBnhKso+N9k+EcHpb2CvwAAAP//UKJw/QAAAAZJREFUAwDVaoRg8PVQJAAAAABJRU5ErkJggg=="
                alt="Odd zonas"
                class="w-8 h-8 mb-2"
              />
              <span class="font-medium text-base/5 text-neutral-60"
                >6 particiones</span
              >
            </div>

            <div class="flex flex-col items-center text-center">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAADH0lEQVR4AexUbUiTURQ+WMw/FmUrEvsyKBRBZUSMsvygREqSPgiUoC2i/sgII4QIIxFBIpEQooi0COtHGYuMMAhXUqtgaRGFRJNqFGUf2CCMoPYcvKMFsffyUtyNM3bee+9z77n3nOc592bklzX/TGfLoDT/SYKpLrAoKAoazoCUqOECJQ1PFExKkeELREHDBUoaniiYlCLDF4iChguUNDxRMIGiFByIgikoWkLIomACHSk4EAX/FK31QC09GzwSN4yxBq3Cr/U0ANKy7o6d8T0f32wm365KcrvyaPDSfsYVprVpbLG2grk5sygYekkF5YfZDh3106aqYiopXEjexh7GJr//4ABj+1v+z82eQZf7Q+xftL6Fjp+5RXt3rKWh+y8YO31hiMrcyy3vpxZqJ4hA3K6lzCrYBcsri5cQkupqrWM80zGdA1SH+GJq3PU3MREgA31gah57ZGVl0taNLvZHBQDDWQXLchjbXVdKgeCocrHcaiWIQx2x4E+cCzCr4VfjzDJOW7wgm1o6+xnHGCWLFgY1Lvof0p76NdTgqSD0gWEONs85Ew01tfXF/b3bVxOSnoh+YwwK1qwr4rLlxRY/WgkGQ2Gqqu8kFVzk7RcCyzjryfMIXR0YQZc+fPpKKGUeTH3gAzzy7nPcf2qK/cq3HeMWGNY552RRNDpJV24MA6KxNx/J4ZhGigwGLXy0EkR5oSzRYm/cu+Gnr+nByBjlLXJyCUJl9JE81iiDoiADhr7C0fpiJTzQu4/VgX/u/NkUuDfKRG2uLsESwjVA5/34BBrLppUgFMKlbz+4he8FTsEj8zve3eFh5oFjHoaEqisK6VTvHbbK0vyERwjqQln4wtAHdvL8bSYOrzNI7bv+KPbAhbGlZdNKELsicPWC1ni6ALH9Dcck5lZsaOMSBBmratsJCWBOmbfxLN817I0+cFwJlC4w9bIC1zHtBHU2N2GtJGiCCnZiEAVtsGeEqyhohAw2ghAFbZBnhKsoaIQMNoIQBW2QZ4SrKGiEDDaCEAVtkGeEqyhohAw2ghAFbZBnhKso+N9k+EcHpb2CvwAAAP//UKJw/QAAAAZJREFUAwDVaoRg8PVQJAAAAABJRU5ErkJggg=="
                alt="Odd zonas"
                class="w-8 h-8 mb-2"
              />
              <span class="font-medium text-base/5 text-neutral-60"
                >Vía radio SF1</span
              >
            </div>

            <div class="flex flex-col items-center text-center">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAADH0lEQVR4AexUbUiTURQ+WMw/FmUrEvsyKBRBZUSMsvygREqSPgiUoC2i/sgII4QIIxFBIpEQooi0COtHGYuMMAhXUqtgaRGFRJNqFGUf2CCMoPYcvKMFsffyUtyNM3bee+9z77n3nOc592bklzX/TGfLoDT/SYKpLrAoKAoazoCUqOECJQ1PFExKkeELREHDBUoaniiYlCLDF4iChguUNDxRMIGiFByIgikoWkLIomACHSk4EAX/FK31QC09GzwSN4yxBq3Cr/U0ANKy7o6d8T0f32wm365KcrvyaPDSfsYVprVpbLG2grk5sygYekkF5YfZDh3106aqYiopXEjexh7GJr//4ABj+1v+z82eQZf7Q+xftL6Fjp+5RXt3rKWh+y8YO31hiMrcyy3vpxZqJ4hA3K6lzCrYBcsri5cQkupqrWM80zGdA1SH+GJq3PU3MREgA31gah57ZGVl0taNLvZHBQDDWQXLchjbXVdKgeCocrHcaiWIQx2x4E+cCzCr4VfjzDJOW7wgm1o6+xnHGCWLFgY1Lvof0p76NdTgqSD0gWEONs85Ew01tfXF/b3bVxOSnoh+YwwK1qwr4rLlxRY/WgkGQ2Gqqu8kFVzk7RcCyzjryfMIXR0YQZc+fPpKKGUeTH3gAzzy7nPcf2qK/cq3HeMWGNY552RRNDpJV24MA6KxNx/J4ZhGigwGLXy0EkR5oSzRYm/cu+Gnr+nByBjlLXJyCUJl9JE81iiDoiADhr7C0fpiJTzQu4/VgX/u/NkUuDfKRG2uLsESwjVA5/34BBrLppUgFMKlbz+4he8FTsEj8zve3eFh5oFjHoaEqisK6VTvHbbK0vyERwjqQln4wtAHdvL8bSYOrzNI7bv+KPbAhbGlZdNKELsicPWC1ni6ALH9Dcck5lZsaOMSBBmratsJCWBOmbfxLN817I0+cFwJlC4w9bIC1zHtBHU2N2GtJGiCCnZiEAVtsGeEqyhohAw2ghAFbZBnhKsoaIQMNoIQBW2QZ4SrKGiEDDaCEAVtkGeEqyhohAw2ghAFbZBnhKso+N9k+EcHpb2CvwAAAP//UKJw/QAAAAZJREFUAwDVaoRg8PVQJAAAAABJRU5ErkJggg=="
                alt="Odd zonas"
                class="w-8 h-8 mb-2"
              />
              <span class="font-medium text-base/5 text-neutral-60"
                >Vía radio Fh1</span
              >
            </div>

            <div class="flex flex-col items-center text-center">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAADH0lEQVR4AexUbUiTURQ+WMw/FmUrEvsyKBRBZUSMsvygREqSPgiUoC2i/sgII4QIIxFBIpEQooi0COtHGYuMMAhXUqtgaRGFRJNqFGUf2CCMoPYcvKMFsffyUtyNM3bee+9z77n3nOc592bklzX/TGfLoDT/SYKpLrAoKAoazoCUqOECJQ1PFExKkeELREHDBUoaniiYlCLDF4iChguUNDxRMIGiFByIgikoWkLIomACHSk4EAX/FK31QC09GzwSN4yxBq3Cr/U0ANKy7o6d8T0f32wm365KcrvyaPDSfsYVprVpbLG2grk5sygYekkF5YfZDh3106aqYiopXEjexh7GJr//4ABj+1v+z82eQZf7Q+xftL6Fjp+5RXt3rKWh+y8YO31hiMrcyy3vpxZqJ4hA3K6lzCrYBcsri5cQkupqrWM80zGdA1SH+GJq3PU3MREgA31gah57ZGVl0taNLvZHBQDDWQXLchjbXVdKgeCocrHcaiWIQx2x4E+cCzCr4VfjzDJOW7wgm1o6+xnHGCWLFgY1Lvof0p76NdTgqSD0gWEONs85Ew01tfXF/b3bVxOSnoh+YwwK1qwr4rLlxRY/WgkGQ2Gqqu8kFVzk7RcCyzjryfMIXR0YQZc+fPpKKGUeTH3gAzzy7nPcf2qK/cq3HeMWGNY552RRNDpJV24MA6KxNx/J4ZhGigwGLXy0EkR5oSzRYm/cu+Gnr+nByBjlLXJyCUJl9JE81iiDoiADhr7C0fpiJTzQu4/VgX/u/NkUuDfKRG2uLsESwjVA5/34BBrLppUgFMKlbz+4he8FTsEj8zve3eFh5oFjHoaEqisK6VTvHbbK0vyERwjqQln4wtAHdvL8bSYOrzNI7bv+KPbAhbGlZdNKELsicPWC1ni6ALH9Dcck5lZsaOMSBBmratsJCWBOmbfxLN817I0+cFwJlC4w9bIC1zHtBHU2N2GtJGiCCnZiEAVtsGeEqyhohAw2ghAFbZBnhKsoaIQMNoIQBW2QZ4SrKGiEDDaCEAVtkGeEqyhohAw2ghAFbZBnhKso+N9k+EcHpb2CvwAAAP//UKJw/QAAAAZJREFUAwDVaoRg8PVQJAAAAABJRU5ErkJggg=="
                alt="Odd zonas"
                class="w-8 h-8 mb-2"
              />
              <span class="font-medium text-base/5 text-neutral-60"
                >Conexión IP</span
              >
            </div>

            <div class="flex flex-col items-center text-center">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAADH0lEQVR4AexUbUiTURQ+WMw/FmUrEvsyKBRBZUSMsvygREqSPgiUoC2i/sgII4QIIxFBIpEQooi0COtHGYuMMAhXUqtgaRGFRJNqFGUf2CCMoPYcvKMFsffyUtyNM3bee+9z77n3nOc592bklzX/TGfLoDT/SYKpLrAoKAoazoCUqOECJQ1PFExKkeELREHDBUoaniiYlCLDF4iChguUNDxRMIGiFByIgikoWkLIomACHSk4EAX/FK31QC09GzwSN4yxBq3Cr/U0ANKy7o6d8T0f32wm365KcrvyaPDSfsYVprVpbLG2grk5sygYekkF5YfZDh3106aqYiopXEjexh7GJr//4ABj+1v+z82eQZf7Q+xftL6Fjp+5RXt3rKWh+y8YO31hiMrcyy3vpxZqJ4hA3K6lzCrYBcsri5cQkupqrWM80zGdA1SH+GJq3PU3MREgA31gah57ZGVl0taNLvZHBQDDWQXLchjbXVdKgeCocrHcaiWIQx2x4E+cCzCr4VfjzDJOW7wgm1o6+xnHGCWLFgY1Lvof0p76NdTgqSD0gWEONs85Ew01tfXF/b3bVxOSnoh+YwwK1qwr4rLlxRY/WgkGQ2Gqqu8kFVzk7RcCyzjryfMIXR0YQZc+fPpKKGUeTH3gAzzy7nPcf2qK/cq3HeMWGNY552RRNDpJV24MA6KxNx/J4ZhGigwGLXy0EkR5oSzRYm/cu+Gnr+nByBjlLXJyCUJl9JE81iiDoiADhr7C0fpiJTzQu4/VgX/u/NkUuDfKRG2uLsESwjVA5/34BBrLppUgFMKlbz+4he8FTsEj8zve3eFh5oFjHoaEqisK6VTvHbbK0vyERwjqQln4wtAHdvL8bSYOrzNI7bv+KPbAhbGlZdNKELsicPWC1ni6ALH9Dcck5lZsaOMSBBmratsJCWBOmbfxLN817I0+cFwJlC4w9bIC1zHtBHU2N2GtJGiCCnZiEAVtsGeEqyhohAw2ghAFbZBnhKsoaIQMNoIQBW2QZ4SrKGiEDDaCEAVtkGeEqyhohAw2ghAFbZBnhKso+N9k+EcHpb2CvwAAAP//UKJw/QAAAAZJREFUAwDVaoRg8PVQJAAAAABJRU5ErkJggg=="
                alt="Odd zonas"
                class="w-8 h-8 mb-2"
              />
              <span class="font-medium text-base/5 text-neutral-60"
                >Conexión 2G</span
              >
            </div>

            <div class="flex flex-col items-center text-center">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAADH0lEQVR4AexUbUiTURQ+WMw/FmUrEvsyKBRBZUSMsvygREqSPgiUoC2i/sgII4QIIxFBIpEQooi0COtHGYuMMAhXUqtgaRGFRJNqFGUf2CCMoPYcvKMFsffyUtyNM3bee+9z77n3nOc592bklzX/TGfLoDT/SYKpLrAoKAoazoCUqOECJQ1PFExKkeELREHDBUoaniiYlCLDF4iChguUNDxRMIGiFByIgikoWkLIomACHSk4EAX/FK31QC09GzwSN4yxBq3Cr/U0ANKy7o6d8T0f32wm365KcrvyaPDSfsYVprVpbLG2grk5sygYekkF5YfZDh3106aqYiopXEjexh7GJr//4ABj+1v+z82eQZf7Q+xftL6Fjp+5RXt3rKWh+y8YO31hiMrcyy3vpxZqJ4hA3K6lzCrYBcsri5cQkupqrWM80zGdA1SH+GJq3PU3MREgA31gah57ZGVl0taNLvZHBQDDWQXLchjbXVdKgeCocrHcaiWIQx2x4E+cCzCr4VfjzDJOW7wgm1o6+xnHGCWLFgY1Lvof0p76NdTgqSD0gWEONs85Ew01tfXF/b3bVxOSnoh+YwwK1qwr4rLlxRY/WgkGQ2Gqqu8kFVzk7RcCyzjryfMIXR0YQZc+fPpKKGUeTH3gAzzy7nPcf2qK/cq3HeMWGNY552RRNDpJV24MA6KxNx/J4ZhGigwGLXy0EkR5oSzRYm/cu+Gnr+nByBjlLXJyCUJl9JE81iiDoiADhr7C0fpiJTzQu4/VgX/u/NkUuDfKRG2uLsESwjVA5/34BBrLppUgFMKlbz+4he8FTsEj8zve3eFh5oFjHoaEqisK6VTvHbbK0vyERwjqQln4wtAHdvL8bSYOrzNI7bv+KPbAhbGlZdNKELsicPWC1ni6ALH9Dcck5lZsaOMSBBmratsJCWBOmbfxLN817I0+cFwJlC4w9bIC1zHtBHU2N2GtJGiCCnZiEAVtsGeEqyhohAw2ghAFbZBnhKsoaIQMNoIQBW2QZ4SrKGiEDDaCEAVtkGeEqyhohAw2ghAFbZBnhKso+N9k+EcHpb2CvwAAAP//UKJw/QAAAAZJREFUAwDVaoRg8PVQJAAAAABJRU5ErkJggg=="
                alt="Odd zonas"
                class="w-8 h-8 mb-2"
              />
              <span class="font-medium text-base/5 text-neutral-60"
                >Conexión 4G</span
              >
            </div>

            <div class="flex flex-col items-center text-center">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAADH0lEQVR4AexUbUiTURQ+WMw/FmUrEvsyKBRBZUSMsvygREqSPgiUoC2i/sgII4QIIxFBIpEQooi0COtHGYuMMAhXUqtgaRGFRJNqFGUf2CCMoPYcvKMFsffyUtyNM3bee+9z77n3nOc592bklzX/TGfLoDT/SYKpLrAoKAoazoCUqOECJQ1PFExKkeELREHDBUoaniiYlCLDF4iChguUNDxRMIGiFByIgikoWkLIomACHSk4EAX/FK31QC09GzwSN4yxBq3Cr/U0ANKy7o6d8T0f32wm365KcrvyaPDSfsYVprVpbLG2grk5sygYekkF5YfZDh3106aqYiopXEjexh7GJr//4ABj+1v+z82eQZf7Q+xftL6Fjp+5RXt3rKWh+y8YO31hiMrcyy3vpxZqJ4hA3K6lzCrYBcsri5cQkupqrWM80zGdA1SH+GJq3PU3MREgA31gah57ZGVl0taNLvZHBQDDWQXLchjbXVdKgeCocrHcaiWIQx2x4E+cCzCr4VfjzDJOW7wgm1o6+xnHGCWLFgY1Lvof0p76NdTgqSD0gWEONs85Ew01tfXF/b3bVxOSnoh+YwwK1qwr4rLlxRY/WgkGQ2Gqqu8kFVzk7RcCyzjryfMIXR0YQZc+fPpKKGUeTH3gAzzy7nPcf2qK/cq3HeMWGNY552RRNDpJV24MA6KxNx/J4ZhGigwGLXy0EkR5oSzRYm/cu+Gnr+nByBjlLXJyCUJl9JE81iiDoiADhr7C0fpiJTzQu4/VgX/u/NkUuDfKRG2uLsESwjVA5/34BBrLppUgFMKlbz+4he8FTsEj8zve3eFh5oFjHoaEqisK6VTvHbbK0vyERwjqQln4wtAHdvL8bSYOrzNI7bv+KPbAhbGlZdNKELsicPWC1ni6ALH9Dcck5lZsaOMSBBmratsJCWBOmbfxLN817I0+cFwJlC4w9bIC1zHtBHU2N2GtJGiCCnZiEAVtsGeEqyhohAw2ghAFbZBnhKsoaIQMNoIQBW2QZ4SrKGiEDDaCEAVtkGeEqyhohAw2ghAFbZBnhKso+N9k+EcHpb2CvwAAAP//UKJw/QAAAAZJREFUAwDVaoRg8PVQJAAAAABJRU5ErkJggg=="
                alt="Odd zonas"
                class="w-8 h-8 mb-2"
              />
              <span class="font-medium text-base/5 text-neutral-60"
                >Z-Wave</span
              >
            </div>

            <div class="flex flex-col items-center text-center">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAADH0lEQVR4AexUbUiTURQ+WMw/FmUrEvsyKBRBZUSMsvygREqSPgiUoC2i/sgII4QIIxFBIpEQooi0COtHGYuMMAhXUqtgaRGFRJNqFGUf2CCMoPYcvKMFsffyUtyNM3bee+9z77n3nOc592bklzX/TGfLoDT/SYKpLrAoKAoazoCUqOECJQ1PFExKkeELREHDBUoaniiYlCLDF4iChguUNDxRMIGiFByIgikoWkLIomACHSk4EAX/FK31QC09GzwSN4yxBq3Cr/U0ANKy7o6d8T0f32wm365KcrvyaPDSfsYVprVpbLG2grk5sygYekkF5YfZDh3106aqYiopXEjexh7GJr//4ABj+1v+z82eQZf7Q+xftL6Fjp+5RXt3rKWh+y8YO31hiMrcyy3vpxZqJ4hA3K6lzCrYBcsri5cQkupqrWM80zGdA1SH+GJq3PU3MREgA31gah57ZGVl0taNLvZHBQDDWQXLchjbXVdKgeCocrHcaiWIQx2x4E+cCzCr4VfjzDJOW7wgm1o6+xnHGCWLFgY1Lvof0p76NdTgqSD0gWEONs85Ew01tfXF/b3bVxOSnoh+YwwK1qwr4rLlxRY/WgkGQ2Gqqu8kFVzk7RcCyzjryfMIXR0YQZc+fPpKKGUeTH3gAzzy7nPcf2qK/cq3HeMWGNY552RRNDpJV24MA6KxNx/J4ZhGigwGLXy0EkR5oSzRYm/cu+Gnr+nByBjlLXJyCUJl9JE81iiDoiADhr7C0fpiJTzQu4/VgX/u/NkUuDfKRG2uLsESwjVA5/34BBrLppUgFMKlbz+4he8FTsEj8zve3eFh5oFjHoaEqisK6VTvHbbK0vyERwjqQln4wtAHdvL8bSYOrzNI7bv+KPbAhbGlZdNKELsicPWC1ni6ALH9Dcck5lZsaOMSBBmratsJCWBOmbfxLN817I0+cFwJlC4w9bIC1zHtBHU2N2GtJGiCCnZiEAVtsGeEqyhohAw2ghAFbZBnhKsoaIQMNoIQBW2QZ4SrKGiEDDaCEAVtkGeEqyhohAw2ghAFbZBnhKso+N9k+EcHpb2CvwAAAP//UKJw/QAAAAZJREFUAwDVaoRg8PVQJAAAAABJRU5ErkJggg=="
                alt="Odd zonas"
                class="w-8 h-8 mb-2"
              />
              <span class="font-medium text-base/5 text-neutral-60"
                >220V CA</span
              >
            </div>

            <div class="flex flex-col items-center text-center">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAADH0lEQVR4AexUbUiTURQ+WMw/FmUrEvsyKBRBZUSMsvygREqSPgiUoC2i/sgII4QIIxFBIpEQooi0COtHGYuMMAhXUqtgaRGFRJNqFGUf2CCMoPYcvKMFsffyUtyNM3bee+9z77n3nOc592bklzX/TGfLoDT/SYKpLrAoKAoazoCUqOECJQ1PFExKkeELREHDBUoaniiYlCLDF4iChguUNDxRMIGiFByIgikoWkLIomACHSk4EAX/FK31QC09GzwSN4yxBq3Cr/U0ANKy7o6d8T0f32wm365KcrvyaPDSfsYVprVpbLG2grk5sygYekkF5YfZDh3106aqYiopXEjexh7GJr//4ABj+1v+z82eQZf7Q+xftL6Fjp+5RXt3rKWh+y8YO31hiMrcyy3vpxZqJ4hA3K6lzCrYBcsri5cQkupqrWM80zGdA1SH+GJq3PU3MREgA31gah57ZGVl0taNLvZHBQDDWQXLchjbXVdKgeCocrHcaiWIQx2x4E+cCzCr4VfjzDJOW7wgm1o6+xnHGCWLFgY1Lvof0p76NdTgqSD0gWEONs85Ew01tfXF/b3bVxOSnoh+YwwK1qwr4rLlxRY/WgkGQ2Gqqu8kFVzk7RcCyzjryfMIXR0YQZc+fPpKKGUeTH3gAzzy7nPcf2qK/cq3HeMWGNY552RRNDpJV24MA6KxNx/J4ZhGigwGLXy0EkR5oSzRYm/cu+Gnr+nByBjlLXJyCUJl9JE81iiDoiADhr7C0fpiJTzQu4/VgX/u/NkUuDfKRG2uLsESwjVA5/34BBrLppUgFMKlbz+4he8FTsEj8zve3eFh5oFjHoaEqisK6VTvHbbK0vyERwjqQln4wtAHdvL8bSYOrzNI7bv+KPbAhbGlZdNKELsicPWC1ni6ALH9Dcck5lZsaOMSBBmratsJCWBOmbfxLN817I0+cFwJlC4w9bIC1zHtBHU2N2GtJGiCCnZiEAVtsGeEqyhohAw2ghAFbZBnhKsoaIQMNoIQBW2QZ4SrKGiEDDaCEAVtkGeEqyhohAw2ghAFbZBnhKso+N9k+EcHpb2CvwAAAP//UKJw/QAAAAZJREFUAwDVaoRg8PVQJAAAAABJRU5ErkJggg=="
                alt="Odd zonas"
                class="w-8 h-8 mb-2"
              />
              <span class="font-medium text-base/5 text-neutral-60"
                >Pilas incluidas</span
              >
            </div>

            <div class="flex flex-col items-center text-center">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAADH0lEQVR4AexUbUiTURQ+WMw/FmUrEvsyKBRBZUSMsvygREqSPgiUoC2i/sgII4QIIxFBIpEQooi0COtHGYuMMAhXUqtgaRGFRJNqFGUf2CCMoPYcvKMFsffyUtyNM3bee+9z77n3nOc592bklzX/TGfLoDT/SYKpLrAoKAoazoCUqOECJQ1PFExKkeELREHDBUoaniiYlCLDF4iChguUNDxRMIGiFByIgikoWkLIomACHSk4EAX/FK31QC09GzwSN4yxBq3Cr/U0ANKy7o6d8T0f32wm365KcrvyaPDSfsYVprVpbLG2grk5sygYekkF5YfZDh3106aqYiopXEjexh7GJr//4ABj+1v+z82eQZf7Q+xftL6Fjp+5RXt3rKWh+y8YO31hiMrcyy3vpxZqJ4hA3K6lzCrYBcsri5cQkupqrWM80zGdA1SH+GJq3PU3MREgA31gah57ZGVl0taNLvZHBQDDWQXLchjbXVdKgeCocrHcaiWIQx2x4E+cCzCr4VfjzDJOW7wgm1o6+xnHGCWLFgY1Lvof0p76NdTgqSD0gWEONs85Ew01tfXF/b3bVxOSnoh+YwwK1qwr4rLlxRY/WgkGQ2Gqqu8kFVzk7RcCyzjryfMIXR0YQZc+fPpKKGUeTH3gAzzy7nPcf2qK/cq3HeMWGNY552RRNDpJV24MA6KxNx/J4ZhGigwGLXy0EkR5oSzRYm/cu+Gnr+nByBjlLXJyCUJl9JE81iiDoiADhr7C0fpiJTzQu4/VgX/u/NkUuDfKRG2uLsESwjVA5/34BBrLppUgFMKlbz+4he8FTsEj8zve3eFh5oFjHoaEqisK6VTvHbbK0vyERwjqQln4wtAHdvL8bSYOrzNI7bv+KPbAhbGlZdNKELsicPWC1ni6ALH9Dcck5lZsaOMSBBmratsJCWBOmbfxLN817I0+cFwJlC4w9bIC1zHtBHU2N2GtJGiCCnZiEAVtsGeEqyhohAw2ghAFbZBnhKsoaIQMNoIQBW2QZ4SrKGiEDDaCEAVtkGeEqyhohAw2ghAFbZBnhKso+N9k+EcHpb2CvwAAAP//UKJw/QAAAAZJREFUAwDVaoRg8PVQJAAAAABJRU5ErkJggg=="
                alt="Odd zonas"
                class="w-8 h-8 mb-2"
              />
              <span class="font-medium text-base/5 text-neutral-60"
                >Instalación en interior</span
              >
            </div>

            <div class="flex flex-col items-center text-center">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAADH0lEQVR4AexUbUiTURQ+WMw/FmUrEvsyKBRBZUSMsvygREqSPgiUoC2i/sgII4QIIxFBIpEQooi0COtHGYuMMAhXUqtgaRGFRJNqFGUf2CCMoPYcvKMFsffyUtyNM3bee+9z77n3nOc592bklzX/TGfLoDT/SYKpLrAoKAoazoCUqOECJQ1PFExKkeELREHDBUoaniiYlCLDF4iChguUNDxRMIGiFByIgikoWkLIomACHSk4EAX/FK31QC09GzwSN4yxBq3Cr/U0ANKy7o6d8T0f32wm365KcrvyaPDSfsYVprVpbLG2grk5sygYekkF5YfZDh3106aqYiopXEjexh7GJr//4ABj+1v+z82eQZf7Q+xftL6Fjp+5RXt3rKWh+y8YO31hiMrcyy3vpxZqJ4hA3K6lzCrYBcsri5cQkupqrWM80zGdA1SH+GJq3PU3MREgA31gah57ZGVl0taNLvZHBQDDWQXLchjbXVdKgeCocrHcaiWIQx2x4E+cCzCr4VfjzDJOW7wgm1o6+xnHGCWLFgY1Lvof0p76NdTgqSD0gWEONs85Ew01tfXF/b3bVxOSnoh+YwwK1qwr4rLlxRY/WgkGQ2Gqqu8kFVzk7RcCyzjryfMIXR0YQZc+fPpKKGUeTH3gAzzy7nPcf2qK/cq3HeMWGNY552RRNDpJV24MA6KxNx/J4ZhGigwGLXy0EkR5oSzRYm/cu+Gnr+nByBjlLXJyCUJl9JE81iiDoiADhr7C0fpiJTzQu4/VgX/u/NkUuDfKRG2uLsESwjVA5/34BBrLppUgFMKlbz+4he8FTsEj8zve3eFh5oFjHoaEqisK6VTvHbbK0vyERwjqQln4wtAHdvL8bSYOrzNI7bv+KPbAhbGlZdNKELsicPWC1ni6ALH9Dcck5lZsaOMSBBmratsJCWBOmbfxLN817I0+cFwJlC4w9bIC1zHtBHU2N2GtJGiCCnZiEAVtsGeEqyhohAw2ghAFbZBnhKsoaIQMNoIQBW2QZ4SrKGiEDDaCEAVtkGeEqyhohAw2ghAFbZBnhKso+N9k+EcHpb2CvwAAAP//UKJw/QAAAAZJREFUAwDVaoRg8PVQJAAAAABJRU5ErkJggg=="
                alt="Odd zonas"
                class="w-8 h-8 mb-2"
              />
              <span class="font-medium text-base/5 text-neutral-60"
                >EN50131 de Grado 2</span
              >
            </div>
          </div>
        </div>
      </section>

      <!-- Accesorios -->
      <section id="accessory" class="mb-24 py-24 pt-24 pb-36">
        <div class="text-center">
          <h2
            class="mb-24 font-medium text-12-5/15 text-center text-primary-40-light"
          >
            Accesorios
          </h2>
        </div>

        <div
          class="max-w-7xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4"
        >
          <!-- Card 1 -->
          <div
            class="bg-primary-light rounded-xl shadow inset-shadow-xs p-6 hover:shadow-lg transition"
          >
            <h3 class="text-base/4.5 font-bold text-primary-20-light">
              Soporte de montaje triangular
            </h3>
            <div class="border border-primary-60-light mt-2 mb-6"></div>
            <img
              src="data:image/png;base64,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"
              alt="accesorio imagen"
              class="w-full mb-6"
            />
            <div class="bg-neutral-05 p-6 rounded">
              <p
                class="mb-2 font-medium text-xl/6 font-roboto-condensed uppercase text-shadow-opacities-dark-05"
              >
                Referencia
              </p>
              <p
                class="font-roboto-condensed font-normal text-lg/5 uppercase text-neutral-40"
              >
                Modelo
              </p>
            </div>
            <p class="mt-6 font-normal text-base/6 text-neutral-60 truncate">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <!-- Card 2 -->
          <div
            class="bg-primary-light rounded-xl shadow inset-shadow-xs p-6 hover:shadow-lg transition"
          >
            <h3 class="text-base/4.5 font-bold text-primary-20-light">
              Cubierta waterproof para magnéticos DC-23
            </h3>
            <div class="border border-primary-60-light mt-2 mb-6"></div>
            <img
              src="data:image/png;base64,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"
              alt="accesorio imagen"
              class="w-full mb-6"
            />
            <div class="bg-neutral-05 p-6 rounded">
              <p
                class="mb-2 font-medium text-xl/6 font-roboto-condensed uppercase text-shadow-opacities-dark-05"
              >
                Referencia
              </p>
              <p
                class="font-roboto-condensed font-normal text-lg/5 uppercase text-neutral-40"
              >
                Modelo
              </p>
            </div>
            <p class="mt-6 font-normal text-base/6 text-neutral-60 truncate">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <!-- Card 3 -->
          <div
            class="bg-primary-light rounded-xl shadow inset-shadow-xs p-6 hover:shadow-lg transition"
          >
            <h3 class="text-base/4.5 font-bold text-primary-20-light">
              Soporte giratorio de exterior
            </h3>
            <div class="border border-primary-60-light mt-2 mb-6"></div>
            <img
              src="data:image/png;base64,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"
              alt="accesorio imagen"
              class="w-full mb-6"
            />
            <div class="bg-neutral-05 p-6 rounded">
              <p
                class="mb-2 font-medium text-xl/6 font-roboto-condensed uppercase text-shadow-opacities-dark-05"
              >
                Referencia
              </p>
              <p
                class="font-roboto-condensed font-normal text-lg/5 uppercase text-neutral-40"
              >
                Modelo
              </p>
            </div>
            <p class="mt-6 font-normal text-base/6 text-neutral-60 truncate">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <!-- Card 4 -->
          <div
            class="bg-primary-light rounded-xl shadow inset-shadow-xs p-6 hover:shadow-lg transition"
          >
            <h3 class="text-base/4.5 font-bold text-primary-20-light">
              Soporte giratorio VESTA
            </h3>
            <div class="border border-primary-60-light mt-2 mb-6"></div>
            <img
              src="data:image/png;base64,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"
              alt="accesorio imagen"
              class="w-full mb-6"
            />
            <div class="bg-neutral-05 p-6 rounded">
              <p
                class="mb-2 font-medium text-xl/6 font-roboto-condensed uppercase text-shadow-opacities-dark-05"
              >
                Referencia
              </p>
              <p
                class="font-roboto-condensed font-normal text-lg/5 uppercase text-neutral-40"
              >
                Modelo
              </p>
            </div>
            <p class="mt-6 font-normal text-base/6 text-neutral-60 truncate">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>

      <!-- Lorem ipsum passage -->
      <section
        id="partner-program"
        class="mb-24 mx-auto max-w-6xl px-24 py-12 text-center"
      >
        <h2 class="text-18/20 font-medium text-heading">Lorem Ipsum passage</h2>
        <p class="my-24 text-primary-40-light font-medium text-12-5/15">
          The standard used since the 1500s
        </p>
        <p class="font-normal text-2xl/10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      <!-- Acerca Nosotros Lorem ipsum -->
      <section
        id="acerca-nosotros"
        class="hidden mb-24 mx-auto max-w-5xl pt-12 pb-36"
      >
        <!-- <h2 class="text-18/20 font-medium text-heading text-center">Lorem Ipsum</h2> -->
        <p
          class="mb-24 px-6 text-primary-40-light font-medium text-12-5/15 text-center"
        >
          Lorem Ipsum
        </p>
        <li class="text-primary-20-light mb-10 mr-3 pt-2 text-left text-2xl/10">
          <span class="text-neutral-80 text-2xl/10 font-bold">
            Sed ut perspiciatis unde
          </span>
          <span class="text-neutral-80 text-2xl/10 font-normal">
            ed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </span>
        </li>
        <li class="text-primary-20-light mr-3 pt-2 text-left text-2xl/10">
          <span class="text-neutral-80 text-2xl/10 font-bold">
            Sed ut perspiciatis unde
          </span>
          <span class="text-neutral-80 text-2xl/10 font-normal">
            ed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </span>
        </li>
      </section>

      <!-- Tabla comparativa -->
      <section id="table" class="mb-24 max-w-7xl py-24 px-4 mx-auto">
        <!-- Heading -->
        <h2
          class="text-center font-medium text-12-5/15 text-primary-40-light mb-24 mx-auto"
        >
          Tabla comparativa
        </h2>

        <div class="mb-6">
          <!-- Table -->
          <div class="overflow-x-auto">
            <table class="min-w-sm border-collapse mx-auto">
              <thead>
                <tr
                  class="bg-primary-00 text-neutral-05 text-9-5/11 font-semibold"
                >
                  <th class="text-left p-6 rounded-tl-lg">Beneficios</th>
                  <th class="p-6">Silver</th>
                  <th class="p-6">Gold</th>
                  <th class="p-6">Platinum</th>
                  <th class="p-6 rounded-tr-lg">Diamond</th>
                </tr>
              </thead>
              <tbody class="bg-primary-light">
                <!-- Row 1 -->
                <tr
                  class="border-b border-primary-60-light text-7/9.5 font-semibold"
                >
                  <td class="my-3 py-3 px-3 text-left text-neutral-60">
                    Beneficio A
                  </td>
                  <td class="text-center my-3 py-3 px-3 text-green-500">
                    <i class="text-green-500"></i>&#10004;
                  </td>
                  <td class="text-center my-3 py-3 px-3 text-green-500">
                    <i class="text-green-500"></i>&#10004;
                  </td>
                  <td class="text-center my-3 py-3 px-3 text-green-500">
                    <i class="text-green-500"></i>&#10004;
                  </td>
                  <td class="text-center my-3 py-3 px-3 text-green-500">
                    <i class="text-green-500"></i>&#10004;
                  </td>
                </tr>
                <!-- Row 2 -->
                <tr
                  class="border-b border-primary-60-light text-7/9.5 font-semibold"
                >
                  <td class="my-3 py-3 px-3 text-left text-neutral-60">
                    Beneficio B
                  </td>
                  <td class="text-center my-3 py-3 px-3 text-green-500">
                    <i class="text-green-500"></i>&#10004;
                  </td>
                  <td class="text-center my-3 py-3 px-3 text-green-500">
                    <i class="text-green-500"></i>&#10004;
                  </td>
                  <td class="text-center my-3 py-3 px-3 text-green-500">
                    <i class="text-green-500"></i>&#10004;
                  </td>
                  <td class="text-center my-3 py-3 px-3 text-green-500">
                    <i class="text-green-500"></i>&#10004;
                  </td>
                </tr>
                <!-- Row 3 -->
                <tr
                  class="border-b border-primary-60-light text-7/9.5 font-semibold"
                >
                  <td class="my-3 py-3 px-3 text-left text-neutral-60">
                    Beneficio C
                  </td>
                  <td class="text-center my-3 py-3 px-3 text-red-500">
                    <i class="text-red-500"></i>&#10008;
                  </td>
                  <td class="text-center my-3 py-3 px-3 text-green-500">
                    <i class="text-green-500"></i>&#10004;
                  </td>
                  <td class="text-center my-3 py-3 px-3 text-green-500">
                    <i class="text-green-500"></i>&#10004;
                  </td>
                  <td class="text-center my-3 py-3 px-3 text-green-500">
                    <i class="text-green-500"></i>&#10004;
                  </td>
                </tr>
                <!-- Row 4 -->
                <tr
                  class="border-b border-primary-60-light text-7/9.5 font-semibold"
                >
                  <td class="my-3 py-3 px-3 text-left text-neutral-60">
                    Beneficio D
                  </td>
                  <td class="text-center my-3 py-3 px-3 text-red-500">
                    <i class="text-red-500"></i>&#10008;
                  </td>
                  <td class="text-center my-3 py-3 px-3 text-green-500">
                    <i class="text-green-500"></i>&#10004;
                  </td>
                  <td class="text-center my-3 py-3 px-3 text-green-500">
                    <i class="text-green-500"></i>&#10004;
                  </td>
                  <td class="text-center my-3 py-3 px-3 text-green-500">
                    <i class="text-green-500"></i>&#10004;
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Notes -->
          <div class="mt-6 space-y-3 font-medium text-xl/6 text-neutral-60">
            <p>(1) Sed ut perspiciatis unde omnis.</p>
            <p>(2) Sed ut perspiciatis unde omnis.</p>
            <p>(3) Sed ut perspiciatis unde omnis.</p>
          </div>
        </div>
      </section>

      <section id="form" class="mx-auto my-24 max-w-5xl pt-24 px-4 pb-36">
        <div class="my-6">
          <div
            class="rounded-xl bg-primary-light p-12 shadow-lg inset-shadow-xs"
          >
            <h2 class="mb-6 text-lg font-bold text-primary-00">Formulario</h2>
            <form id="contactForm" class="grid grid-cols-1 md:grid-cols-2">
              <!-- Inputs -->

              <!-- Nombre -->
              <div class="mb-3 md:mb-6 mr-0 md:mr-6">
                <label
                  for="nombre"
                  class="block text-xs/4 font-regular font-inter mb-1 text-dark pl-4"
                  >Nombre<span>&#42;</span></label
                >
                <input
                  id="nombre"
                  type="text"
                  placeholder="Nombre"
                  class="rounded-4xl border border-neutral-20 px-6 py-3 text-base/6 focus:ring-2 focus:text-primary-10-light focus:outline-none focus:border-primary-10-light w-full my-2 bg-neutral-00 placeholder-neutral-20"
                  required
                />
              </div>

              <!-- Apellido -->
              <div class="mb-3 md:mb-6">
                <label
                  for="apellido"
                  class="block text-xs/4 font-regular font-inter mb-1 text-dark pl-4"
                  >Apellido<span>&#42;</span></label
                >
                <input
                  id="apellido"
                  type="text"
                  placeholder="Apellido"
                  class="rounded-4xl border border-neutral-20 px-4 py-3 text-base/6 focus:ring-2 focus:text-primary-10-light focus:outline-none focus:border-primary-10-light w-full my-2 bg-neutral-00 placeholder-neutral-20"
                  required
                />
              </div>

              <!-- Email -->
              <div class="mb-3 md:mb-6 mr-0 md:mr-6">
                <label
                  for="email"
                  class="block text-xs/4 font-regular font-inter mb-1 text-dark pl-4"
                  >Email<span>&#42;</span></label
                >
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  class="rounded-4xl border border-neutral-20 px-4 py-3 text-base/6 focus:ring-2 focus:text-primary-10-light focus:outline-none focus:border-primary-10-light w-full my-2 bg-neutral-00 placeholder-neutral-20"
                  required
                />
              </div>

              <!-- Empresa -->
              <div class="mb-3 md:mb-6">
                <label
                  for="empresa"
                  class="block text-xs/4 font-regular font-inter mb-1 text-dark pl-4"
                  >Empresa<span>&#42;</span></label
                >
                <input
                  id="empresa"
                  type="text"
                  placeholder="Empresa"
                  class="rounded-4xl border border-neutral-20 px-4 py-3 text-base/6 focus:ring-2 focus:text-primary-10-light focus:outline-none focus:border-primary-10-light w-full my-2 bg-neutral-00 placeholder-neutral-20"
                  required
                />
              </div>

              <!-- Dirección -->
              <div class="mb-3 md:mb-6 mr-0 md:mr-6">
                <label
                  for="direccion"
                  class="block text-xs/4 font-regular font-inter mb-1 text-dark pl-4"
                  >Dirección<span>&#42;</span></label
                >
                <input
                  id="direccion"
                  type="text"
                  placeholder="Dirección"
                  class="rounded-4xl border border-neutral-20 px-4 py-3 text-base/6 focus:ring-2 focus:text-primary-10-light focus:outline-none focus:border-primary-10-light w-full my-2 bg-neutral-00 placeholder-neutral-20"
                  required
                />
              </div>

              <!-- País -->
              <div class="mb-3 md:mb-6">
                <label
                  for="pais"
                  class="block text-xs/4 font-regular font-inter mb-1 text-dark pl-4"
                  >País<span>&#42;</span></label
                >
                <input
                  id="pais"
                  type="text"
                  placeholder="País"
                  class="rounded-4xl border border-neutral-20 px-4 py-3 text-base/6 focus:ring-2 focus:text-primary-10-light focus:border-primary-10-light focus:outline-none w-full my-2 bg-neutral-00 placeholder-neutral-20"
                  required
                />
              </div>

              <!-- Textarea -->
              <label
                for="partner-program"
                class="text-xs/4 font-regular font-inter text-dark pl-4 mb-1"
                >Estoy interesado en el Partner Program<span>&#42;</span></label
              >
              <textarea
                id="partner-program"
                placeholder="Estoy interesado en el Partner Program"
                class="border border-neutral-20 rounded-3xl px-6 py-4 focus:outline-none focus:border-primary-10-light focus:ring-2 focus:text-primary-10-light md:col-span-2 resize-none h-32 w-full mt-2 mb-5 md:mb-8 bg-neutral-00 placeholder-neutral-20 font-normal text-base/6"
              ></textarea>

              <!-- Checkbox -->
              <label
                class="flex items-start text-sm text-neutral-60 md:col-span-2 mb-3"
              >
                <input
                  type="checkbox"
                  class="mr-2 h-4 w-4 rounded border-neutral-60 text-primary-00 focus:text-primary-10-light"
                  required
                />
                <span class="mb-6 md:mb-12 text-neutral-60">
                  Doy mi consentimiento para el tratamiento de mis datos
                  personales.
                  <a
                    href="#"
                    class="text-link underline hover:text-secondary-20-dark"
                    >He leído y acepto la política de privacidad</a
                  >
                  y el
                  <a
                    href="#"
                    class="text-link underline hover:text-secondary-20-dark"
                    >aviso legal</a
                  >
                  de la empresa.
                </span>
              </label>

              <div class="mb-5 md:mb-8">
                <a
                  href="#"
                  class="text-link underline text-sm hover:text-secondary-20-dark"
                  >¿Cómo protegemos sus datos?</a
                >
              </div>

              <!-- Submit Button -->
              <div class="flex justify-start md:col-span-2">
                <button
                  type="submit"
                  class="rounded-4xl bg-neutral-05 px-7 py-4 text-sm font-medium border-2 text-primary-00 transition hover:bg-neutral-20"
                >
                  Enviar formulario
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  </main>

  <!-- Footer -->
  <footer class="footer w-full font-sans">
    <!-- Top section -->
    <div
      class="grid grid-cols-1 items-center md:items-start gap-6 bg-primary-medium px-24 py-24 pb-12 text-white md:grid-cols-3"
    >
      <!-- Column 1 -->
      <div class="space-y-4 text-center md:text-left">
        <h3 class="text-md font-bold text-secondary-90-light">
          Sobre nosotros
        </h3>
        <ul class="space-y-2">
          <li>
            <a
              id="acerca-nosotros-link"
              href="#"
              class="text-sm underline text-secondary-60-light hover:text-secondary-20-dark focus:outline-none focus:text-primary-10-light"
              >Acerca de Nosotros</a
            >
          </li>
          <li>
            <a
              id="partner-program-link"
              href="#partner-program"
              class="text-sm underline text-secondary-60-light hover:text-secondary-20-dark focus:outline-none focus:text-primary-10-light"
              >Partner Program</a
            >
          </li>
        </ul>
      </div>

      <!-- Column 2 -->
      <div class="space-y-4 text-center md:text-left">
        <h3 class="text-md font-bold text-secondary-90-light">Software</h3>
        <a
          href="#"
          class="block text-sm underline text-secondary-60-light hover:text-secondary-20-dark focus:outline-none focus:text-primary-10-light"
          >Aplicación móvil</a
        >
        <div
          class="flex flex-col gap-4 items-center justify-center md:items-start md:justify-start"
        >
          <a
            href="https://www.apple.com/store"
            target="_blank"
            class="hover:animate-wiggle"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_(iOS).svg"
              alt="App Store"
              class="h-11"
            />
          </a>
          <a
            href="https://play.google.com/store/apps?hl=en"
            target="_blank"
            class="hover:animate-wiggle"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              class="h-11"
            />
          </a>
        </div>
      </div>

      <!-- Column 3 (Logo) -->
      <div
        class="flex flex-col items-center justify-center md:items-start md:justify-start gap-6"
      >
        <div class="flex items-center space-x-2">
          <div class="flex items-center space-x-2">
            <!-- Icon (placeholder box) -->
            <div
              class="h-7 w-5 md:h-8 md:w-6 lg:h-10 lg:w-7 rounded bg-logo-red"
            ></div>
            <span
              class="font-bold text-2xl md:text-3xl lg:text-4xl text-secondary-90-light"
              >Logo</span
            >
          </div>
        </div>
        <div>
          <a
            href="https://es.linkedin.com/"
            target="_blank"
            class="hover:animate-ping"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              width="30"
              height="30"
              viewBox="0 0 256 256"
              xml:space="preserve"
            >
              <g
                style="
                  stroke: none;
                  stroke-width: 0;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill: none;
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform="translate(45.02412451361867 45.024124513618645) scale(1.83 1.83)"
              >
                <path
                  d="M 1.48 29.91 h 18.657 v 60.01 H 1.48 V 29.91 z M 10.809 0.08 c 5.963 0 10.809 4.846 10.809 10.819 c 0 5.967 -4.846 10.813 -10.809 10.813 C 4.832 21.712 0 16.866 0 10.899 C 0 4.926 4.832 0.08 10.809 0.08"
                  style="
                    stroke: none;
                    stroke-width: 1;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 10;
                    fill: rgb(255, 255, 255);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  transform=" matrix(1 0 0 1 0 0) "
                  stroke-linecap="round"
                />
                <path
                  d="M 31.835 29.91 h 17.89 v 8.206 h 0.255 c 2.49 -4.72 8.576 -9.692 17.647 -9.692 C 86.514 28.424 90 40.849 90 57.007 V 89.92 H 71.357 V 60.737 c 0 -6.961 -0.121 -15.912 -9.692 -15.912 c -9.706 0 -11.187 7.587 -11.187 15.412 V 89.92 H 31.835 V 29.91 z"
                  style="
                    stroke: none;
                    stroke-width: 1;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 10;
                    fill: rgb(255, 255, 255);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  transform=" matrix(1 0 0 1 0 0) "
                  stroke-linecap="round"
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom section -->
    <div
      class="flex flex-col md:flex-row items-center justify-between bg-primary-dark px-24 pt-12 pb-6 text-xs text-white"
    >
      <!-- Left -->
      <div>
        <div class="font-bold mb-3 md:mb-4 text-center md:text-left">
          © Copyright 2025
        </div>
        <div
          class="flex flex-col md:flex-row md:flex-wrap justify-center md:gap-y-1 md:gap-x-2 lg:gap-y-2 lg:gap-x-4 text-center"
        >
          <a
            href="#"
            class="hover:underline mb-3 md:mb-0 focus:outline-none focus:text-primary-10-light"
            >Política de privacidad</a
          >
          <span class="hidden md:inline">|</span>
          <a
            href="#"
            class="hover:underline mb-3 md:mb-0 focus:outline-none focus:text-primary-10-light"
            >Política de cookies</a
          >
          <span class="hidden md:inline">|</span>
          <a
            href="#"
            class="hover:underline mb-3 md:mb-0 focus:outline-none focus:text-primary-10-light"
            >Configuración de cookies</a
          >
          <span class="hidden md:inline">|</span>
          <a
            href="#"
            class="hover:underline md:mb-0 focus:outline-none focus:text-primary-10-light"
            >Aviso legal</a
          >
        </div>
      </div>

      <!-- HOVER Footer Language selector - Dropdown Wrapper (Mobile) -->
      <div class="relative group z-10">
        <button
          id="desktop-footer-language-selector"
          class="items-center px-6 py-4 hover:text-secondary-20-dark focus:outline-none focus:text-primary-10-light focus:border-primary-10-light hidden md:flex"
        >
          <span class="mr-3">Español</span>
          <svg
            class="h-4 w-4"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            transform="rotate(-180)"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          id="footer-language-desktop"
          class="absolute right-0 w-32 bg-primary-light rounded-xl opacity-100 group-hover:opacity-100 invisible group-hover:visible transition-opacity py-3 bottom-full text-dark shadow-lg inset-shadow-sm inset-shadow-primary-dark"
        >
          <a href="#" class="block px-6 py-2 text-sm hover:bg-neutral-20"
            >Español</a
          >
          <a href="#" class="block px-6 py-2 text-sm hover:bg-neutral-20"
            >Inglés</a
          >
          <a href="#" class="block px-6 py-2 text-sm hover:bg-neutral-20"
            >Francés</a
          >
          <a href="#" class="block px-6 py-2 text-sm hover:bg-neutral-20"
            >Portugués</a
          >
        </div>
      </div>

      <!-- ON CLICK Footer Language selector - Dropdown Wrapper (Mobile) -->
      <div class="relative inline-block text-left mt-3 md:hidden">
        <!-- Trigger Button -->
        <button
          id="dropdownBtnFooterLanguageMobile"
          class="inline-flex cursor-pointer items-center hover:underline"
        >
          <span>Español</span>
          <svg
            class="ml-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            transform="rotate(-180)"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        <!-- Dropdown Menu (Opens Up) -->
        <div
          id="dropdownMenuFooterLanguageMobile"
          class="absolute right-0 bottom-full mb-2 mr-[-22px] hidden w-28 rounded-xl bg-primary-light text-dark py-3 opacity-100 shadow-lg inset-shadow-sm inset-shadow-primary-dark transition-opacity group-hover:visible group-hover:opacity-100"
        >
          <a href="#" class="block px-6 py-2 text-xs hover:bg-neutral-20"
            >Español</a
          >
          <a href="#" class="block px-6 py-2 text-xs hover:bg-neutral-20"
            >Inglés</a
          >
          <a href="#" class="block px-6 py-2 text-xs hover:bg-neutral-20"
            >Francés</a
          >
          <a href="#" class="block px-6 py-2 text-xs hover:bg-neutral-20"
            >Portugués</a
          >
        </div>
      </div>
    </div>
  </footer>
</div>
`
//****************************************************** Mobile  *************************************/
// Mobile Menu toggle
const openBtn = document.getElementById('openMenu');
const closeBtn = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuBg = document.getElementById('menuBg');

openBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('translate-x-full');
  mobileMenuBg.classList.remove('hidden');
});

closeBtn.addEventListener('click', closeMenu);
mobileMenuBg.addEventListener('click', closeMenu);

function closeMenu() {
  mobileMenu.classList.add('translate-x-full');
  mobileMenuBg.classList.add('hidden');
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

//****************************************************** Footer  *************************************/
// Footer Language dropdown toggle onclick
const btnDdpFooterLanguageMobile = document.getElementById('dropdownBtnFooterLanguageMobile');
const menuDdpFooterLanguageMobile = document.getElementById('dropdownMenuFooterLanguageMobile');

btnDdpFooterLanguageMobile.addEventListener('click', () => {
  menuDdpFooterLanguageMobile.classList.toggle('hidden');
});

// Close if clicked outside
document.addEventListener('click', (event) => {
  if (!btnDdpFooterLanguageMobile.contains(event.target) && !menuDdpFooterLanguageMobile.contains(event.target)) {
    menuDdpFooterLanguageMobile.classList.add('hidden');
  }
});

//****************************************************** Carousel  *************************************/
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

//****************************************************** Navigation links  *************************************/
const partnerLink = document.getElementById('partner-program-link');
const acercaLink = document.getElementById('acerca-nosotros-link');
const heroSection = document.getElementById('hero');
const advantageSection = document.getElementById('advantage');
const accessorySection = document.getElementById('accessory');
const acercaSection = document.getElementById('acerca-nosotros');
const tableSection = document.getElementById('table');
const formSection = document.getElementById('form');

// Partner program link
partnerLink.addEventListener('click', (event) => {
  heroSection.classList.add('hidden');
  formSection.classList.add('hidden');
  advantageSection.classList.add('hidden');
  accessorySection.classList.add('hidden');
  tableSection.classList.add('hidden');
  acercaSection.classList.add('hidden');

});

// Acerca Nosotros link
acercaLink.addEventListener('click', (event) => {
  heroSection.classList.add('hidden');
  formSection.classList.add('hidden');
  advantageSection.classList.add('hidden');
  accessorySection.classList.add('hidden');
  tableSection.classList.add('hidden');
  acercaSection.classList.remove('hidden');
});