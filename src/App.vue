<template>
<div class="bg-gray-300">
  <navbar-component/>
    <div class="flex bg-gray-100">
      <div
        class="p-4 m-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12"
      >
        <div class="xl:max-w-xl xl:ml-auto">
          <img id="logo" src="./assets/logo.png" alt="logo" class="max-w-xs" />
          <img
            class="mt-4 rounded-lg shadow-xl sm:mt-6 sm:object-center sm:w-full sm:object-cover lg:hidden"
            src="./assets/woman_beach.jpg"
            alt="woman vacationing on the beach"
          />
          <h1
            class="mt-4 text-2xl font-bold leading-tight text-gray-900 sm:mt-5 sm:text-4xl lg:text-3xl xl:text-4xl"
          >
            You can work from anywhere.
            <br class="hidden lg:inline" /><span class="text-brand-purple"
              >Take advantage of it.</span
            >
          </h1>
          <p class="mt-2 text-gray-600 sm:text-xl sm:mt-4">
            Workcation helps you find beautiful work-friendly rentals in
            beautiful locations so that you can work anywhere.
          </p>

          <div class="py-4">
            <a href="#" class="shadow-lg btn btn-purple sm:text-base"
              >Book your escape</a
            >
            <a href="#" class="btn btn-gray sm:text-base">Learn more</a>
          </div>
        </div>
      </div>
      <div class="hidden lg:block lg:w-1/2 lg:relative">
        <img
          id="lg-photo"
          class="absolute inset-0 w-full h-72 md:h-full lg:object-cover"
          src="./assets/woman_beach.jpg"
          alt="woman vacationing on the beach"
        />
      </div>
    </div>
      <div>
    <div class="max-w-md px-8 py-8 mx-auto antialiased sm:max-w-xl lg:max-w-6xl lg:px-12">
      <h2 class="text-xl text-gray-900">Popular Destinations</h2>
      <p class="text-gray-600">A selection of great work-friendly cities with beautiful views</p>

    <destination-card/>
    </div>
    <div class="max-w-md px-8 py-8 mx-auto text-gray-900 sm:max-w-xl lg:max-w-6xl lg:px-12">
      <h2 class="text-xl text-gray-900">Some Great Properties</h2>
      <p class="text-gray-600">Some of our Top Properties available for a limited time!</p>

    <property-card :property="property"/>
    
    </div>
  </div>
</div>
</template>

<script>
import PropertyCard from './components/PropertyCard.vue';
import DestinationCard from './components/DestinationCard.vue';
import './assets/tailwind.css';
import NavbarComponent from './components/NavbarComponent.vue';


export default {
  name: 'app',
  components: { 
    DestinationCard,
    PropertyCard,
    NavbarComponent,
     },
  data() {
    return {
      property: {
        imageUrl: 'https://media.istockphoto.com/photos/luxury-villa-picture-id185090634?s=612x612',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: "Modern home in the heart of the city in historic city of Los Angeles",
        priceInCents: 190000,
        formattedPrice: "$1,900.00",
        reviewCount: 34,
        rating: 4,
      }
    }
  }
}
</script>

<style>
</style>
