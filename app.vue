<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts">
// Use SSR-safe IDs for Headless UI
provideHeadlessUseId(() => useId())
</script>
