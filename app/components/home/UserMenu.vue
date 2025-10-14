<script setup lang="ts">
import type { User } from '~/types/User.type';

const { t } = useI18n()
const { user } = useSanctumAuth<User>()

const menu = ref();
const items = ref([
  {
    separator: true
  },
  {
    label: t('components.home.user_menu.logout'),
    icon: 'pi pi-plus',
    command: () => {
      console.log('logout')
    }
  },
]);

const toggle = (event: Event) => {
  menu.value.toggle(event);
};

</script>

<template>
  <div>
    <button class="flex items-start bg-gray-200 p-2 rounded-full cursor-pointer dark:bg-gray-500" @click="toggle">
      <Icon name="user" size="25" class="text-black" />
    </button>
    <Menu v-if="user" ref="menu" :model="items" :popup="true" class="w-[200px]">
      <template #start>
        <div class="p-2 w-full">
          <h3 class="font-bold text-lg truncate" :title="user?.name ?? ''">
            {{ user.name }}
          </h3>
          <p class="truncate" :title="user.email">
            {{ user.email }}
          </p>
        </div>
      </template>
    </Menu>
  </div>
</template>