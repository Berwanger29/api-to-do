import { z } from "zod";

export const newUserSchema = z.object({
    name: z.string({ required_error: "Nome é obrigatório", invalid_type_error: "Nome precisa ser uma string" }).min(2, { message: "Nome deve ter no mínimo 2 caracteres" }).max(25, { message: "Nome deve ter no máximo 25 caracteres." }).trim(),
    email: z.string({ required_error: "Email é obrigatório", invalid_type_error: "Email precisa ser uma string" }).email({ message: "Email inválido" }).email({ message: "Email inválido.Por favor digite um e-mail válido" }).trim(),
    password: z.string({ required_error: "Senha é obrigatória", invalid_type_error: "Senha precisa ser uma string" }).min(6, { message: "Senha deve ter no mínimo 6 caracteres" }).max(18, { message: "Senha deve ter no máximo 18 caracteres" }).trim(),
})

export type NewUserSchemaProps = z.infer<typeof newUserSchema>;