import { RequestHandler } from "express"
import { createNewTaskGroup, getAllGroups } from "../services/todoService"

export const getAllGroupsController: RequestHandler = async (req, res) => {
    try {
        const response = await getAllGroups()

        res.status(200).json({ response })
        return
    } catch (error) {
        console.log(error)
        throw new Error("Error")
    }
}

export const createTasckGroupController: RequestHandler = async (req, res) => {
    try {
        const { title, description, userId } = req.body
        const response = await createNewTaskGroup({ title, description, userId })

        if (response?.error) {
            res.status(400).json({ error: response.error })
        }

        res.status(200).json({ message: `Grupo ${title} criado com sucesso` })
    } catch (error) {
        console.log(error)
        throw new Error("Error")
    }
}