<template>
   <section class="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-md text-center">
      <h2 class="font-serif text-2xl font-bold sm:text-3xl">POKEMON</h2>
    </div>

    <div class="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
      
      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="../assets/img/12.png" alt="" />
        </div>
        <div class="absolute top-0 m-2 rounded-full bg-white">
          <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">#1</p>
        </div>
        <h3 class="font-serif text-2xl font-bold sm:text-3xl"><center>Bulbasaur</center></h3>
        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
          </div>
        </div>
       <button>
        <a href="#" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"> GRASS </a>
        <a href="#" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"> POISON </a>
       </button>
      </article>

      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="../assets/img/002.png" alt="" />
        </div>
        <div class="absolute top-0 m-2 rounded-full bg-white">
          <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
        </div>
        <h3 class="font-serif text-2xl font-bold sm:text-3xl"><center>Ivysaur</center></h3>
        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
          </div>
        </div>
        <button>
          <a href="#" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"> GRASS </a>
          <a href="#" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"> POISON </a>
       </button>
      </article>

      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="../assets/img/003.png" alt="" />
        </div>
        <div class="absolute top-0 m-2 rounded-full bg-white">
          <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
        </div>
        <h3 class="font-serif text-2xl font-bold sm:text-3xl"><center>Venusaur</center></h3>
        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
          </div>
        </div>
        <button>
          <a href="#" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"> GRASS </a>
          <a href="#" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"> POISON </a>
       </button>
      </article>

      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="data:image/png;base64,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" alt="" />
        </div>
        <div class="absolute top-0 m-2 rounded-full bg-white">
          <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
        </div>
        <h3 class="font-serif text-2xl font-bold sm:text-3xl"><center>Charmander</center></h3>
        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
          </div>
        </div>
        <button>
          <a href="#" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"> GRASS </a>
          <a href="#" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"> POISON </a>
        </button> 
        <br><br>
      </article>

      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="https://id.portal-pokemon.com/play/resources/pokedex/img/pm/285395ca77d82861fd30cea64567021a50c1169c.png" alt="" />
        </div>
        <div class="absolute top-0 m-2 rounded-full bg-white">
          <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
        </div>
        <h3 class="font-serif text-2xl font-bold sm:text-3xl"><center>Charmeleon</center></h3>
        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
          </div>
        </div>
        <button>
          <a href="#" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"> GRASS </a>
          <a href="#" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"> POISON </a>
       </button>
      </article>
      
      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png" alt="" />
        </div>
        <div class="absolute top-0 m-2 rounded-full bg-white">
          <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
        </div>
        <h3 class="font-serif text-2xl font-bold sm:text-3xl"><center>Charizard</center></h3>
        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
          </div>
        </div>
        <button>
          <a href="#" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"> GRASS </a>
          <a href="#" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"> POISON </a>
        </button> 
      </article>
      
      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="https://upload.wikimedia.org/wikipedia/id/e/e3/Squirtle.png" alt="" />
        </div>
        <div class="absolute top-0 m-2 rounded-full bg-white">
          <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
        </div>
        <h3 class="font-serif text-2xl font-bold sm:text-3xl"><center>Squirtle</center></h3>
        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
          </div>
        </div>
        <button>
          <a href="#" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"> GRASS </a>
          <a href="#" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"> POISON </a>
        </button>
      </article>

         
      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="https://id.portal-pokemon.com/play/resources/pokedex/img/pm/a3bc17e6215031332462cc64e59b7922ddd14b91.png" alt="" />
        </div>
        <div class="absolute top-0 m-2 rounded-full bg-white">
          <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
        </div>
        <h3 class="font-serif text-2xl font-bold sm:text-3xl"><center>Wartortle</center></h3>
        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
          </div>
        </div>
        <button>
          <a href="#" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"> GRASS </a>
          <a href="#" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"> POISON </a>
        </button> 
        <br>
      </article>

         
      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="https://id.portal-pokemon.com/play/resources/pokedex/img/pm/00186af714a048895ba8116e71b08671c3cfb8f5.png" alt="" />
        </div>
        <div class="absolute top-0 m-2 rounded-full bg-white">
          <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
        </div>
        <h3 class="font-serif text-2xl font-bold sm:text-3xl"><center>Blastoise</center></h3>
        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
          </div>
        </div>
        <button>
          <a href="#" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"> GRASS </a>
          <a href="#" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"> POISON </a>
        </button>
      </article>

         
      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTc2NDU5MzAxNzgxNjQ0NTAx/pokemon-caterpie-nicknames.png" alt="" />
        </div>
        <div class="absolute top-0 m-2 rounded-full bg-white">
          <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
        </div>
        <h3 class="font-serif text-2xl font-bold sm:text-3xl"><center>Caterpie</center></h3>
        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
          </div>
        </div>
        <button>
          <a href="#" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"> GRASS </a>
          <a href="#" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"> POISON </a>
        </button>
        <br>
      </article>
   
      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png" alt="" />
        </div>
        <div class="absolute top-0 m-2 rounded-full bg-white">
          <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
        </div>
        <h3 class="font-serif text-2xl font-bold sm:text-3xl"><center>Charizard</center></h3>
        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
          </div>
        </div>
        <button>
          <a href="#" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"> GRASS </a>
          <a href="#" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"> POISON </a>
        </button>
      </article>
      
      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png" alt="" />
        </div>
        <div class="absolute top-0 m-2 rounded-full bg-white">
          <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
        </div>
        <h3 class="font-serif text-2xl font-bold sm:text-3xl"><center>Charizard</center></h3>
        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
          </div>
        </div>
        <button>
          <a href="#" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"> GRASS </a>
          <a href="#" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"> POISON </a>
        </button>
      </article>
      

      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png" alt="" />
        </div>
        <div class="absolute top-0 m-2 rounded-full bg-white">
          <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
        </div>
        <h3 class="font-serif text-2xl font-bold sm:text-3xl"><center>Charizard</center></h3>
        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
          </div>
        </div>
        <button>
          <a href="#" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"> GRASS </a>
          <a href="#" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"> POISON </a>
        </button>
      </article>
      
      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png" alt="" />
        </div>
        <div class="absolute top-0 m-2 rounded-full bg-white">
          <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
        </div>
        <h3 class="font-serif text-2xl font-bold sm:text-3xl"><center>Charizard</center></h3>
        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
          </div>
        </div>
        <button>
          <a href="#" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"> GRASS </a>
          <a href="#" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"> POISON </a>
        </button>
      </article>
      
      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTc2NDU5MzAxNzgxNjQ0NTAx/pokemon-caterpie-nicknames.png" alt="" />
        </div>
        <div class="absolute top-0 m-2 rounded-full bg-white">
          <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
        </div>
        <h3 class="font-serif text-2xl font-bold sm:text-3xl"><center>Caterpie</center></h3>
        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
          </div>
        </div>
        <button>
          <a href="#" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"> GRASS </a>
          <a href="#" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"> POISON </a>
        </button>
        <br>
      </article>
      
      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="../assets/img/003.png" alt="" />
        </div>
        <div class="absolute top-0 m-2 rounded-full bg-white">
          <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
        </div>
        <h3 class="font-serif text-2xl font-bold sm:text-3xl"><center>Venusaur</center></h3>
        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
          </div>
        </div>
        <button>
          <a href="#" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"> GRASS </a>
          <a href="#" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"> POISON </a>
       </button>
      </article>

    </div>
  </div>
</section>

</template>