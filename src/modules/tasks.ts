import { InterfaceTask, TaskStatus } from "../interface/interfaces";
import { Request, Response } from "express";
import { TaskValidation } from "../middleware/validateRequest";

const { v4: uuidv4 } = require("uuid");
let tasks: InterfaceTask[] = [];

class TaskService {
  public getTasks(req: Request, res: Response) {
    res.json(tasks);
  }

  public createTask(req: Request, res: Response) {
    const newTask = req.body;
    const value = TaskValidation.validate(newTask);
    if (value.error) {
      return res.json({
        succes: 0,
        message: value.error.details[0].message,
      });
    }
    newTask.status = TaskStatus.opened;
    tasks.push({ ...newTask, id: uuidv4() });
    res.json({ ...newTask, id: uuidv4() });
  }

  public getTask(req: Request, res: Response) {
    const { id } = req.params;
    let foundTask = tasks.find((task) => task.id === id);
    // foundTask.status = TaskStatus.opened
    res.json(foundTask);
    res.send(`Task of ${id} getted from the database`);
  }

  public deleteTask(req: Request, res: Response) {
    const { id } = req.params;

    tasks = tasks.filter((task) => task.id !== id);
    res.send(`Task with id ${req.params.id} has been deleted`);
  }

  public updateTask(req: Request, res: Response) {
    const { id } = req.params;
    const { name, description, data, status } = req.body;
    let task: any = tasks.find((task) => task.id === id);

    if (status) task.status = TaskStatus.update;
    if (name) task.name = name;
    if (description) task.description = description;
    if (data) task.data = data;
    res.json();
    // res.send(
    //     `Task has been updated to ${req.body.name}.age has been updated to ${req.body.data}`
    // );
  }
}

export default TaskService;
