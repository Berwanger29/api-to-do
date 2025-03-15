import { Router } from "express";
import * as UserController from "../controllers/userController";
import { authenticateJWT } from "../middlewares/authJWT";

const router = Router();

router.post('/signin', UserController.createUserController)
router.post('/login', UserController.loginUserController)



export default router;