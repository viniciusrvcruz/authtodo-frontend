<script setup>
const { t } = useI18n()

definePageMeta({
  sanctum: {
    excluded: true,
  }
})

useHead({
  title: t('seo.landing.title'),
  meta: [
    { name: 'description', content: t('seo.landing.description') },
    { name: 'keywords', content: t('seo.landing.keywords') },
    { property: 'og:title', content: t('seo.landing.og_title') },
    { property: 'og:description', content: t('seo.landing.og_description') },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: '/logo.png' },
  ]
})
</script>

<template>
  <div class="min-h-screen dark:bg-gray-950 dark:text-gray-200">
    <LandingNavbar />

    <!-- Hero Section -->
    <section class="px-3 py-20 sm:px-12 md:px-20 lg:px-32 xl:px-52 2xl:px-96 sm:py-32">
      <div class="flex flex-col items-center text-center space-y-8">
        <div class="flex items-center gap-3 p-3 rounded-2xl bg-blue-100 dark:bg-blue-950">
          <Icon name="check_circle" :size="40" class="text-blue-500 dark:text-blue-400" />
        </div>
        
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-4xl">
          {{ $t('landing.hero.title') }}
        </h1>
        
        <p class="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl">
          {{ $t('landing.hero.subtitle') }}
        </p>
        
        <NuxtLink
          to="/login"
          class="flex items-center gap-2 px-8 py-4 bg-blue-400 hover:bg-blue-300 dark:hover:bg-blue-500 rounded-xl text-white font-semibold text-lg cursor-pointer transition-colors"
        >
          {{ $t('landing.hero.cta') }}
        </NuxtLink>
      </div>
    </section>

    <!-- Features Section -->
    <section class="px-3 py-16 sm:py-20 bg-gray-50 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl sm:text-4xl font-bold text-center mb-12">
          {{ $t('landing.features.title') }}
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-950 rounded-2xl border border-gray-200 dark:border-gray-800">
            <div class="p-3 rounded-xl bg-blue-100 dark:bg-blue-950 mb-4">
              <Icon name="circle_check" :size="32" class="text-blue-500 dark:text-blue-400" />
            </div>
            <h3 class="text-xl font-bold mb-2">
              {{ $t('landing.features.easy.title') }}
            </h3>
            <p class="text-gray-500 dark:text-gray-400">
              {{ $t('landing.features.easy.description') }}
            </p>
          </div>

          <div class="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-950 rounded-2xl border border-gray-200 dark:border-gray-800">
            <div class="p-3 rounded-xl bg-green-100 dark:bg-green-950 mb-4">
              <Icon name="check_circle" :size="32" class="text-green-600 dark:text-green-400" />
            </div>
            <h3 class="text-xl font-bold mb-2">
              {{ $t('landing.features.sync.title') }}
            </h3>
            <p class="text-gray-500 dark:text-gray-400">
              {{ $t('landing.features.sync.description') }}
            </p>
          </div>

          <div class="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-950 rounded-2xl border border-gray-200 dark:border-gray-800">
            <div class="p-3 rounded-xl bg-amber-100 dark:bg-amber-950 mb-4">
              <Icon name="check_circle" :size="32" class="text-amber-500 dark:text-amber-400" />
            </div>
            <h3 class="text-xl font-bold mb-2">
              {{ $t('landing.features.secure.title') }}
            </h3>
            <p class="text-gray-500 dark:text-gray-400">
              {{ $t('landing.features.secure.description') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="px-3 py-20 sm:px-12 md:px-20 lg:px-32 xl:px-52 2xl:px-96 sm:py-32">
      <div class="flex flex-col items-center text-center space-y-6 p-8 sm:p-12 bg-blue-400 rounded-2xl sm:rounded-3xl">
        <h2 class="text-3xl sm:text-4xl font-bold text-white">
          {{ $t('landing.cta.title') }}
        </h2>
        <p class="text-lg text-white/90 max-w-2xl">
          {{ $t('landing.cta.subtitle') }}
        </p>
        <NuxtLink
          to="/login"
          class="px-8 py-4 bg-white hover:bg-gray-100 rounded-xl text-blue-500 font-semibold text-lg cursor-pointer transition-colors"
        >
          {{ $t('landing.cta.button') }}
        </NuxtLink>
      </div>
    </section>

    <!-- Footer -->
    <footer class="px-3 py-8 border-t border-gray-200 dark:border-gray-800">
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
        <div class="flex items-center gap-2 font-bold">
          <img src="/logo.png" alt="Logo" width="40">
          AuthTodo
        </div>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ $t('landing.footer.rights', {year: new Date().getFullYear()}) }}
        </p>
      </div>
    </footer>
  </div>
</template>