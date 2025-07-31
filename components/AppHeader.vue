<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
    <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <NuxtLink to="#home" class="relative inline-block">
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="rotating-halo"></div>
            </div>
            <span class="relative z-10 text-2xl font-bold text-white text-3d-glow">VJ</span>
          </NuxtLink>
        </div>
        
        <!-- Navigation Links -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <NuxtLink to="#home" class="text-gray-300 hover:text-orange-400 px-3 py-2 text-sm font-medium transition-colors duration-300">
              Home
            </NuxtLink>
            <NuxtLink to="#about" class="text-gray-300 hover:text-orange-400 px-3 py-2 text-sm font-medium transition-colors duration-300">
              About
            </NuxtLink>
            <NuxtLink to="#skills" class="text-gray-300 hover:text-orange-400 px-3 py-2 text-sm font-medium transition-colors duration-300">
              Skills
            </NuxtLink>
            <NuxtLink to="#projects" class="text-gray-300 hover:text-orange-400 px-3 py-2 text-sm font-medium transition-colors duration-300">
              Projects
            </NuxtLink>
            <NuxtLink to="#contact" class="text-gray-300 hover:text-orange-400 px-3 py-2 text-sm font-medium transition-colors duration-300">
              Contact
            </NuxtLink>
          </div>
        </div>
        
        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button @click="toggleMobileMenu" class="text-gray-300 hover:text-orange-400 p-2">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      <!-- Mobile menu -->
      <div v-show="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-md rounded-lg mt-2">
          <NuxtLink to="#home" @click="closeMobileMenu" class="text-gray-300 hover:text-orange-400 block px-3 py-2 text-base font-medium">
            Home
          </NuxtLink>
          <NuxtLink to="#about" @click="closeMobileMenu" class="text-gray-300 hover:text-orange-400 block px-3 py-2 text-base font-medium">
            About
          </NuxtLink>
          <NuxtLink to="#skills" @click="closeMobileMenu" class="text-gray-300 hover:text-orange-400 block px-3 py-2 text-base font-medium">
            Skills
          </NuxtLink>
          <NuxtLink to="#projects" @click="closeMobileMenu" class="text-gray-300 hover:text-orange-400 block px-3 py-2 text-base font-medium">
            Projects
          </NuxtLink>
          <NuxtLink to="#contact" @click="closeMobileMenu" class="text-gray-300 hover:text-orange-400 block px-3 py-2 text-base font-medium">
            Contact
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>