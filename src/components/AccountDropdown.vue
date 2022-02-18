<template>
<div class="relative">
  <button @click="isOpen = !isOpen" class="relative z-20 block w-8 h-8 overflow-hidden border-2 border-gray-600 rounded-full focus:outline-none focus:border-white">
    <img class="object-cover w-full h-full " src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="avatar" />
  </button>
  <button v-if="isOpen" @click="isOpen = false" tabindex="-1" class="fixed inset-0 z-10 w-full h-full bg-black opacity-50 cursor-default"></button>

  <div v-if="isOpen" class="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-lg shadow-xl">
    <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-purple-500 hover:text-white">Account settings</a>
    <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-purple-500 hover:text-white">Support</a>
    <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-purple-500 hover:text-white">Sign out</a>
  </div>
</div>
  
</template>
<script>
import { onUnmounted } from "vue";
export default {
  name: 'AccountDropdown',
  data() {
    return {
      isOpen: false,
    }
    
  },
  created() {
    const handleEscape = (e) => {
      if (e.key === 'Esc' || e.key === 'Escape' ) {
        this.isOpen = false;
      }
    }
    document.addEventListener('keydown', handleEscape);
    // clean up to prevent memory leaks when the instance is destroyed
    onUnmounted(() => document.removeEventListener('keydown',handleEscape));

  }
}
</script>