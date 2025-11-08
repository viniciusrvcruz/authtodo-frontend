<script setup lang="ts">
import { FilterType } from '~/types/enums/FilterType.enum'

defineProps<{
  filter: FilterType
}>()

const nameIconMapper = {
  [FilterType.ALL]: 'list_todo',
  [FilterType.ACTIVE]: 'circle',
  [FilterType.COMPLETED]: 'check_circle',
}

</script>

<template>
  <div class="flex flex-col items-center justify-center py-16 px-4 text-center">
    <Icon
      :name="nameIconMapper[filter]"
      size="50"
      class="mb-4 text-gray-400 dark:text-gray-600"
    />

    <h3 class="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
      {{ $t(`components.home.task.empty_state.${filter}.title`) }}
    </h3>
    <p class="text-sm text-gray-500 dark:text-gray-400">
      {{ $t(`components.home.task.empty_state.${filter}.subtitle`) }}
    </p>
  </div>
</template>
