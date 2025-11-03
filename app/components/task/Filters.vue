<script setup lang="ts">
import { FilterType } from '~/types/enums/FilterType.enum'

const model = defineModel<FilterType>({ default: FilterType.ALL })
const taskStore = useTaskStore()

const setFilter = (filter: FilterType) => {
  model.value = filter
}

const getButtonClass = (filter: FilterType) =>
  model.value === filter
    ? 'bg-white rounded-lg flex-1 p-1 shadow cursor-pointer dark:bg-gray-800'
    : 'rounded-lg flex-1 p-1 cursor-pointer'

</script>

<template>
  <div class="flex gap-2 bg-gray-100 p-1 rounded-xl dark:bg-gray-900">
    <button
      v-for="filter in Object.values(FilterType)"
      :key="filter"
      :class="getButtonClass(filter)"
      @click="setFilter(filter)"
    >
      {{ $t(`components.home.task.filters.${filter}`, { count: taskStore.counts[filter] }) }}
    </button>
  </div>
</template>
