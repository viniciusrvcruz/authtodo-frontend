<script setup lang="ts">
import type { Task } from '~/types/Task.type';

const props = defineProps<{
  task: Task
}>()

const editingTask = ref<Task | null>(null)

const startEdit = () => {
  editingTask.value = {...props.task}
}

</script>

<template>
  <div class="flex justify-start items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-200 dark:border-gray-400">
    <button class="flex justify-center items-center p-1 cursor-pointer rounded-xl border border-2 border-blue-300 w-8 h-8 aspect-square">
      <Icon name="check" size="20" />
    </button>

    <TaskFormUpdate
      v-if="editingTask"
      v-model="editingTask"
      @close="editingTask = null"
    />

    <div v-else class="flex w-full items-center">
      <div
        class="flex flex-col line-through flex-1"
        :class="{'line-through': task.is_completed}"
      >
        <span class="cursor-pointer break-all">
          {{ task.name }}
        </span>
        <span class="text-sm text-gray-400 cursor-pointer break-all">
          {{ task.description }}
        </span>
      </div>

      <div class="flex gap-1">
        <button
          class="flex justify-center items-center p-2 cursor-pointer rounded-xl text-gray-500 aspect-square hover:bg-gray-200"
          @click="startEdit"
        >
          <Icon name="pencil" size="20" />
        </button>
        <button class="flex justify-center items-center p-2 cursor-pointer rounded-xl text-gray-500 aspect-square hover:bg-gray-200 hover:text-red-400">
          <Icon name="trash" size="20" />
        </button>
      </div>
    </div>
  </div>
</template>