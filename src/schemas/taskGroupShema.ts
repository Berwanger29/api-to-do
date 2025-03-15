import { z } from "zod";

export const newTaskGroupSchema = z.object({
    title: z.string().min(1).max(25).trim(),
    description: z.string().max(50).trim().optional(),
    userId: z.string().uuid()
})

export type newTaskGroupSchemaType = z.infer<typeof newTaskGroupSchema>