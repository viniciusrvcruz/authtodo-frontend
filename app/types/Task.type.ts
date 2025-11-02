import { z } from 'zod'
import type { taskSchema, createTaskSchema, updateTaskSchema } from './schemas/Task.schema'

export type Task = z.infer<typeof taskSchema>
export type CreateTask = z.infer<typeof createTaskSchema>
export type UpdateTask = z.infer<typeof updateTaskSchema>