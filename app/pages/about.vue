<template>
  <div>
    <PageCard variant="skills" title="About Me" icon="i-lucide-user">
      <div class="space-y-6">
        <p class="text-lg leading-relaxed">Welcome to my portfolio! I'm a passionate full stack developer with a love for creating innovative web solutions.</p>
        
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-teal-700 dark:text-teal-300">My Journey</h3>
          <p class="leading-relaxed">My journey in web development started with a curiosity about how websites work. Over the years, I've developed expertise in both front-end and back-end technologies, allowing me to build complete, scalable applications.</p>
        </div>

        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-teal-700 dark:text-teal-300">What I Do</h3>
          <p class="leading-relaxed">I specialize in creating modern, responsive web applications using cutting-edge technologies. From concept to deployment, I handle every aspect of the development process to deliver exceptional user experiences.</p>
        </div>

        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-teal-700 dark:text-teal-300">My Approach</h3>
          <p class="leading-relaxed">I believe in writing clean, maintainable code and following best practices. I'm always learning new technologies and staying up-to-date with industry trends to provide the best solutions for my clients.</p>
        </div>
      </div>

      <template #footer>
        <div class="pt-4 border-t border-gray-200 dark:border-gray-700 flex gap-3">
          <UButton to="/" color="primary" variant="outline">Back to Home</UButton>
          <UButton to="/contact" color="secondary">Get In Touch</UButton>
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