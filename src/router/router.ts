import express, { Router } from "express";
import TaskService from "../modules/tasks";

const router: Router = express.Router();
const taskServices = new TaskService();

router.get("/", taskServices.getTasks);
router.post("/", taskServices.createTask);
router.get("/:id", taskServices.getTask);
router.patch("/:id", taskServices.updateTask);
router.delete("/:id", taskServices.deleteTask);

export default router;
