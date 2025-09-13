<script lang="ts" setup>
import LoginForm from '~/components/auth/LoginForm.vue';

enum AuthProvider {
  GOOGLE = 'google',
  GITHUB = 'github',
}

const authProviders = Object.values(AuthProvider)

const redirect = (provider: AuthProvider) => {
  const config = useRuntimeConfig()

  window.location.href = `${config.public.apiBaseUrl}/auth/${provider}/redirect`
}

</script>

<template>
  <div class="flex flex-wrap min-h-screen">
    <!-- Hero Section -->
    <section class="flex-col justify-center items-center text-white w-full hidden lg:w-1/3 bg-blue-400 lg:flex">
      <div class="text-center p-4 max-w-md space-y-6">
        <h1 class="text-4xl font-bold leading-tight">
          {{ $t('landing.hero.title') }}
        </h1>
        <p class="text-lg opacity-90">
          {{ $t('landing.hero.subtitle') }}
        </p>
        <div class="flex items-center justify-center space-x-8 pt-4">
          <div class="text-center">
            <Icon name="circle_check" size="32" />
            <p class="text-sm">
              {{ $t('landing.hero.features.easy') }}
            </p>
          </div>
          <div class="text-center">
            <Icon name="circle_check" size="32" />
            <p class="text-sm">
              {{ $t('landing.hero.features.sync') }}
            </p>
          </div>
          <div class="text-center">
            <Icon name="circle_check" size="32" />
            <p class="text-sm">
              {{ $t('landing.hero.features.secure') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Login Section -->
    <section class="relative flex justify-center items-center p-3 w-full lg:w-2/3">
      <div class="text-center p-5 mb-20 w-md space-y-6 shadow-xl rounded-xl">
        <h2 class="text-3xl font-bold text-foreground mb-2">
          {{ $t('login.title') }}
        </h2>
        <p class="text-gray-500">
          {{ $t('login.subtitle') }}
        </p>
        <div class="space-y-2">
          <button
            v-for="provider in authProviders"
            :key="provider"
            class="relative flex justify-center gap-2 items-center w-full h-12 cursor-pointer border border-gray-200 rounded-xl hover:bg-gray-50 hover:shadow-lg/3 dark:border-gray-800 dark:hover:bg-gray-900"
            @click="redirect(provider)"
          >
            <Icon :name="provider" size="32" class="absolute left-0 ms-3" />
            {{ $t('login.auth_providers.' + provider) }}
          </button>
        </div>

        <div class="flex items-center">
          <span class="h-px flex-1 bg-gray-300 dark:bg-gray-800"></span>
          <span class="shrink-0 px-4">{{ $t('login.divider') }}</span>
          <span class="h-px flex-1 bg-gray-300 dark:bg-gray-800"></span>
        </div>

        <LoginForm />
      </div>

      <ToggleThemeButton class="fixed right-0 bottom-0 m-5" />
    </section>
  </div>
</template>