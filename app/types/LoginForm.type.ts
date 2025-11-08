import { z } from 'zod'
import { loginFormSchema } from '~/types/schemas/LoginForm.schema'

export type LoginForm = z.infer<typeof loginFormSchema>