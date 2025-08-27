<script lang="ts" setup>
import LoginEmailStep from '~/components/auth/LoginEmailStep.vue';
import LoginOTPStep from '~/components/auth/LoginOTPStep.vue';

enum LoginStep {
  EMAIL = 'email',
  OTP = 'otp',
}

const currentStep = ref(LoginStep.EMAIL)
const email = ref('')

const steps = {
  [LoginStep.EMAIL]: markRaw(LoginEmailStep),
  [LoginStep.OTP]: markRaw(LoginOTPStep)
}

const goToStep = (step: LoginStep) => {
  currentStep.value = step
}

const onSubmit = () => {
  if(currentStep.value === LoginStep.EMAIL)
    return goToStep(LoginStep.OTP)

  // redirect to home
}

</script>

<template>
  <component
    :is="steps[currentStep]"
    v-model:email="email"
    @submit="onSubmit"
  />
</template>