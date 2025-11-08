import { z } from 'zod'
import { userSchema, userNameSchema } from '~/types/schemas/User.schema'

export type User = z.infer<typeof userSchema>
export type UserName = z.infer<typeof userNameSchema>