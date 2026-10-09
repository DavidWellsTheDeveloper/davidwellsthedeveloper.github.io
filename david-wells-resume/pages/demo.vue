<template>
  <div class="min-h-screen bg-slate-900">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-center text-white mb-8">
        Hero Background Options
      </h1>

      <div class="grid gap-8 mb-8">
        <!-- Option 1: Geometric -->
        <div class="bg-slate-800 rounded-lg overflow-hidden shadow-xl">
          <div class="bg-gradient-to-r from-blue-600 to-purple-600 p-4">
            <h2 class="text-2xl font-semibold text-white">
              Option 1: Geometric Layers
            </h2>
            <p class="text-blue-100">
              Clean geometric shapes with multiple parallax layers
            </p>
          </div>
          <div class="relative h-96">
            <HeroSectionParallax background-type="geometric" />
          </div>
          <div class="p-6 bg-slate-700">
            <div class="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h3 class="text-blue-400 font-semibold mb-2">Visual Style</h3>
                <p class="text-slate-300">
                  Modern geometric shapes with subtle grid overlay for tech
                  aesthetic
                </p>
              </div>
              <div>
                <h3 class="text-blue-400 font-semibold mb-2">Color Palette</h3>
                <p class="text-slate-300">
                  Blues, teals, and purples with dark slate base
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Option 2: Waves -->
        <div class="bg-slate-800 rounded-lg overflow-hidden shadow-xl">
          <div class="bg-gradient-to-r from-cyan-600 to-blue-600 p-4">
            <h2 class="text-2xl font-semibold text-white">
              Option 2: Flowing Waves
            </h2>
            <p class="text-cyan-100">
              Organic wave patterns with floating particles
            </p>
          </div>
          <div class="relative h-96">
            <HeroSectionParallax background-type="waves" />
          </div>
          <div class="p-6 bg-slate-700">
            <div class="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h3 class="text-cyan-400 font-semibold mb-2">Visual Style</h3>
                <p class="text-slate-300">
                  Flowing wave layers with animated floating particles
                </p>
              </div>
              <div>
                <h3 class="text-cyan-400 font-semibold mb-2">Animation</h3>
                <p class="text-slate-300">
                  Subtle particle movements and wave flow effects
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Option 3: Neural -->
        <div class="bg-slate-800 rounded-lg overflow-hidden shadow-xl">
          <div class="bg-gradient-to-r from-purple-600 to-indigo-600 p-4">
            <h2 class="text-2xl font-semibold text-white">
              Option 3: Neural Network
            </h2>
            <p class="text-purple-100">
              Tech-inspired neural connections with data visualization
            </p>
          </div>
          <div class="relative h-96">
            <HeroSectionParallax background-type="neural" />
          </div>
          <div class="p-6 bg-slate-700">
            <div class="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h3 class="text-purple-400 font-semibold mb-2">Tech Theme</h3>
                <p class="text-slate-300">
                  Neural network nodes with connecting lines and data particles
                </p>
              </div>
              <div>
                <h3 class="text-purple-400 font-semibold mb-2">Symbolism</h3>
                <p class="text-slate-300">
                  Represents AI, data science, and modern development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Implementation Instructions -->
      <div class="bg-slate-800 rounded-lg p-6 text-slate-300">
        <h3 class="text-xl font-semibold text-white mb-4">Implementation</h3>
        <p class="mb-4">
          To use any of these backgrounds, simply replace the current
          HeroSection component with HeroSectionParallax and specify the
          background type:
        </p>
        <div class="bg-slate-900 rounded p-4 font-mono text-sm">
          <code class="text-green-400">
            &lt;HeroSectionParallax background-type="geometric" /&gt;<br />
            &lt;HeroSectionParallax background-type="waves" /&gt;<br />
            &lt;HeroSectionParallax background-type="neural" /&gt;
          </code>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Page configuration
definePageMeta({
  title: 'Hero Background Demo - Dave Wells',
  description: 'Preview of parallax background options for the hero section',
})

// Internal preview page — keep it out of search results
useSeoMeta({
  robots: 'noindex, nofollow',
})
</script>
