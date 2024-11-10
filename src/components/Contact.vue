<template>
    <div class="min-h-screen bg-white py-20">
      <div class="container mx-auto px-4 max-w-2xl">
        <h2 class="text-4xl font-bold mb-12">
          <span class="text-blue-600">■</span> Let's talk
        </h2>
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block mb-2">First Name *</label>
              <input 
                v-model="form.firstName"
                type="text" 
                class="w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2" 
                required
              />
            </div>
            <div>
              <label class="block mb-2">Last Name *</label>
              <input 
                v-model="form.lastName"
                type="text" 
                class="w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2" 
                required
              />
            </div>
          </div>
          <div>
            <label class="block mb-2">Email *</label>
            <input 
              v-model="form.email"
              type="email" 
              class="w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2" 
              required
            />
          </div>
          <div>
            <label class="block mb-2">Subject</label>
            <input 
              v-model="form.subject"
              type="text" 
              class="w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2" 
            />
          </div>
          <div>
            <label class="block mb-2">Message</label>
            <textarea 
              v-model="form.message"
              class="w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2" 
              rows="4"
            ></textarea>
          </div>
          <button type="submit" class="bg-blue-600 text-white px-8 py-3 rounded-full">
            Send
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  
  const form = reactive({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const handleSubmit = () => {
    console.log('Form submitted:', form)
    // Add your form submission logic here
  }
  </script>

<!-- <template>
    <div class="container mx-auto px-4 max-w-2xl">
          <h2 class="text-4xl font-bold mb-12">
            <span class="text-blue-600">■</span> Let's talk
          </h2>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block mb-2">First Name *</label>
                <input 
                  v-model="form.firstName"
                  type="text" 
                  class="w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2" 
                  required
                />
              </div>
              <div>
                <label class="block mb-2">Last Name *</label>
                <input 
                  v-model="form.lastName"
                  type="text" 
                  class="w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2" 
                  required
                />
              </div>
            </div>
            <div>
              <label class="block mb-2">Email *</label>
              <input 
                v-model="form.email"
                type="email" 
                class="w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2" 
                required
              />
            </div>
            <div>
              <label class="block mb-2">Subject</label>
              <input 
                v-model="form.subject"
                type="text" 
                class="w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2" 
              />
            </div>
            <div>
              <label class="block mb-2">Message</label>
              <textarea 
                v-model="form.message"
                class="w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-2" 
                rows="4"
              ></textarea>
            </div>
            <button type="submit" class="bg-blue-600 text-white px-8 py-3 rounded-full">
              Send
            </button>
          </form>
        </div>
</template> -->