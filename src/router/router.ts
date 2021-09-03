import express, { Router } from "express";
import TaskService from "../modules/tasks";
import UsersController from "../modules/users";

const router: Router = express.Router();

const taskServices = new TaskService();
const usersController = new UsersController();

router.post("/", taskServices.createTask);
router.get("/", taskServices.getTasks);
router.get("/:id", taskServices.getTask);
router.patch("/:id", taskServices.updateTask);
router.delete("/:id", taskServices.deleteTask);
router.post("/users", usersController.createUser);
router.get("/users", usersController.getUsers);

export default router;
