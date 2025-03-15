import { RequestHandler } from "express";
import { prisma } from "../../prisma/client";
import { newTaskGroupSchema, newTaskGroupSchemaType } from "../schemas/taskGroupShema";


export const getAllGroups = async () => {
    try {
        const response = await prisma.taskGroup.findMany({})

        if (!response) {
            return []
        }
        return response
    } catch (error) {
        console.log(error)
        throw new Error("Error")
    }
}

export const createNewTaskGroup = async (data: newTaskGroupSchemaType) => {

    const content = newTaskGroupSchema.safeParse(data)

    if (content.success === false) {
        return {
            error: content.error.issues
        }
    }

    try {
        await prisma.taskGroup.create({
            data: {
                title: content.data.title,
                description: content.data.description ? content.data.description : '',
                userId: content.data.userId
            }
        })
    } catch (error) {
        console.log(error)
        throw new Error("Error")
    }
}