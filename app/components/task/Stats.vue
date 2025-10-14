<script setup lang="ts">

</script>

<template>
  <section class="flex justify-between gap-2 sm:gap-5">
    <div class="flex gap-4 sm:gap-5 w-full p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-blue-950 border-2 border-blue-400">
      <div class="rounded-xl hidden justify-center items-center sm:flex sm:rounded-2xl p-2 sm:p-3 bg-blue-900">
        <Icon name="list_todo" size="30" class="text-blue-300" />
      </div>
      <div>
        <h3 class="font-semibold sm:font-bold text-gray-400 leading-none text-sm sm:text-base">
          Total
        </h3>
        <span class="font-bold text-2xl sm:text-3xl">3</span>
      </div>
    </div>

    <div class="flex gap-4 sm:gap-5 w-full p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-green-950 border-2 border-green-400">
      <div class="rounded-xl hidden justify-center items-center sm:flex sm:rounded-2xl p-2 sm:p-3 bg-green-900">
        <Icon name="check_circle" size="30" class="text-green-300" />
      </div>
      <div>
        <h3 class="font-semibold sm:font-bold text-gray-400 leading-none text-sm sm:text-base">
          Concluídas
        </h3>
        <div>
          <span class="font-bold text-2xl sm:text-3xl">1</span>
          <span class="text-gray-400 text-xs sm:text-sm">(33%)</span>
        </div>
      </div>
    </div>

    <div class="flex gap-4 sm:gap-5 w-full p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-amber-950 border-2 border-amber-400">
      <div class="rounded-xl hidden justify-center items-center sm:flex sm:rounded-2xl p-2 sm:p-3 bg-amber-900">
        <Icon name="circle" size="30" class="text-amber-300" />
      </div>
      <div>
        <h3 class="font-semibold sm:font-bold text-gray-400 leading-none text-sm sm:text-base">
          Ativas
        </h3>
        <span class="font-bold text-2xl sm:text-3xl">1</span>
      </div>
    </div>
  </section>
</template>
