<template>
  <UApp>
    <NuxtLayout>
    <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<style>
/* Hide default cursor when using custom cursor animations */
.custom-cursor * {
  /* cursor: none !important; */
}

/* Optional: Add smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>