import { prisma } from "../../prisma/client";


type AddTaskProps = {
    taskGroupId: string;
    tasks: string[]
}

export const addTasksToGroup = async (data: AddTaskProps) => {
    const { taskGroupId, tasks } = data

    try {
        const response = await prisma.task.createMany({
            data: tasks.map(e => ({
                title: e,
                taskGroupId: Number(taskGroupId),
            }))
        })

        return response
    } catch (error) {
        console.log(error)
        throw new Error("Error")
    }
}

export const getAllTasks = async (taskGroupId: string, userId: string) => {
    try {
        const response = await prisma.task.findMany({
            where: {
                taskGroupId: Number(taskGroupId),
                taskGroup:{
                    userId
                }
            }
        })

        return response
    } catch (error) {
        console.log(error)
        throw new Error("Error")
    }
}