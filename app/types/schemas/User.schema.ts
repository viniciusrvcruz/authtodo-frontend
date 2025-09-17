import { z } from 'zod'

export const userSchema = z.object({
    id: z.string().uuid(),
    name: z.string({ required_error: 'required'}).nullable(),
})

export const userNameSchema = z.object({
    name: z.string({ required_error: 'required' }).trim().min(1, 'required')
})