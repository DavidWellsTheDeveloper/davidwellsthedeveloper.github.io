<template>
  <div>
    <UCard class="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-primary-900 border-slate-200 dark:border-slate-700">
      <template #header>
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-semibold">About</h2>
        </div>
      </template>
      
      <div>
        <p class="mb-4">This is the about page of your Nuxt application.</p>
        <UButton to="/" color="primary" variant="outline">Back to Home</UButton>
      </div>
    </UCard>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script> 