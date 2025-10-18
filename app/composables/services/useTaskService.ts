import type { CreateTask, Task } from "~/types/Task.type"

export function useTaskService() {
  const { post } = useApiService()

  const create = (task: CreateTask) => {
    return post<Task>('/tasks', task)
  }

  return {
    create, 
  }
}