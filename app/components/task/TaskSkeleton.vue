<template>
  <div class="space-y-3">
    <div v-for="i in 3" :key="i" class="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm animate-pulse">
      <div class="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-xl"></div>
      <div class="flex-1 space-y-2">
        <div class="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
        <div class="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
      </div>
    </div>
  </div>
</template>
