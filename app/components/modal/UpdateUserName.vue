<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useForm } from 'vee-validate';
import { userNameSchema } from '~/types/schemas/User.schema';
import type { UserName } from '~/types/User.type';

const service = useUserService()
const alert = useAlert()
const { refreshIdentity } = useSanctumAuth();

const inputRef = ref()
const visible = ref(false)
const pendingRequest = ref(false)

const { errors, defineField, handleSubmit } = useForm<UserName>({
  validationSchema: toTypedSchema(userNameSchema),
});

const [name, nameAttrs] = defineField('name');

onMounted(() => {
  visible.value = true

  inputRef.value.focus()
})

const onSubmit = handleSubmit(() => {
  pendingRequest.value = true

  service.updateUserName(name.value)
    .then(() => refreshIdentity())
    .catch(() => alert.error('update_user_name_error'))
    .finally(() => pendingRequest.value = false)
})
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-gray-50 dark:bg-gray-950">
    <div class="relative w-full max-w-md mx-4">
      <div class="rounded-2xl p-8 border border-gray-300 dark:border-gray-700">
        <div class="text-center mb-6">
          <h1 class="text-2xl font-semibold text-foreground mb-2">
            {{ $t('components.modal.update_user_name.title') }}
          </h1>
          <p class="text-muted-foreground">
            {{ $t('components.modal.update_user_name.subtitle') }}
          </p>
        </div>

        <form @submit.prevent="onSubmit" class="space-y-6">
          <div class="space-y-1 text-start">
            <input
              ref="inputRef"
              v-model="name"
              v-bind="nameAttrs"
              :placeholder="$t('components.modal.update_user_name.name_placeholder')"
              class="w-full h-12 px-5 rounded-xl bg-gray-100 border border-gray-300 outline-blue-300 outline-offset-2 dark:bg-gray-900 dark:border-gray-700 dark:outline-blue-500 focus:outline-2"
            />
            <span v-if="errors.name" class="text-red-400 text-sm">
              {{ $t(`validations.${errors.name}`) }}
            </span>
          </div>
          <button class="w-full h-12 bg-blue-400 rounded-xl cursor-pointer disabled:opacity-80" :disabled="pendingRequest">
            {{ $t('login.continue_button') }}
          </button>
        </form>
      </div>
    </div>

    <ToggleThemeButton class="fixed right-0 bottom-0 m-5 z-50" />
  </div>
</template>
