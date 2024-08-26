<template>
  <header class="fixed top-0 w-full z-50 bg-custom-gradient shadow">
    <nav>
      <div class="flex justify-between items-center h-[7vh] px-4">
        <ButtonMenu />
        <BaseIcon :icon="LogoOnly" size="medium" class="text-white !w-20" />
        <BaseIcon :icon="Search" size="medium" class="text-white" />
      </div>
    </nav>
  </header>
</template>

<script setup>
import LogoOnly from '~/assets/images/ngmusic.svg';
import Search from '~/assets/images/search-lg.svg';
</script>

<style scoped></style>
