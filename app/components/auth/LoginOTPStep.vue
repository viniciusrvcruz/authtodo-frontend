<script lang="ts" setup>
import { ref, onUnmounted } from "vue"

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

const cooldown = ref(0)
let interval = ref<NodeJS.Timeout|null>(null)

const verifyCode = async () => {
  if (code.value.length < 6) return

  await service.csrfCookie()

  service.verifyOTP(code.value, props.email)
    .then(() => emits('submit'))
    .catch(() => message.show('invalid_code', 'error'))
}

const resend = () => {
  if (cooldown.value > 0) return // blocks if still on cooldown

  service.sendOTP(props.email)
    .then(() => {
      message.show('resend_code_success')

      emits('resend')

      startCooldown()
    })
    .catch(() => message.show('send_code_error', 'error'))
}

const startCooldown = () => {
  cooldown.value = 10

  if (interval.value) clearInterval(interval.value)

  interval.value = setInterval(() => {
    cooldown.value--

    if (cooldown.value <= 0 && interval.value) {
      clearInterval(interval.value)

      interval.value = null
    }
  }, 1000)
}

onUnmounted(() => {
  if (interval.value) clearInterval(interval.value)
})

</script>

<template>
  <div class="flex flex-col items-center gap-5">
    <h3 class="text-2xl font-bold">
      {{ $t('login.otp.title') }}
    </h3>
    <p>
      {{ $t('login.otp.instruction') }} <span class="font-bold">{{ email }}</span>.
    </p>

    <InputOtp
      v-model="code"
      :length="6"
      @change="verifyCode"
    />

    <button
      class="px-4 py-1 border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-900 disabled:opacity-50 disabled:cursor-auto"
      :disabled="cooldown > 0"
      @click="resend"
    >
      {{ $t('login.otp.resend_button') }}
      {{ cooldown > 0 ? `(${cooldown})` : '' }}
    </button>
  </div>
</template>
