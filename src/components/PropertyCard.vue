<template>
<div class="overflow-hidden bg-white border rounded-lg">
  <img :src="property.imageUrl" :alt="property.imageAlt">
  <div class="p-6 text-gray-800">
          <div class="text-sm font-semibold tracking-wide text-gray-600 uppercase">
        {{ property.beds }} beds &bull; {{ property.baths }} baths
      </div>
      <h4 class="text-lg font-semibold leading-tight truncate">{{ property.title }}</h4>

      <div class="mt-1">
        {{ property.formattedPrice }}
        <span class="text-sm text-gray-600">/wk</span>
      </div>
      <div class="flex items-center mt-2">
        <svg v-for="i in 5" :key="i" :class="i <= property.rating ? 'text-purple-500' : 'text-gray-400'" class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245 245">
        <path d="m56,237 74-228 74,228L10,96h240"/>
        </svg>
        <span class="ml-2 text-sm text-gray-600 "> {{property.reviewCount }} reviews</span>
      </div>
      </div>
</div>
  
</template>
<script>

export default({
  name: 'PropertyCard',
  props: ['property'],
})
</script>
