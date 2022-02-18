<template>
  <header class="flex items-center justify-between px-5 py-3 bg-gray-900">
    <div>
      <img class="h-16" src="../assets/logo.png" alt="WorKcation">
    </div>

    <div>
      <button type="button" class="block">
        <svg class="w-6 h-6 text-gray-500 fill-current hover:text-gray-300 focus:outline-none" viewBox="0 0 100 100">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
      </button>
    </div>
  </header>
</template>
<script>

export default ({
  name: 'NavbarComponent'
})
</script>
