import { RequestHandler } from "express";
import { prisma } from "../../prisma/client";


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