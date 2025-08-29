<script lang="ts" setup>

const email = defineModel('email', {
  type: String,
  required: true,
})

defineEmits(['submit'])

const onSubmit = async () => {
    const res = await useFetch('/api/otp/send', {
      method: 'POST',
      body: {
        email: 'teste@gmail.com'
      },
    })
    

  console.log(res)
}

</script>

<template>
  <form class="space-y-6" @submit.prevent="onSubmit">
    <input
      v-model="email"
      type="email"
      :placeholder="$t('login.email_placeholder')"
      class="w-full h-12 px-5 rounded-xl bg-gray-100 border border-gray-200 outline-blue-300 outline-offset-2 dark:bg-gray-900 dark:border-gray-800 dark:outline-blue-500 focus:outline-2"
      required
    />
    <button class="w-full h-12 bg-blue-400 rounded-xl cursor-pointer">
      {{ $t('login.continue_button') }}
    </button>
  </form>
</template>