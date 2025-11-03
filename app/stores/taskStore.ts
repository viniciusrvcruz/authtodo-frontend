import { defineStore } from "pinia"
import { FilterType } from "~/types/enums/FilterType.enum"
import type { Task } from "~/types/Task.type"

export const useTaskStore = defineStore('task', () => {
  const tasks = ref<Task[]>([])

  const counts = computed(() => {
    return {
      [FilterType.ALL]: tasks.value.length,
      [FilterType.COMPLETED]: tasks.value.filter(task => task.is_completed).length,
      [FilterType.ACTIVE]: tasks.value.filter(task => !task.is_completed).length,
    }
  })

  function add(task: Task) {
    tasks.value.push(task)
  }

  function remove(taskId: string) {
    const taskIndex = tasks.value.findIndex(task => task.id === taskId)

    if(taskIndex === -1) return

    tasks.value.splice(taskIndex, 1)
  }

  function update(taskUpdated: Task) {
    const taskIndex = tasks.value.findIndex(task => task.id === taskUpdated.id)

    if(taskIndex === -1) return

    tasks.value[taskIndex] = taskUpdated
  }

  function setTasks(newTasks: Task[]) {
    tasks.value = newTasks
  }

  return {
    tasks,
    counts,

    add,
    remove,
    update,
    setTasks,
  }
})