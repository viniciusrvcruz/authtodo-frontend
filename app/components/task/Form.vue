<script lang="ts" setup>

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

  service.create(task.value)
    .then(taskCreated => {
      taskStore.add(taskCreated)

      alert.success('create_task_success')

      task.value = { ...DEFAULT_TASK_FORM }
    })
    .catch(() => alert.success('create_task_error'))
}
</script>

<template>
  <form class="flex flex-col gap-2" @submit.prevent="onSubmit">
    <div class="flex gap-2 w-full">
      <FloatInput
        v-model="task.name"
        :placeholder="$t('components.home.task.form.name_placeholder')"
        input-id="name"
        type="text"
      />
      <button class="flex justify-center items-center gap-1 py-2 px-5 rounded-xl bg-blue-400 text-white cursor-pointer">
        <Icon name="plus" size="20" />
        {{ $t('components.home.task.form.add') }}
      </button>
    </div>

    <FloatInput
      v-model="task.description"
      :placeholder="$t('components.home.task.form.description_placeholder')"
      :rows="2"
      input-id="description"
      type="textarea"
    />
  </form>
</template>