<script setup lang="ts">
const { t } = useI18n()

const menu = ref();
const items = ref([
  {
    separator: true
  },
  {
    label: t('components.home.user_menu.logout'),
    icon: 'pi pi-plus',
    command: () => {
      console.log('teste')
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
    <Menu ref="menu" :model="items" :popup="true" class="w-[200px]">
      <template #start>
        <div class="p-2 w-full">
          <h3 class="font-bold text-lg truncate" title="Nome do usuáriooooooooooooooooooooo">
            Nome do usuáriooooooooooooooooooooo
          </h3>
          <p class="truncate" title="usuarioemail@gmail.comdddddddddddddd">
            usuarioemail@gmail.comdddddddddddddd
          </p>
        </div>
      </template>
    </Menu>
  </div>
</template>