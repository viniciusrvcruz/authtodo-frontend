<script setup lang="ts">
import type { UpdateTask } from '~/types/Task.type';

const task = defineModel<Omit<UpdateTask, 'id'>>({
  required: true
})

defineProps<{
  prefixInputId: string
}>()

defineEmits(['submit'])

</script>

<template>
  <form class="flex flex-col gap-2" @submit.prevent="$emit('submit')">
    <div class="flex items-center gap-2 w-full">
      <FloatInput
        v-model="task.name"
        :placeholder="$t('components.home.task.form.name_placeholder')"
        :input-id="`${prefixInputId}_name`"
        type="text"
      />

      <slot />
    </div>

    <FloatInput
      v-model="task.description"
      :placeholder="$t('components.home.task.form.description_placeholder')"
      :rows="2"
      :input-id="`${prefixInputId}_description`"
      type="textarea"
    />
  </form>
</template>