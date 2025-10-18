import { defineStore } from "pinia"
import type { Task } from "~/types/Task.type"

export const useTaskStore = defineStore('task', () => {
  const tasks = ref<Task[]>([])

  function add(task: Task) {
    tasks.value.push(task)
  }

  function remove(taskId: string) {
    const taskIndex = tasks.value.findIndex(task => task.id === taskId)

    if(taskIndex === -1) return

    tasks.value.splice(taskIndex, 1)
  }

  return {
    tasks,
    add,
    remove
  }
})