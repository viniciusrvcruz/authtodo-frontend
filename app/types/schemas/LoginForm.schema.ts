import { z } from 'zod'

export const loginFormSchema = z.object({
    email: z.string({ required_error: 'required'}).email('email'),
})