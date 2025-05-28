<template>
  <div>
    <PageCard variant="midnight" title="Contact Me" icon="i-lucide-mail">
      <div class="space-y-8">
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">I'd love to hear from you! Whether you have a project in mind, want to collaborate, or just want to say hello, feel free to reach out.</p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <UIcon name="i-lucide-mail" class="text-2xl text-teal-600 mx-auto mb-2" />
              <h3 class="font-semibold mb-1">Email</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">hello@davidwells.dev</p>
            </div>
            
            <div class="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <UIcon name="i-simple-icons-github" class="text-2xl text-teal-600 mx-auto mb-2" />
              <h3 class="font-semibold mb-1">GitHub</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">@DavidWellsTheDeveloper</p>
            </div>
            
            <div class="text-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <UIcon name="i-lucide-map-pin" class="text-2xl text-teal-600 mx-auto mb-2" />
              <h3 class="font-semibold mb-1">Location</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">Available Remotely</p>
            </div>
          </div>
        </div>

        <UDivider />
        
        <div class="space-y-6">
          <h3 class="text-lg font-semibold text-teal-700 dark:text-teal-300">Send me a message</h3>
          
          <UForm class="space-y-6">
            <div class="flex flex-col lg:flex-row gap-6">
              <div class="flex-1">
                <UFormField label="Name" name="name">
                  <UInput placeholder="Your name" size="lg" class="w-full" />
                </UFormField>
              </div>
              <div class="flex-1">
                <UFormField label="Email" name="email">
                  <UInput placeholder="Your email" type="email" size="lg" class="w-full" />
                </UFormField>
              </div>
            </div>
            
            <div class="flex">
              <div class="w-full">
                <UFormField label="Subject" name="subject">
                  <UInput placeholder="What's this about?" size="lg" class="w-full" />
                </UFormField>
              </div>
            </div>
            
            <div class="flex">
              <div class="w-full">
                <UFormField label="Message" name="message">
                  <UTextarea placeholder="Your message" rows="10" size="lg" class="w-full resize-none" />
                </UFormField>
              </div>
            </div>
          </UForm>
        </div>
      </div>

      <template #footer>
        <div class="pt-4 border-t border-gray-200 dark:border-gray-700 flex gap-3">
          <UButton type="submit" color="primary" size="lg">Send Message</UButton>
          <UButton to="/" variant="outline" color="secondary">Back to Home</UButton>
        </div>
      </template>
    </PageCard>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script> 