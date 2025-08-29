<script lang="ts" setup>

defineProps({
  email: {
    type: String,
    required: true,
  }
})

const code = ref([])

const emits = defineEmits(['submit'])

watch(code, (val) => {
  if(val.length < 6) return

  verifyCode()
})

const verifyCode = async () => {

  const data = await useSanctumFetch('/api/users');

  console.log(data)
  emits('submit')
}

const sendCode = () => {

}

</script>

<template>
  <form class="flex flex-col items-center gap-5">
    <h5>
      {{ $t('login.otp.instruction') }} <span class="font-bold">{{ email }}</span>.
    </h5>

    <UPinInput
      v-model="code"
      :length="6"
      color="secondary"
      size="xl"
      otp
    />

    <button
      class="px-4 py-1 border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-900"
      @click="sendCode"
    >
      {{ $t('login.otp.resend_button') }}
    </button>
  </form>
</template>