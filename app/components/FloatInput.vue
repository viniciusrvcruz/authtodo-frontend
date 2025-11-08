<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'

const model = defineModel<string | null>()

defineProps<{
  type?: 'text' | 'textarea'
  inputId: string
  name?: string
  placeholder: string
  rows?: number
}>()
</script>

<template>
  <FloatLabel variant="on" class="w-full">
    <component
      :is="type === 'textarea' ? Textarea : InputText"
      v-model="model"
      class="w-full !rounded-xl"
      :id="inputId"
      :name="name"
      :rows="rows"
    />
    <label :for="inputId" class="text-sm">
      {{ placeholder }}
    </label>
  </FloatLabel>
</template>
