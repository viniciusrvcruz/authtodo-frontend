<script lang="ts" setup>

const props = defineProps({
  email: {
    type: String,
    required: true,
  }
})

const service = useAuthService()
const message = useMessage()

const code = ref('')

const emits = defineEmits(['submit', 'resend'])

watch(() => code.value, (val) => {
  if(val.length < 6) return

  verifyCode()
})

const verifyCode = async () => {
  service.verifyOTP(code.value, props.email)
    .then(() => emits('submit'))
    .catch(() => message.show('invalid_code', 'error'))
}

const resend = () => {
  service.sendOTP(props.email)
    .then(() => message.show('resend_code_success'))
    .catch(() => message.show('send_code_error', 'error'))
}

</script>

<template>
  <div class="flex flex-col items-center gap-5">
    <h3 class="text-2xl font-bold">
      {{ $t('login.otp.title') }}
    </h3>
    <p>
      {{ $t('login.otp.instruction') }} <span class="font-bold">{{ email }}</span>.
    </p>

    <InputOtp v-model="code" :length="6" />

    <button
      class="px-4 py-1 border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-900"
      @click="resend"
    >
      {{ $t('login.otp.resend_button') }}
    </button>
  </div>
</template>