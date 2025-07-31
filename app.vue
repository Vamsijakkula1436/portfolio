<template>
  <div id="app" class="min-h-screen bg-black text-white overflow-x-hidden">
    <!-- Three.js Background -->
    <ThreeBackground />
    
    <!-- Header -->
    <AppHeader />
    
    <!-- Main Content -->
    <main class="relative z-10">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
// Component setup - global meta configuration is handled in nuxt.config.ts
</script>