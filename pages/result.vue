<template>
  <div class="bg-gray-50 min-h-screen p-4">
    <!-- Header -->
    <div class="flex items-center justify-between mb-4">
      <h1 class="text-3xl font-bold text-purple-700">ngmusic</h1>
      <button class="text-2xl">
        <i class="fas fa-bars"></i>
      </button>
    </div>

    <!-- Search Results -->
    <div class="bg-white p-4 rounded-lg shadow-md">
      <h2 class="text-lg font-semibold text-purple-600 mb-4">
        Search result for: <span class="text-purple-800">Json Mraz</span>
      </h2>

      <!-- Songs List -->
      <div class="space-y-4">
        <div
          v-for="(song, index) in songs"
          :key="index"
          class="flex items-center justify-between p-3 bg-white rounded-lg shadow"
        >
          <div class="flex items-center">
            <img :src="song.image" alt="" class="w-16 h-16 mr-4 rounded" />
            <div>
              <h3 class="text-lg font-semibold">{{ song.title }}</h3>
              <p class="text-sm text-gray-500">{{ song.artist }}</p>
            </div>
          </div>
          <div class="flex items-center space-x-2">
            <span class="bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
              {{ song.genre }}
            </span>
            <span class="text-yellow-500 font-bold">{{ song.price }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Load More Button -->
    <div class="text-center mt-6">
      <button
        class="bg-gray-200 text-gray-600 font-semibold py-2 px-4 rounded-full hover:bg-gray-300"
      >
        Load More
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const songs = [
  {
    image: '/path/to/rough_water.jpg',
    title: 'Rough Water (feat. Jason Mraz)',
    artist: 'Travie McCoy',
    genre: 'Pop',
    price: '$1.9',
  },
  {
    image: '/path/to/sleeping_to_dream.jpg',
    title: 'Sleeping to Dream',
    artist: 'Json Mraz',
    genre: 'Pop',
    price: '$1.29',
  },
  {
    image: '/path/to/everybody_got_somebody.jpg',
    title: "Everybody's Got Somebody But Me (feat. Jason Mraz)",
    artist: 'Json Mraz',
    genre: 'Pop',
    price: '$1.29',
  },
  {
    image: '/path/to/you_and_i_both.jpg',
    title: 'You & I Both',
    artist: 'Json Mraz',
    genre: 'Pop',
    price: '$0.29',
  },
];
</script>

<style scoped>
/* Custom styles can go here */
</style>
