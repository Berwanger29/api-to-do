import { z } from "zod";

export const newTaskGroupSchema = z.object({
    title: z.string({ required_error: "É necessário um título", invalid_type_error: "Tipo inválido" }).min(1).max(25).trim(),
    description: z.string({ invalid_type_error: "Tipo inválido" }).max(50).trim().optional(),
    userId: z.string().uuid('Usuário inválido')
})

export type newTaskGroupSchemaType = z.infer<typeof newTaskGroupSchema>