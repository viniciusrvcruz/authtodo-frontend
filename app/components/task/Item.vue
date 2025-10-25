<script setup lang="ts">
import type { Task } from '~/types/Task.type';

const props = defineProps<{
  task: Task
}>()

const editingTask = ref<Task | null>(null)

const startEdit = () => {
  editingTask.value = structuredClone(props.task)
}

</script>

<template>
  <div class="flex justify-start items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-200 dark:border-gray-400">
    <button class="flex justify-center items-center p-1 cursor-pointer rounded-xl border border-2 border-blue-300 w-8 h-8 aspect-square">
      <Icon name="check" size="20" />
    </button>

    <form v-if="editingTask" class="flex-1">
      <FloatInput
        v-model="editingTask.name"
        input-id="task_name_edit"
        type="text"
        :placeholder="$t('components.home.task.form.name_placeholder')"
      />
    </form>
    <span v-else class="line-through flex-1 cursor-pointer">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus dolor quas voluptatibus doloremque corrupti quidem reiciendis vero impedit ea quisquam enim dolores voluptas id atque distinctio, ipsum laudantium eaque laboriosam!
    </span>

    <div class="flex gap-1">
      <button
        class="flex justify-center items-center p-2 cursor-pointer rounded-xl text-gray-500 aspect-square hover:bg-gray-200"
        @click="startEdit"
      >
        <Icon name="pencil" size="20" />
      </button>
      <button class="flex justify-center items-center p-2 cursor-pointer rounded-xl text-gray-500 aspect-square hover:bg-gray-200 hover:text-red-400">
        <Icon name="trash" size="20" />
      </button>
    </div>
  </div>
</template>