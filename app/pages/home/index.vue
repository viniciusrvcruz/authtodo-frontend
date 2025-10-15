<script setup lang="ts">
import { FilterType } from '~/types/enums/FilterType.enum';

const selectedFilter = ref(FilterType.ALL)
</script>

<template>
  <div class="h-screen">
    <HomeHeader />
    <main class="w-full px-3 py-2 space-y-5 sm:px-12 md:px-20 lg:px-32 xl:px-52 xl:py-3">
      <TaskStats />
      <TaskForm />
      <TaskFilters v-model="selectedFilter" />

      <TaskItem />
    </main>
  </div>
</template>