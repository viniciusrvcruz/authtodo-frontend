<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  size: {
    type: [String, Number],
    required: false,
  }
})

const ICON_MAP = {
  google: 'logos:google-icon',
  github: 'carbon:logo-github',
  question: 'ic:baseline-question-mark',
  circle_check: 'lucide:circle-check-big',
  light_mode: 'ic:outline-light-mode',
  dark_mode: 'ic:outline-dark-mode',
  check_circle: 'lucide:check-circle-2',
  user: 'mdi:user',
}

</script>

<template>
  <NuxtIcon :name="ICON_MAP[name] ?? ICON_MAP['question']" :size="size" />
</template>
