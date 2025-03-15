import { RequestHandler } from "express"
import { getAllGroups } from "../services/todoService"

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