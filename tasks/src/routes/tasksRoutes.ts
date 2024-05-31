import express from "express";
import TasksController from "../adapters/rest/TasksController";

const taskController = new TasksController();
const router = express.Router();

router
    .get('/tasks/:userReferenceId', taskController.getAllTasks)
    .post('/tasks',taskController.createTask)
    .put('/tasks/:taskId', taskController.updateTask)
    .delete('/tasks/:taskId', taskController.deleteTask)

export default router;