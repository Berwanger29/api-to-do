import { Router } from "express";
import * as UserController from "../controllers/userController";

const router = Router();

router.post('/signin', UserController.createUserController)
router.post('/login', UserController.loginUserController)



export default router;