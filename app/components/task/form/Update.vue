<script setup lang="ts">
import type { UpdateTask } from '~/types/Task.type'

const task = defineModel<UpdateTask>({
    required: true,
})

const emits = defineEmits(['close'])

const service = useTaskService()
const alert = useAlert()
const taskStore = useTaskStore()

onMounted(() => {
  document.getElementById(`task_${task.value.id}_update_name`)?.focus()
})

const onSubmit = () => {
  if(!task.value.name?.trim()) return

  service.update(task.value)
    .then(taskUpdated => {
      taskStore.update(taskUpdated)

      alert.success('update_task_success')

      emits('close')
    })
    .catch(() => alert.error('update_task_error'))
}

</script>

<template>
  <TaskForm
    v-model="task"
    class="w-full"
    :prefix-input-id="`task_${task.id}_update`"
    @submit="onSubmit"
  >
    <button class="flex justify-center items-center p-2.5 cursor-pointer rounded-xl shrink bg-blue-100 text-blue-500 hover:bg-blue-200 hover:text-blue-700 dark:bg-blue-300 dark:text-blue-700">
      <Icon name="check" size="20" />
    </button>
    <button
      type="button"
      class="flex justify-center items-center p-2.5 cursor-pointer rounded-xl shrink bg-gray-200 text-gray-500 hover:bg-gray-300 hover:text-gray-500 focus:border-gray-500 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
      @click="emits('close')"
    >
      <Icon name="close" size="20" />
    </button>
  </TaskForm>
</template>