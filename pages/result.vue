<template>
  <div class="bg-gray-50 min-h-screen p-4">
    <Header />

    <!-- Search Results -->
    <div class="bg-white px-4 py-16 rounded-lg shadow-md">
      <h2 class="text-lg font-semibold text-purple-600 mb-4">
        Search result for: <span class="text-purple-800">Json Mraz</span>
      </h2>

      <!-- Songs List -->
      <div class="space-y-4">
        <div v-for="(song, index) in songs" :key="index"
          class="flex items-center justify-between p-3 bg-white rounded-lg shadow">
          <div class="flex items-center">
            <img :src="song.image" alt="" class="w-16 h-16 mr-4 rounded" />
            <div>
              <p class="text-[10px] sm:text-sm font-medium text-gray-700">{{ song.artist }}</p>
              <h3 class="text-lg font-semibold">{{ song.title }}</h3>
            </div>
          </div>
          <div class="flex items-center space-x-2">
            <BaseBadge intent="success" size="medium">
              {{ song.genre }}
            </BaseBadge>
            <span class="text-yellow-500 font-bold">{{ song.price }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Load More Button -->
    <div class="text-center mt-6">
      <button class="bg-gray-200 text-gray-600 font-semibold py-2 px-4 rounded-full hover:bg-gray-300">
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
