<script setup>
import { 
  Facebook,
  Twitter, 
  Linkedin,
  Instagram
} from 'lucide-vue-next'
</script>

<template>
    <section id="home" ref="home" class="min-h-screen flex items-center bg-stone-100 py-20">
        <div class="container mx-auto px-4 flex items-center justify-center">
          <div class="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full relative">
            <div class="flex flex-col md:flex-row gap-8">
              <div class="flex-1 bg-stone-50 p-6 rounded-lg">
                <div class="flex flex-col items-center">
                  <div class="w-32 h-32 rounded-full overflow-hidden bg-gray-200 mb-4">
                    <img 
                      src="C:\Users\anant\OneDrive\Desktop\Anantha\anantha-website\src\assets\image.png" 
                      alt="Profile" 
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <h2 class="text-2xl font-bold mb-1">Anantha Narayanan</h2>
                  <div class="text-blue-700 tracking-wider text-sm mb-6">AI ENGINEER</div>
                </div>
              </div>
              
              <div class="flex-1">
                <h1 class="text-6xl font-bold mb-4">Hello</h1>
                <h2 class="text-2xl mb-8">Here's who I am & what I do</h2>
                
                <div class="flex space-x-4 mb-8">
                  <a href="#resume"
                  @click.prevent="scrollTo('resume')"
                  class="inline-block bg-blue-600 text-white px-6 py-2 rounded-full"
                  >
                  RESUME
                  </a>
                  
                  <a href="#projects"
                  @click.prevent="scrollTo('projects')"
                  class="inline-block border-2 border-gray-800 px-6 py-2 rounded-full"
                  >
                  PROJECTS
                  </a>
                </div>
                
                <p class="text-gray-600 mb-4">
                  I'm a paragraph. Click here to add your own text and edit me. 
                  It's easy. Just click "Edit Text" or double click me to add 
                  your own content and make changes to the font.
                </p>
                
                <p class="text-gray-600">
                  I'm a great place for you to tell a story and let your users 
                  know a little more about you.
                </p>
              </div>
            </div>
            
            <div class="absolute bottom-0 left-0 w-full bg-white p-4 border-t flex justify-center space-x-6">
              <a href="https://facebook.com/mayanelson" target="_blank" class="text-gray-600 hover:text-blue-700 transition-colors">
                <Facebook class="w-5 h-5" />
              </a>
              <a href="https://twitter.com/mayanelson" target="_blank" class="text-gray-600 hover:text-blue-700 transition-colors">
                <Twitter class="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/mayanelson" target="_blank" class="text-gray-600 hover:text-blue-700 transition-colors">
                <Linkedin class="w-5 h-5" />
              </a>
              <a href="https://instagram.com/mayanelson" target="_blank" class="text-gray-600 hover:text-blue-700 transition-colors">
                <Instagram class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
</template>