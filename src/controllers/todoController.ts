import { RequestHandler } from "express"
import { createNewTaskGroup, getAllGroups } from "../services/todoService"
import { addTasksToGroup, getAllTasks } from "../services/taskService"


export const getAllGroupsController: RequestHandler = async (req, res) => {
    try {
        const userId = req.params.userId
        const response = await getAllGroups(userId)

        res.status(200).json([...response])
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


export const createTascksToGroupController: RequestHandler = async (req, res) => {
    try {
        const { taskGroupId } = req.params
        const { tasks } = req.body

        const response = await addTasksToGroup({ taskGroupId, tasks })

        res.json({ message: response })

    } catch (error) {
        console.log(error)
        throw new Error("Error")
    }
}

export const getAllTasksByGroupController: RequestHandler = async (req, res) => {
    try {
        const { taskGroupId, userId } = req.params

        console.log("kdjvbjsvdb")
        
        const response = await getAllTasks(taskGroupId, userId)
        
        console.log("----=")

        res.json(response)
    } catch (error) {
        console.log(error)
        throw new Error("Error")
    }
}