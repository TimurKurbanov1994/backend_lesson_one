import { ITask, TaskStatus } from "../interface/interfaces";
import { Request, Response } from "express";
import { TaskValidation } from "../middleware/validateRequest";
import { Task } from "../entity/Task";

class TaskService {
  public async createTask(req: Request, res: Response) {
    try {
      //Validation
      const { error } = TaskValidation.validate(req.body);
      if (error) {
        return res.send("Введи правильно!");
      }

      let { name, description, status } = req.body;
      let task = new Task();
      task.name = name;
      task.status = TaskStatus.opened;
      task.description = description;

      await task.save();
      res.send(task);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  }

  public async getTasks(req: Request, res: Response) {
    try {
      const tasks = await Task.find({ relations: ["users"] });

      return res.json(tasks);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  }

  //
  public async getTask(req: Request, res: Response) {
    try {
      const uuid = req.params.id;
      const user = await Task.findOneOrFail({ uuid });

      return res.json(user);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  }

  public async deleteTask(req: Request, res: Response) {
    try {
      const uuid = req.params.id;
      const task = await Task.findOneOrFail({ uuid });

      await task.remove();
      return res.json({ message: "User deleted successfully" });
    } catch (err) {
      console.log(err);
    }
  }

  public async updateTask(req: Request, res: Response) {
    const uuid = req.params.id;
    const { name, description } = req.body;

    try {
      const task = await Task.findOneOrFail(uuid);

      task.name = name || task.name;
      task.status = TaskStatus.update;
      task.description = description || task.description;

      await task.save();
      return res.json(task);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Something went wrong" });
    }
  }
}

export default TaskService;
