<template>
  <div class="flex flex-wrap min-h-screen">
    <section class="flex flex-col justify-center items-center text-white w-full lg:w-1/2 bg-blue-300">
      <div class="text-center max-w-md space-y-6">
        <h1 class="text-4xl font-bold leading-tight">Organize sua vida com simplicidade</h1>
        <p class="text-lg opacity-90">Gerencie suas tarefas de forma intuitiva e mantenha-se produtivo todos os dias.</p>
        <div class="flex items-center justify-center space-x-8 pt-4">
          <div class="text-center">
            <Icon name="lucide:circle-check-big" size="32" />
            <p class="text-sm">Fácil de usar</p>
          </div>
          <div class="text-center">
            <Icon name="lucide:circle-check-big" size="32" />
            <p class="text-sm">Sempre sincronizado</p>
          </div>
          <div class="text-center">
            <Icon name="lucide:circle-check-big" size="32" />
            <p class="text-sm">100% seguro</p>
          </div>
        </div>
      </div>
    </section>
    <section class="flex justify-center items-center w-full lg:w-1/2">
      <div class="text-center p-5 w-md space-y-6 shadow-xl rounded-xl">
        <h2 class="text-3xl font-bold text-foreground mb-2">
          Bem vindo de volta
        </h2>
        <p class="text-gray-500">
          Faça login para acessar suas tarefas
        </p>
        <Button class="relative flex justify-center gap-2 items-center w-full h-12 cursor-pointer border-1 border-gray-200 rounded-xl transition-all duration-300 hover:bg-gray-100 hover:shadow-lg">
          <Icon name="logos:google-icon" size="32" class="absolute left-0 ms-3" />
          Continuar com Google
        </Button>
        <Button class="relative flex justify-center gap-2 items-center w-full h-12 cursor-pointer border-1 border-gray-200 rounded-xl transition-all duration-300 hover:bg-gray-100 hover:shadow-lg">
          <Icon name="logos:github-icon" size="32" class="absolute left-0 ms-3" />
          Continuar com GitHub
        </Button>
        <div class="flex items-center">
          <span class="h-px flex-1 bg-gray-300"></span>
          <span class="shrink-0 px-4 text-gray-900">Ou</span>
          <span class="h-px flex-1 bg-gray-300"></span>
        </div>
      </div>
    </section>
  </div>    
</template>