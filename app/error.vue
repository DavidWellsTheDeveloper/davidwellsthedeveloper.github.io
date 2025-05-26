<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
    <div class="max-w-md w-full space-y-8">
      <div class="text-center">
        <h1 class="text-6xl font-bold text-teal-600">{{ error.statusCode }}</h1>
        <h2 class="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
          {{ error.statusMessage }}
        </h2>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {{ error.message }}
        </p>
        <div class="mt-6">
          <UButton @click="handleError" color="primary">
            Go Home
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['error'])

const handleError = async () => {
  await navigateTo('/')
}
</script> 