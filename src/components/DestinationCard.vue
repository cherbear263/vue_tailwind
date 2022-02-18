<template>
      <div class="flex flex-wrap -mx-4">
        <div class="w-full px-4 mt-6 lg:w-1/2 xl:w-1/3" v-for="destination in popularDestinations"
        :key="destination.city">
        <div class="flex items-center bg-white rounded-lg shadow-lg overlow-none">
          <img :src="destination.imageUrl" :alt="destination.imageAlt" class="flex-shrink-0 w-32 h-32">
          <div class="px-6 py-4">
            <h3 class="text-lg font-semibold text-gray-600">{{destination.city}}</h3>
            <p class="text-gray-600">${{destination.averagePrice}} / night average</p>
            <div class="mt-4">
              <a href="#" class="text-brand-purple hover:text-indigo-400 xl:text-sm">Explore {{destination.propertyCount}} properties</a>
            </div>
          </div>

        </div>
        </div></div>

</template>
<script>
export default {
  name: 'Destinationcard',
   data() {
    return {
      popularDestinations: [
        {
          city: 'Toronto',
          averagePrice: 120,
          propertyCount: 76,
          imageUrl: require('../assets/img/toronto.jpg'),
          imageAlt: 'Toronto Skyline',

        },
        {
          city: 'Malibu',
          averagePrice: 215,
          propertyCount: 43,
          imageUrl: require('../assets/img/malibu.jpg'),
          imageAlt: 'Malibu Coastal Drive',

        },
        {
          city: 'Chicago',
          averagePrice: 130,
          propertyCount: 115,
          imageUrl: require('../assets/img/chicago.jpg'),
          imageAlt: 'Chicago Skyline',

        },

      ]
    }

   }
}
</script>
