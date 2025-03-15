import { Router } from "express";
import { authenticateJWT } from "../middlewares/authJWT";

const router = Router();

router.get('/home', authenticateJWT, (req, res) => {
    res.status(200).json({
        message: "Bem vindo a home"
    })
    return
})

export default router;