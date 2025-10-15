<script setup lang="ts">

</script>

<template>
  <section class="flex justify-between gap-2 sm:gap-5">
    <div class="flex gap-4 sm:gap-5 w-full p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-blue-100 border-2 border-blue-200 dark:border-blue-400 dark:bg-blue-950">
      <div class="rounded-xl hidden justify-center items-center p-2 bg-blue-200 sm:flex sm:rounded-2xl sm:p-3 dark:bg-blue-900">
        <Icon name="list_todo" size="30" class="text-blue-500 dark:text-blue-300" />
      </div>
      <div>
        <h3 class="font-semibold sm:font-bold text-gray-400 leading-none text-sm sm:text-base">
          {{ $t('components.home.task.stats.total') }}
        </h3>
        <span class="font-bold text-2xl sm:text-3xl">3</span>
      </div>
    </div>

    <div class="flex gap-4 sm:gap-5 w-full p-4 bg-green-100 border-2 border-green-200 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl dark:bg-green-950">
      <div class="rounded-xl hidden justify-center items-center p-2 bg-green-200 sm:flex sm:rounded-2xl sm:p-3 dark:bg-green-900">
        <Icon name="check_circle" size="30" class="text-green-600 dark:text-green-300" />
      </div>
      <div>
        <h3 class="font-semibold sm:font-bold text-gray-400 leading-none text-sm sm:text-base">
          {{ $t('components.home.task.stats.completed') }}
        </h3>
        <div class="flex gap-2 items-end">
          <span class="font-bold text-2xl sm:text-3xl">1</span>
          <span class="text-gray-400 text-xs sm:text-sm">(33%)</span>
        </div>
      </div>
    </div>

    <div class="flex gap-4 sm:gap-5 w-full p-4 rounded-2xl bg-amber-100 border-2 border-amber-200 sm:p-6 md:p-8 sm:rounded-3xl dark:border-amber-400 dark:bg-amber-950">
      <div class="rounded-xl hidden justify-center items-center bg-amber-200 p-2 sm:flex sm:rounded-2xl sm:p-3 dark:bg-amber-900">
        <Icon name="circle" size="30" class="text-amber-500 dark:text-amber-300" />
      </div>
      <div>
        <h3 class="font-semibold sm:font-bold text-gray-400 leading-none text-sm sm:text-base">
          {{ $t('components.home.task.stats.active') }}
        </h3>
        <span class="font-bold text-2xl sm:text-3xl">1</span>
      </div>
    </div>
  </section>
</template>
