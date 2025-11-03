<script setup lang="ts">

const service = useTaskService()
const alert = useAlert()
const taskStore = useTaskStore()

const DEFAULT_TASK_FORM = {
  name: '',
  description: '',
}

const task = ref({ ...DEFAULT_TASK_FORM })

const onSubmit = () => {
  if(!task.value.name.trim()) return

  service.store(task.value)
    .then(taskCreated => {
      taskStore.add(taskCreated)

      alert.success('create_task_success')

      task.value = { ...DEFAULT_TASK_FORM }
    })
    .catch(() => alert.error('create_task_error'))
}

</script>

<template>
  <TaskForm
    v-model="task"
    prefix-input-id="create"
    @submit="onSubmit"
  >
    <button class="flex justify-center items-center gap-1 py-2 px-5 rounded-xl bg-blue-400 text-white cursor-pointer">
      <Icon name="plus" size="20" />
      {{ $t('components.home.task.form.add') }}
    </button>
  </TaskForm>
</template>