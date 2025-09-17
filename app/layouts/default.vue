<script setup lang="ts">
import type { User } from '~/types/User.type';

const { user } = useSanctumAuth<User>();

</script>

<template>
  <div>
    <slot />
    <ModalUpdateUserName v-if="user && !user.name" />
  </div>
</template>