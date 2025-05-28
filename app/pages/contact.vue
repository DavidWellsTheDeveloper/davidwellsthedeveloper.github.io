<template>
  <div class="py-8">
    <PageCard variant="midnight" title="Contact Me" icon="i-lucide-mail">
      <div class="space-y-8">
        <div class="space-y-4">
          <p class="text-lg leading-relaxed">I'd love to hear from you! Whether you're looking for a <strong>Scrum Master</strong>, need a <strong>fullstack developer</strong> for your team, or want to discuss data analytics solutions, feel free to reach out.</p>
          <p class="leading-relaxed">With 8+ years of experience in scalable application development and team leadership, I'm always interested in new opportunities and challenging projects.</p>
        </div>

        <!-- Contact Information Cards -->
        <div class="grid md:grid-cols-3 gap-6">
          <div class="flex items-center space-x-4 p-4 bg-neutral-50 dark:bg-neutral-950 rounded-2xl border border-teal-200 dark:border-teal-800">
            <div class="w-10 h-10 bg-secondary-600 rounded-full flex items-center justify-center">
              <UIcon name="i-lucide-mail" class="text-white" />
            </div>
            <div>
              <h3 class="font-semibold text-secondary-700 dark:text-secondary-300">Email</h3>
              <a href="mailto:dave1twells@gmail.com" class="text-sm text-secondary-600 dark:text-secondary-400 hover:underline">
                dave1twells@gmail.com
              </a>
            </div>
          </div>

          <div class="flex items-center space-x-4 p-4 bg-neutral-50 dark:bg-neutral-950 rounded-2xl border border-teal-200 dark:border-teal-800">
            <div class="w-10 h-10 bg-secondary-600 rounded-full flex items-center justify-center">
              <UIcon name="i-lucide-phone" class="text-white" />
            </div>
            <div>
              <h3 class="font-semibold text-secondary-700 dark:text-secondary-300">Phone</h3>
              <a href="tel:+19706913143" class="text-sm text-secondary-600 dark:text-secondary-400 hover:underline">
                (970) 691-3143
              </a>
            </div>
          </div>

          <div class="flex items-center space-x-4 p-4 bg-neutral-50 dark:bg-neutral-950 rounded-2xl border border-teal-200 dark:border-teal-800">
            <div class="w-10 h-10 bg-secondary-600 rounded-full flex items-center justify-center">
              <UIcon name="i-lucide-map-pin" class="text-white" />
            </div>
            <div>
              <h3 class="font-semibold text-secondary-700 dark:text-secondary-300">Location</h3>
              <p class="text-sm text-secondary-600 dark:text-secondary-400">Fort Collins, CO</p>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="space-y-6">
          <h2 class="text-xl font-semibold text-teal-700 dark:text-teal-300">Send a Message</h2>
          
          <form @submit.prevent="submitForm" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <UInput 
                  v-model="form.name" 
                  placeholder="Your name" 
                  size="lg"
                  required 
                  class="w-full"
                />
              </div>
              
              <div class="space-y-2">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <UInput 
                  v-model="form.email" 
                  type="email" 
                  placeholder="your.email@example.com" 
                  size="lg"
                  required 
                  class="w-full"
                />
              </div>
            </div>
            
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
              <UInput 
                v-model="form.subject" 
                placeholder="What's this about?" 
                size="lg"
                required 
                class="w-full"
              />
            </div>
            
            <div class="space-y-2">
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <UTextarea 
                v-model="form.message" 
                placeholder="Tell me about your project, team, or opportunity..." 
                :rows="10"
                size="lg"
                required 
                class="w-full resize-none"
              />
            </div>
            
            <div class="flex justify-start">
              <UButton 
                type="submit" 
                color="primary" 
                size="lg" 
                :loading="isSubmitting"
                class="px-8"
              >
                <UIcon name="i-lucide-send" class="mr-2" />
                Send Message
              </UButton>
            </div>
          </form>
        </div>

        <!-- Professional Links -->
        <div class="space-y-4">
          <h2 class="text-xl font-semibold text-teal-700 dark:text-teal-300">Professional Links</h2>
          <div class="flex flex-wrap gap-4">
            <UButton 
              to="https://github.com/DavidWellsTheDeveloper"
              target="_blank"
              color="gray"
              variant="outline"
              size="lg"
            >
              <UIcon name="i-simple-icons-github" class="mr-2" />
              GitHub
            </UButton>
            <UButton 
              to="https://gitlab.com/DavidWellsTheDeveloper"
              target="_blank"
              color="gray"
              variant="outline"
              size="lg"
            >
              <UIcon name="i-simple-icons-gitlab" class="mr-2" />
              GitLab
            </UButton>
            <UButton 
              to="https://www.linkedin.com/in/davidwellsdeveloper/"
              target="_blank"
              color="gray"
              variant="outline"
              size="lg"
            >
              <UIcon name="i-simple-icons-linkedin" class="mr-2" />
              LinkedIn
            </UButton>
          </div>
        </div>
      </div>
    </PageCard>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Here you would typically send the form data to your backend
  console.log('Form submitted:', form.value)
  
  // Reset form
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
  
  isSubmitting.value = false
  
  // You could add a success notification here
  alert('Message sent successfully!')
}
</script> 