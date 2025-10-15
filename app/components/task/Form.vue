<script setup lang="ts">

const onSubmit = (event: Event) => {
  const form = event.target as HTMLFormElement
  const formData = new FormData(form)

  console.log(formData.get('task'))
}
</script>

<template>
  <form class="flex space-x-2" @submit.prevent="onSubmit">
    <input
      type="text"
      class="ps-4 rounded-xl border border-gray-300 h-12 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 dark:border-gray-600"
      name="task"
      :placeholder="$t('components.home.task.form.placeholder')"
    >
    <button class="flex justify-center items-center gap-1 py-2 px-5 rounded-xl bg-blue-400 text-white cursor-pointer">
      <Icon name="plus" size="20" />
      {{ $t('components.home.task.form.add') }}
    </button>
  </form>
</template>