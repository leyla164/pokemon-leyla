<template>
    <div>
      <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-1 left-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" class="flex items-center">
            <img src="../assets/img/poke.jpg" class="h-8 mr-3" alt="Flowbite Logo">
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
          </a>
          <div class="flex md:order-2">

            <div v-if="isAuthenticated">
              <router-link to="/cart-checkout" class="relative inline-flex items-center mr-4 px-5">
              <router-link to="/cart" class="relative inline-flex items-center mr-4 px-5">
    
              
              </router-link>
             </router-link>
  
            </div>
            <div v-if="isAuthenticated" class="flex md:order-2">
                 <CartBadgeComponent/>
              <div >
            
              </div>
            </div>
            <div v-else>
              <a href="/Tambah"
                class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">+</a>
            </div>
            <button data-collapse-toggle="navbar-sticky" type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          </div>
        </div>
      </nav>
    </div>
  </template>
    
<script>
import Tambah from '../views/Tambah.vue';

export default {
  data() {
    return {
      navbarColor: 'red' // Ganti dengan warna pilihan Anda
    };
  },
  computed: {
    navbarClass() {
      return 'navbar navbar-expand-lg ' + this.navbarColor;
    }
  }
};
</script>

<style>
.red {
  background-color: red;
}

/* Tambahkan gaya untuk warna lain jika diperlukan */
</style>

