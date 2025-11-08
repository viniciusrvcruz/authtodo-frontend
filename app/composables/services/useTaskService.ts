import type { CreateTask, Task, UpdateTask } from "~/types/Task.type"

export function useTaskService() {
  const { post, get, put, del } = useApiService()

  const index = () => {
    return get<Task[]>('/tasks')
  }

  const store = (task: CreateTask) => {
    return post<Task>('/tasks', task)
  }

  const show = (taskId: string) => {
    return get<Task>(`/tasks/${taskId}`)
  }

  const update = (task: UpdateTask) => {
    return put<Task>(`/tasks/${task.id}`, task)
  }

  const destroy = (taskId: string) => {
    return del<Task>(`/tasks/${taskId}`)
  }

  return {
    index,
    store,
    show,
    update,
    destroy,
  }
}