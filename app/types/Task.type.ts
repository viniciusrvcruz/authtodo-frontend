import { z } from 'zod'
import type { taskSchema, createTaskSchema } from './schemas/Task.schema'

export type Task = z.infer<typeof taskSchema>
export type CreateTask = z.infer<typeof createTaskSchema>