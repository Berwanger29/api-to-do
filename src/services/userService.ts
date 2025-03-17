
import { prisma } from "../../prisma/client"; "../../prisma/client";
import {
    newUserSchema,
    NewUserSchemaProps
} from "../schemas/userSchema";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const createUser = async (data: NewUserSchemaProps) => {
    const newUser = newUserSchema.safeParse(data);
    if (newUser.success === false) {
        return false
    }

    try {
        const hashedPassword = await bcrypt.hash(newUser.data.password, 10);
        await prisma.user.create({
            data: {
                name: newUser.data.name,
                email: newUser.data.email,
                password: hashedPassword
            }
        })
        return true
    } catch (error) {
        console.log(error);
        return false
    }
}

export const loginUser = async (email: string, password: string) => {
    try {
        const user = await prisma.user.findUnique({
            where: { email }
        })

        if (!user) {
            return false
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return false
        }

        const token = jwt.sign({ email, password }, process.env.JWT_SECRET as string, { expiresIn: '480h' })
        console.log(token);
        return {
            ...user,
            token
        }

    } catch (error) {
        console.log(error);
        return false
    }
}