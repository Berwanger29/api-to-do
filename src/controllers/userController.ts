import { RequestHandler } from "express";
import { createUser, loginUser } from "../services/userService";


export const createUserController: RequestHandler = async (req, res) => {
    const { name, email, password } = req.body;

    const newUser = await createUser({
        name,
        email,
        password
    })

    if (!newUser) {
        res.status(400).json({
            message: "Erro criar usuário"
        })
        return
    }

    res.status(201).json({
        message: `${name}, bem vindo ao XYZ app`
    })
}

export const loginUserController: RequestHandler = async (req, res) => {
    const { email, password } = req.body;
    const user = await loginUser(email, password)

    if (!user) {
        res.status(400).json({
            message: "Email ou senha inválidos"
        })
        return
    }

    res.status(200).json({
        message: "Login realizado com sucesso"
    })
}