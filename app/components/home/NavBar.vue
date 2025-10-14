<script setup lang="ts">

</script>

<template>
  <nav class="w-full flex justify-between px-3 py-2 sm:px-12 md:px-20 lg:px-32 xl:px-52 xl:py-3">
    <div class="flex items-center space-x-3">
      <div class="flex p-2 rounded-2xl bg-blue-500">
        <Icon name="check_circle" :size="25" class="text-white" />
      </div>
      <div class="hidden sm:block">
        <h2 class="text-lg font-bold leading-none mb-1">
          {{ $t('components.home.navbar.my_tasks') }}
        </h2>
        <p class="text-sm text-gray-400">
          {{ $t('components.home.navbar.description') }}
        </p>
      </div>
    </div>

    <div class="flex gap-2 items-center">
      <ToggleThemeButton />

      <HomeUserMenu />
    </div>
  </nav>
</template>