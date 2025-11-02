<script setup lang="ts">
import { FilterType } from '~/types/enums/FilterType.enum';
import type { Task } from '~/types/Task.type';

const service = useTaskService()
const taskStore = useTaskStore()
const alert = useAlert()

const selectedFilter = ref<FilterType>(FilterType.ALL)

onBeforeMount(() => {
  service.index()
    .then(taskStore.setTasks)
    .catch(() => alert.success('get_tasks_error'))
})

const filteredTasks = computed<Task[]>(() => {
  const filters = {
    [FilterType.ALL]: taskStore.tasks,
    [FilterType.ACTIVE]: taskStore.tasks.filter(task => !task.is_completed),
    [FilterType.COMPLETED]: taskStore.tasks.filter(task => task.is_completed),
  }

  return filters[selectedFilter.value]
})

</script>

<template>
  <div class="h-screen">
    <HomeHeader />
    <main class="w-full px-3 py-2 space-y-5 sm:px-12 md:px-20 lg:px-32 xl:px-52 2xl:px-96 xl:py-3">
      <TaskStats />
      <TaskFormCreate />
      <TaskFilters v-model="selectedFilter" />

      <TaskItem
        v-for="task in filteredTasks"
        :key="task.id"
        :task="task"
      />
    </main>
  </div>
</template>