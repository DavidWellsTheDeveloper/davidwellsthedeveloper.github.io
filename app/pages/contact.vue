<template>
  <div>
    <UCard class="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-primary-900 border-slate-200 dark:border-slate-700">
      <template #header>
        <div class="flex items-center justify-between">
          <h2 class="text-xl font-semibold">Contact Me</h2>
        </div>
      </template>
      
      <div>
        <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus enim quaerat dolorum expedita distinctio inventore esse nostrum quos minus officiis. Doloribus, assumenda dolores. Quisquam nisi repellendus dolorem quas voluptatum explicabo.</p>
        <p class="mb-8">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <UForm>
          <UFormGroup label="Name" name="name">
            <UInput placeholder="Your name" />
          </UFormGroup>
          <UFormGroup label="Email" name="email">
            <UInput placeholder="Your email" type="email" />
          </UFormGroup>
          <UFormGroup label="Message" name="message" class="mt-6 w-full">
            <UTextarea placeholder="Your message" rows="6" class="w-full" />
          </UFormGroup>
          <UButton type="submit" color="primary" class="mt-4">Send Message</UButton>
        </UForm>
      </div>
    </UCard>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script> 