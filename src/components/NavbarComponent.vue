<template>
  <header class="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-5 sm:py-3">
    <div class="flex items-center justify-between px-5 py-3 sm:p-0">
      <img class="h-16" src="../assets/logo.png" alt="WorKcation">

    <div class="sm:hidden">
      <button @click="isOpen = !isOpen" type="button" class="block">
        <svg v-if="isOpen" class="w-6 h-6 text-gray-600 fill-current hover:text-gray-300 focus:outline-none" viewBox="0 0 460.775 460.775">
          <path d="M285.08 230.397 456.218 59.27c6.076-6.077 6.076-15.911 0-21.986L423.511 4.565a15.55 15.55 0 0 0-21.985 0l-171.138 171.14L59.25 4.565a15.551 15.551 0 0 0-21.985 0L4.558 37.284c-6.077 6.075-6.077 15.909 0 21.986l171.138 171.128L4.575 401.505c-6.074 6.077-6.074 15.911 0 21.986l32.709 32.719a15.555 15.555 0 0 0 21.986 0l171.117-171.12 171.118 171.12a15.551 15.551 0 0 0 21.985 0l32.709-32.719c6.074-6.075 6.074-15.909 0-21.986L285.08 230.397z"/>
        </svg>
        <svg v-if="!isOpen" class="w-6 h-6 text-gray-500 fill-current hover:text-gray-300 focus:outline-none" viewBox="0 0 100 100">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
      </button>
    </div>
    </div>

    <div :class="isOpen ? 'block' : 'hidden' " class="px-4 pt-2 pb-4 sm:flex sm:p-0">
      <a href="#" class="block px-2 py-1 font-semibold text-white rounded hover:bg-gray-800">List your property</a>
      <a href="#" class="block px-2 py-1 mt-1 font-semibold text-white rounded sm:ml-2 sm:mt-0 hover:bg-gray-800">Trips</a>
      <a href="#" class="block px-2 py-1 mt-1 font-semibold text-white rounded sm:ml-2 sm:mt-0 hover:bg-gray-800">Messages</a>
      <account-dropdown class="ml-6"/>
    </div>
      
    </header>
</template>
<script>
import AccountDropdown from './AccountDropdown.vue';

export default ({

  name: 'NavbarComponent',
  components: {
    AccountDropdown,
  },
  data() {
    return {
      isOpen: false,

    }
    
  }
})
</script>
