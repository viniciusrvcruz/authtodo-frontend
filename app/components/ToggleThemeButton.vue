<script lang="ts" setup>
enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

const colorMode = useColorMode()

const isDarkMode = computed(() => colorMode.value === Theme.DARK)

const toggleTheme = () => {
  colorMode.preference = isDarkMode.value ? Theme.LIGHT : Theme.DARK
}
</script>

<template>
  <button
    class="flex justify-center items-center p-2 rounded-xl cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800"
    @click="toggleTheme"
  >
    <ClientOnly>
      <Icon :name="`${isDarkMode ? Theme.DARK : Theme.LIGHT}_mode`" size="25" />
    </ClientOnly>
  </button>
</template>
