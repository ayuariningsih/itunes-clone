<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-custom-gradient px-6 py-12">
    <Logo />
    <div class="flex flex-col items-center w-full max-w-xs space-y-4">
      <InputSearch />
      <ButtonSearch />
    </div>
  </div>
</template>

<script setup>
import Logo from '~/components/base/Logo.vue'
import InputSearch from '~/components/base/InputSearch.vue'
import ButtonSearch from '~/components/base/ButtonSearch.vue'

const onSearch = (word) => {
  console.log(word)
  // Redirect to the result page
  router.push({ name: 'result', query: { word } })
}
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
