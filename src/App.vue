<template>
  <div class="min-h-screen bg-stone-100">
    <nav class="fixed top-0 w-full bg-white shadow-sm z-50">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <a href="#home" class="flex items-center" @click.prevent="scrollTo('home')">
            <div class="text-xl font-bold">
              <span class="text-blue-600">■</span> Maya Nelson
              <span class="text-gray-500 text-sm ml-2">/ PROJECT MANAGER</span>
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
      

      <section id="resume" ref="resume" class="min-h-screen bg-stone-100 py-20">
  <div class="container mx-auto px-4">
    <div class="bg-white rounded-lg shadow-lg p-8 max-w-6xl mx-auto">
      <div class="flex justify-between items-center mb-12">
        <h2 class="text-4xl font-bold">
          <span class="text-blue-600">■</span> Resume
        </h2>
        <button class="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
          DOWNLOAD CV
        </button>
      </div>

      <div class="grid md:grid-cols-2 gap-16">
        <!-- Experience Column -->
        <div>
          <h3 class="text-2xl font-bold mb-8">Experience</h3>
          <div class="space-y-12">
            <div class="border-l-4 border-blue-600 pl-6">
              <div class="text-blue-600 font-bold mb-2">2035 - Present</div>
              <h4 class="text-xl font-bold mb-2">SENIOR PROJECT MANAGER</h4>
              <p class="text-gray-600 mb-1">Tech Solutions Inc.</p>
              <p class="text-gray-600 mb-4">San Francisco, CA</p>
              <p class="text-gray-600">Led cross-functional teams in delivering enterprise software solutions. Managed $5M+ project budgets and improved delivery efficiency by 35%.</p>
            </div>

            <div class="border-l-4 border-blue-600 pl-6">
              <div class="text-blue-600 font-bold mb-2">2032 - 2035</div>
              <h4 class="text-xl font-bold mb-2">PROJECT MANAGER</h4>
              <p class="text-gray-600 mb-1">Digital Innovations Co.</p>
              <p class="text-gray-600 mb-4">Boston, MA</p>
              <p class="text-gray-600">Managed multiple concurrent projects for Fortune 500 clients. Successfully delivered 15+ major projects ahead of schedule.</p>
            </div>

            <div class="border-l-4 border-blue-600 pl-6">
              <div class="text-blue-600 font-bold mb-2">2030 - 2032</div>
              <h4 class="text-xl font-bold mb-2">ASSOCIATE PROJECT MANAGER</h4>
              <p class="text-gray-600 mb-1">InnovateTech Solutions</p>
              <p class="text-gray-600 mb-4">New York, NY</p>
              <p class="text-gray-600">Coordinated project deliverables and stakeholder communications. Achieved 98% client satisfaction rate.</p>
            </div>
          </div>
        </div>

        <!-- Education Column -->
        <div>
          <h3 class="text-2xl font-bold mb-8">Education</h3>
          <div class="space-y-12">
            <div class="border-l-4 border-blue-600 pl-6">
              <div class="text-blue-600 font-bold mb-2">2026 - 2030</div>
              <h4 class="text-xl font-bold mb-2">MASTER OF BUSINESS ADMINISTRATION</h4>
              <p class="text-gray-600 mb-1">Harvard Business School</p>
              <p class="text-gray-600 mb-4">Cambridge, MA</p>
              <p class="text-gray-600">Concentration in Project Management and Digital Transformation. GPA: 3.9</p>
            </div>

            <div class="border-l-4 border-blue-600 pl-6">
              <div class="text-blue-600 font-bold mb-2">2022 - 2026</div>
              <h4 class="text-xl font-bold mb-2">BACHELOR OF SCIENCE IN COMPUTER SCIENCE</h4>
              <p class="text-gray-600 mb-1">Massachusetts Institute of Technology</p>
              <p class="text-gray-600 mb-4">Cambridge, MA</p>
              <p class="text-gray-600">Minor in Business Administration. Dean's List all semesters.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="projects" ref="projects" class="min-h-screen bg-stone-100 py-20">
  <div class="container mx-auto px-4">
    <div class="flex justify-center items-center">
  <h2 class="text-4xl font-bold mb-6 flex items-center text-center">
    <span class="text-blue-600 mr-2">■</span>Projects
  </h2>
</div>
    
    <p class="text-gray-600 max-w-3xl mb-12 text-center mx-auto">
      I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Project 1 -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="flex flex-col md:flex-row">
          <div class="md:w-1/2 p-8">
            <div class="border-l-4 border-blue-600 pl-4 mb-6">
              <h3 class="text-2xl font-bold mb-2">Project name 01</h3>
              <p class="text-gray-600">Role Title</p>
            </div>
            <p class="text-gray-600">
              I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.
            </p>
          </div>
          <div class="md:w-1/2">
            <img 
              src="C:\Users\anant\OneDrive\Desktop\Anantha\anantha-website\src\assets\image.png" 
              alt="Project 1" 
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <!-- Project 2 -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="flex flex-col md:flex-row">
          <div class="md:w-1/2 p-8">
            <div class="border-l-4 border-blue-600 pl-4 mb-6">
              <h3 class="text-2xl font-bold mb-2">Project name 02</h3>
              <p class="text-gray-600">Role Title</p>
            </div>
            <p class="text-gray-600">
              I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.
            </p>
          </div>
          <div class="md:w-1/2">
            <img 
              src="C:\Users\anant\OneDrive\Desktop\Anantha\anantha-website\src\assets\image.png" 
              alt="Project 2" 
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <!-- Project 3 -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="flex flex-col md:flex-row">
          <div class="md:w-1/2 p-8">
            <div class="border-l-4 border-blue-600 pl-4 mb-6">
              <h3 class="text-2xl font-bold mb-2">Project name 03</h3>
              <p class="text-gray-600">Role Title</p>
            </div>
            <p class="text-gray-600">
              I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.
            </p>
          </div>
          <div class="md:w-1/2">
            <img 
              src="C:\Users\anant\OneDrive\Desktop\Anantha\anantha-website\src\assets\image.png" 
              alt="Project 3" 
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <!-- Project 4 -->
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="flex flex-col md:flex-row">
          <div class="md:w-1/2 p-8">
            <div class="border-l-4 border-blue-600 pl-4 mb-6">
              <h3 class="text-2xl font-bold mb-2">Project name 04</h3>
              <p class="text-gray-600">Role Title</p>
            </div>
            <p class="text-gray-600">
              I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font. I'm a great place for you to tell a story and let your users know a little more about you.
            </p>
          </div>
          <div class="md:w-1/2">
            <img 
              src="C:\Users\anant\OneDrive\Desktop\Anantha\anantha-website\src\assets\image.png" 
              alt="Project 4" 
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="contact" ref="contact" class="min-h-screen bg-stone-100 py-20">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold mb-12 text-center">
      <span class="text-blue-600 mr-2">■</span>Let's talk
    </h2>

    <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <form @submit.prevent="handleSubmit" class="space-y-8">
        <!-- Name Fields Row -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="flex flex-col">
            <label class="mb-2 text-sm">First Name *</label>
            <input 
              v-model="form.firstName"
              type="text" 
              required
              class="border-b border-gray-300 focus:border-blue-600 outline-none py-2 bg-transparent"
            />
          </div>

          <div class="flex flex-col">
            <label class="mb-2 text-sm">Last Name *</label>
            <input 
              v-model="form.lastName"
              type="text" 
              required
              class="border-b border-gray-300 focus:border-blue-600 outline-none py-2 bg-transparent"
            />
          </div>
        </div>

        <!-- Email Field -->
        <div class="flex flex-col">
          <label class="mb-2 text-sm">Email *</label>
          <input 
            v-model="form.email"
            type="email" 
            required
            class="border-b border-gray-300 focus:border-blue-600 outline-none py-2 bg-transparent"
          />
        </div>

        <!-- Subject Field -->
        <div class="flex flex-col">
          <label class="mb-2 text-sm">Subject</label>
          <input 
            v-model="form.subject"
            type="text" 
            class="border-b border-gray-300 focus:border-blue-600 outline-none py-2 bg-transparent"
          />
        </div>

        <!-- Message Field -->
        <div class="flex flex-col">
          <label class="mb-2 text-sm">Message</label>
          <textarea 
            v-model="form.message"
            rows="4"
            class="border-b border-gray-300 focus:border-blue-600 outline-none py-2 bg-transparent resize-none"
          ></textarea>
        </div>

        <!-- Submit Button -->
        <div>
          <button 
            type="submit" 
            class="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  </div>
</section>
    </main>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { 
  Facebook,
  Twitter, 
  Linkedin,
  Instagram
} from 'lucide-vue-next'

import AboutMe from './components/AboutMe.vue';

const router = useRouter()
const activeSection = ref('home')

const navItems = [
  { id: 'home', name: 'ABOUT ME' },
  { id: 'resume', name: 'RESUME' },
  { id: 'projects', name: 'PROJECTS' },
  { id: 'contact', name: 'CONTACT' }
]

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: ''
})

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