import { z } from 'zod'

export const taskSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string().nullable(),
  is_completed: z.boolean(),
  user_id: z.string().uuid(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
})

export const createTaskSchema = taskSchema.pick({
  name: true,
  description: true
})

export const updateTaskSchema = taskSchema.pick({
  id: true,
  name: true,
  description: true,
  is_completed: true,
})
.partial()
.extend({
  id: taskSchema.shape.id,
})
