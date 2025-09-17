<script lang="ts" setup>
import { useForm } from 'vee-validate'
import { loginFormSchema } from '~/types/schemas/LoginForm.schema'
import type { LoginForm } from '~/types/LoginForm.type';
import { toTypedSchema } from '@vee-validate/zod';

const emits = defineEmits(['update:email', 'submit'])

const service = useAuthService()
const alert = useAlert()

const pendingRequest = ref(false)

const { errors, defineField, handleSubmit } = useForm<LoginForm>({
  validationSchema: toTypedSchema(loginFormSchema),
});

const [email, emailAttrs] = defineField('email');

const onSubmit = handleSubmit(() => {
  pendingRequest.value = true

  service.sendOTP(email.value)
    .then(() => {
      emits('update:email', email.value)
      emits('submit')
    })
    .catch(() => alert.error('send_code_error'))
    .finally(() => pendingRequest.value = false)
})

</script>

<template>
  <form class="space-y-6" @submit.prevent="onSubmit">
    <div class="space-y-1 text-start">
      <input
        v-model="email"
        v-bind="emailAttrs"
        :placeholder="$t('login.email_placeholder')"
        class="w-full h-12 px-5 rounded-xl bg-gray-100 border border-gray-200 outline-blue-300 outline-offset-2 dark:bg-gray-900 dark:border-gray-800 dark:outline-blue-500 focus:outline-2"
      />
      <span v-if="errors.email" class="text-red-400 text-sm">
        {{ $t(`validations.${errors.email}`) }}
      </span>
    </div>
    <button class="w-full h-12 bg-blue-400 rounded-xl cursor-pointer disabled:opacity-80" :disabled="pendingRequest">
      {{ $t('login.continue_button') }}
    </button>
  </form>
</template>