<template>
  <div id="three-container" class="fixed inset-0 z-0"></div>
</template>

<script setup>
import * as THREE from 'three'
import { onMounted, onUnmounted } from 'vue'

let scene, camera, renderer, particles

onMounted(() => {
  if (process.client) {
    initThree()
    animate()
  }
})

onUnmounted(() => {
  if (renderer) {
    renderer.dispose()
  }
})

function initThree() {
  // Create scene
  scene = new THREE.Scene()
  
  // Create camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 5
  
  // Create renderer
  renderer = new THREE.WebGLRenderer({ alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setClearColor(0x000000, 0)
  
  const container = document.getElementById('three-container')
  if (container) {
    container.appendChild(renderer.domElement)
  }
  
  // Create particles
  const geometry = new THREE.BufferGeometry()
  const particleCount = 1000
  const positions = new Float32Array(particleCount * 3)
  
  for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10
  }
  
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  
  const material = new THREE.PointsMaterial({
    color: 0xff6200,
    size: 0.02,
    transparent: true,
    opacity: 0.8
  })
  
  particles = new THREE.Points(geometry, material)
  scene.add(particles)
  
  // Handle window resize
  window.addEventListener('resize', onWindowResize)
}

function animate() {
  requestAnimationFrame(animate)
  
  if (particles) {
    particles.rotation.x += 0.001
    particles.rotation.y += 0.002
  }
  
  if (renderer && scene && camera) {
    renderer.render(scene, camera)
  }
}

function onWindowResize() {
  if (camera && renderer) {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }
}
</script>