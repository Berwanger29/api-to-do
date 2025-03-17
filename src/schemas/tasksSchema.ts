import { z } from "zod";


export const taskSchema = z.object({
    id: z.number().nonnegative(),
    title: z.string().nonempty().max(255).trim(),
    completed: z.boolean().default(false)
})

export type TaskShemaType = z.infer<typeof taskSchema>