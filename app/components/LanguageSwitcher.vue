<script setup lang="ts">
import type { LocaleObject } from '@nuxtjs/i18n'

const { locale, setLocale } = useI18n()

const popover = ref()

const languages = [
  { code: 'pt-br', name: 'Português', icon: 'brazil' },
  { code: 'en', name: 'English', icon: 'usa' }
] as const

const switchLanguage = (langCode: LocaleObject['code']) => {
  setLocale(langCode)

  popover.value.hide()
}

const getCustomButtonClass = (langCode: LocaleObject['code']) => {
  return locale.value === langCode
    ? 'bg-gray-200 dark:bg-gray-700'
    : 'hover:bg-gray-100 dark:hover:bg-gray-800'
}

</script>

<template>
  <div>
    <button
      class="flex justify-center items-center p-2 rounded-xl cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800"
      @click="popover.toggle($event)"
    >
      <Icon name="globe" :size="25" />
    </button>

    <Popover ref="popover">
      <div class="flex flex-col gap-1 w-48">
        <button
          v-for="lang in languages"
          :key="lang.code"
          @click="switchLanguage(lang.code)"
          class="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-left cursor-pointer"
          :class="getCustomButtonClass(lang.code)"
        >
          <Icon :name="lang.icon" :size="20" />
          <span class="font-medium">{{ lang.name }}</span>
        </button>
      </div>
    </Popover>
  </div>
</template>