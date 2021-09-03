import express, { Router } from "express";
import TaskService from "../modules/tasks";
import UsersController from "../modules/users";

const router: Router = express.Router();

const taskServices = new TaskService();
const usersController = new UsersController();

router.post("/tasks", taskServices.createTask);
router.get("/tasks", taskServices.getTasks);
router.get("/tasks/:id", taskServices.getTask);
router.patch("/tasks/:id", taskServices.updateTask);
router.delete("/tasks/:id", taskServices.deleteTask);
router.post("/users", usersController.createUser);
router.get("/users", usersController.getUsers);

export default router;
