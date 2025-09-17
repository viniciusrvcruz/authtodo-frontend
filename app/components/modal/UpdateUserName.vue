<script setup lang="ts">

const visible = ref(false)
const pendingRequest = ref(false)

onMounted(() => {
  visible.value = true
})

const updateUserName = () => {

}
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-primary/10 backdrop-blur-sm">
    <div class="w-full max-w-md mx-4">
      <div class="bg-background rounded-2xl p-8 shadow-lg border">
        <div class="text-center mb-6">
          <h1 class="text-2xl font-semibold text-foreground mb-2">
            Como você se chama?
          </h1>
          <p class="text-muted-foreground">
            Vamos personalizar sua experiência
          </p>
        </div>

        <form @submit.prevent="updateUserName" class="space-y-4">
          <div class="space-y-2">
            <label for="name" class="block text-sm font-medium text-foreground">Seu nome</label>
            <input
              id="name"
              type="text"
              placeholder="Digite seu nome..."
              class="h-12 text-base w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              autofocus
            />
          </div>

          <button
            type="submit"
            class="w-full h-12 font-medium bg-primary text-white rounded-md hover:bg-primary/90 transition"
          >
            Continuar
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
