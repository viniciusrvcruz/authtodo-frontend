<script lang="ts" setup>

const colorMode = useColorMode()

const toggleTheme = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}

</script>

<template>
  <nav class="flex justify-between items-center gap-5 px-2 py-1 border-b-1 border-gray-300 md:px-5 lg:px-10 2xl:px-20 dark:border-gray-800">
    <span class="flex justify-between items-center gap-2 font-bold">
      <img src="/logo.png" alt="Logo" width="50">
      AuthTodo
    </span>

    <div class="flex items-center gap-3">
      <button
        class="flex justify-center items-center p-2 rounded-xl cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800"
        @click="toggleTheme"
      >
        <Icon name="ic:outline-light-mode" size="25" />
      </button>
      <button class="flex justify-center items-center px-5 py-2 rounded-xl cursor-pointer bg-blue-400 hover:bg-gray-200 dark:hover:bg-gray-800">
        {{ $t('components.navbar.login') }}
      </button>
    </div>
  </nav>
</template>
