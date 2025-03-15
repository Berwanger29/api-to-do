import { Router } from "express";
import { authenticateJWT } from "../middlewares/authJWT";
import * as TodoController from "../controllers/todoController"

const router = Router();

router.get('/home', authenticateJWT, TodoController.getAllGroupsController)

export default router;