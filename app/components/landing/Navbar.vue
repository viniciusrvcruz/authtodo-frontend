<script lang="ts" setup>

</script>

<template>
  <nav class="flex justify-between items-center gap-5 px-2 py-1 border-b-1 border-gray-300 md:px-5 lg:px-10 2xl:px-20 dark:border-gray-800">
    <span class="flex justify-between items-center gap-2 font-bold">
      <img src="/logo.png" alt="Logo" width="50">
      AuthTodo
    </span>

    <div class="flex items-center gap-3">
      <LanguageSwitcher />

      <ToggleThemeButton />

      <NuxtLink
        to="/login"
        class="flex justify-center items-center px-5 py-2 rounded-xl cursor-pointer bg-blue-400 hover:bg-blue-300 dark:hover:bg-gray-800"
      >
        {{ $t('components.navbar.login') }}
      </NuxtLink>
    </div>
  </nav>
</template>
