<template>
<div class="">
  <!-- This is how you would do it in IE11 if you require IE11 support - though it is not as accessible for screen readers 
  <div class="h-48 bg-center bg-cover" :style="{ backgroundImage: `url('${property.imageUrl}')`}"></div> -->
  <div class="relative pb-5/6" >
    <img class="object-cover w-full h-full rounded-lg shadow-md " :src="property.imageUrl" :alt="property.imageAlt" />
  </div>
  <div class="relative px-4 -mt-16">
    <div class="p-4 bg-white rounded-lg shadow-lg">
      <div class="p-4 text-gray-800">
        <div class="flex items-baseline">
          <span class="inline-block px-2 py-1 text-xs font-semibold tracking-wide text-purple-800 uppercase bg-purple-300 rounded-full">New</span>
          <div class="ml-2 text-sm font-semibold tracking-wide text-gray-600 uppercase">
            {{ property.beds }} beds &bull; {{ property.baths }} baths
          </div>
        </div>
      <h4 class="mt-1 text-lg font-semibold leading-tight truncate">{{ property.title }}</h4>

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
</div>
  </div>
</template>
<script>

export default({
  name: 'PropertyCard',
  props: ['property'],
})
</script>
