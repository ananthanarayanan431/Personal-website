<template>
    <div class="min-h-screen bg-stone-100 py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold mb-12">
          <span class="text-blue-600">■</span> Projects
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="i in 3" :key="i" class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-48 bg-gray-200"></div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Project Title</h3>
              <p class="text-gray-600">Project description goes here...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>