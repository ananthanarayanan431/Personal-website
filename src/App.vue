<template>
  <div class="min-h-screen bg-stone-100">
    <nav class="fixed top-0 w-full bg-white shadow-sm z-50">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <a href="#home" class="flex items-center" @click.prevent="scrollTo('home')">
            <div class="text-xl font-bold">
              <span class="text-blue-600">■</span> Anantha Narayanan
              <span class="text-gray-500 text-sm ml-2">/ AI ENGINEER</span>
            </div>
          </a>
          
          <div class="hidden md:flex space-x-8">
            <a
              v-for="item in navItems"
              :key="item.id"
              :href="`#${item.id}`"
              @click.prevent="scrollTo(item.id)"
              class="text-gray-700 hover:text-blue-600 transition-colors"
              :class="{ 'text-blue-600': activeSection === item.id }"
            >
              {{ item.name }}
            </a>
          </div>
        </div>
      </div>
    </nav>
    <main class="pt-16">
      <AboutMe></AboutMe>
      <Resume></Resume>
      <Projects></Projects>
      <Contact></Contact>
    </main>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'


import AboutMe from './components/AboutMe.vue';
import Resume from './components/Resume.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';

const router = useRouter()
const activeSection = ref('home')

const navItems = [
  { id: 'home', name: 'ABOUT ME' },
  { id: 'resume', name: 'RESUME' },
  { id: 'projects', name: 'PROJECTS' },
  { id: 'contact', name: 'CONTACT' }
]

const sections = {}
navItems.forEach(item => {
  sections[item.id] = ref(null)
})

const scrollTo = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    router.push(`#${sectionId}`)
  }
}

const handleScroll = () => {
  const scrollPosition = window.scrollY + window.innerHeight / 2

  for (const item of navItems) {
    const element = document.getElementById(item.id)
    if (element) {
      const { offsetTop, offsetHeight } = element
      if (
        scrollPosition >= offsetTop &&
        scrollPosition < offsetTop + offsetHeight
      ) {
        activeSection.value = item.id
        router.push(`#${item.id}`)
        break
      }
    }
  }
}

const handleSubmit = () => {
  console.log('Form submitted:', form)
  // Add your form submission logic here
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Handle initial hash in URL
  const hash = window.location.hash.slice(1)
  if (hash) {
    scrollTo(hash)
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
html {
  scroll-behavior: smooth;
}

/* Hide scrollbar for Chrome, Safari and Opera */
::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
html {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>