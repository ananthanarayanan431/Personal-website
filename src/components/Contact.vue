
<template>
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
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: ''
});

const handleSubmit = () => {
  // Handle form submission logic here
  console.log(form.value);
};
</script>
