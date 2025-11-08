<script setup lang="ts">
import type { Task } from '~/types/Task.type';

const props = defineProps<{
  task: Task
}>()

const service = useTaskService()
const taskStore = useTaskStore()
const alert = useAlert()

const editingTask = ref<Task | null>(null)

const startEdit = () => {
  editingTask.value = {...props.task}
}

const toggleIsComplete = () => {
  const taskUpdated = {
    ...props.task,
    is_completed: !props.task.is_completed,
  }

  taskStore.update(taskUpdated)

  service.update(taskUpdated)
    .catch(() => {
      alert.error('update_task_error')

      taskStore.update({
        ...props.task,
        is_completed: !taskUpdated.is_completed,
      })
    })
}

const deleteTask = () => {
  service.destroy(props.task.id)
    .then(() => {
      taskStore.remove(props.task.id)

      alert.success('delete_task_success')
    })
    .catch(() => alert.error('delete_task_error'))
}

</script>

<template>
  <div class="flex justify-start items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-200 dark:bg-gray-900 dark:border-gray-800">
    <button
      class="flex justify-center items-center p-1 cursor-pointer rounded-xl border border-2 border-blue-300 w-8 h-8 aspect-square"
      :class="{'bg-blue-300 text-white': task.is_completed}"
      @click="toggleIsComplete"
    >
      <Icon v-if="task.is_completed" name="check" size="20" />
    </button>

    <TaskFormUpdate
      v-if="editingTask"
      v-model="editingTask"
      @close="editingTask = null"
    />

    <div v-else class="flex w-full items-center">
      <div
        class="flex flex-col flex-1"
        :class="{'line-through': task.is_completed}"
        @click="toggleIsComplete"
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
          class="flex justify-center items-center p-2 cursor-pointer rounded-xl text-gray-500 aspect-square hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
          @click="startEdit"
        >
          <Icon name="pencil" size="20" />
        </button>
        <button
          class="flex justify-center items-center p-2 cursor-pointer rounded-xl text-gray-500 aspect-square dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-red-400"
          @click="deleteTask"
        >
          <Icon name="trash" size="20" />
        </button>
      </div>
    </div>
  </div>
</template>