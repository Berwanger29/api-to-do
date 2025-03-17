import { Router } from "express";
import { authenticateJWT } from "../middlewares/authJWT";
import * as TodoController from "../controllers/todoController"

const router = Router();

router.use(authenticateJWT)

router.get('/home/:userId', TodoController.getAllGroupsController)
router.post('/newTaskGroup', TodoController.createTasckGroupController)
router.post('/addTasksToGroup/:taskGroupId/:userId', TodoController.createTascksToGroupController)
router.get('/addTasksToGroup/:userId/:taskGroupId', TodoController.getAllTasksByGroupController)

export default router;