<script setup>
const colorMode = useColorMode()

console.log(colorMode.preference)
</script>

<template>
  <div>
      <h1 class="text-red-500 dark:text-blue-500">Index page</h1>
      <button @click="$colorMode.preference = 'light'">light</button>
      <button @click="$colorMode.preference = 'dark'">dark</button>
  </div>
</template>