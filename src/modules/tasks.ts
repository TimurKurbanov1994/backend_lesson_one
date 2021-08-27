import { InterfaceTask, Priority } from '../interface/interfaces';
import { Request, Response } from 'express';
import { TaskValidation } from '../middleware/validateRequest';
import { db } from '../database/db';

const { v4: uuidv4 } = require('uuid');
let tasks: InterfaceTask[] = [];

// let tasks = db;

class TaskService {
  static getTasks(req: Request, res: Response) {
    res.send(`Tasks in the database: ${tasks}`);
  }

  static createTask(req: Request, res: Response) {
    const task = req.body;
    const { error } = TaskValidation.validate(req.body);

    if (error) return res.send('Введи правильно!');

    tasks.push({ ...task, id: uuidv4() });
    res.send(`Task [${task.name}] added to the database.`);
  }

  static getTask(req: Request, res: Response) {
    const { id } = req.params;
    const foundTask = tasks.find((task) => task.id === id);

    res.send(`Task of ${id} getted from the database`);
  }

  // static getPriorityTasks(req: Request, res: Response) {
  //   res.send(req.query.priority);
  //   res.send('hoho');
  // let { priority } = req.params;
  // let priorityNumber: any = req.query.priority;
  // const priorityTasks = tasks.filter(
  //   (task) => task.priority === Priority[priorityNumber]
  // );
  // }

  static deleteTask(req: Request, res: Response) {
    const { id } = req.params;

    tasks = tasks.filter((task) => task.id !== id);
    res.send(`Task with id ${req.params.id} has been deleted`);
  }

  static updateTask(req: Request, res: Response) {
    const { id } = req.params;
    const { name, description, data } = req.body;
    let task: any = tasks.find((task) => task.id === id);

    if (name) task.name = name;
    if (description) task.description = description;
    if (data) task.data = data;
    res.send(
      `Task has been updated to ${req.body.name}.age has been updated to ${req.body.data}`
    );
  }
}

export default TaskService;
