import { User } from "../entity/User";
import { Task } from "../entity/Task";
import { Request, Response } from "express";

class UsersController {
  public async createUser(req: Request, res: Response) {
    const { name, email, uuid } = req.body;

    try {
      const task = await Task.findOneOrFail({ uuid: uuid });

      const user = new User({ name, email, task });

      await user.save();

      return res.json(user);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  }

  public async getUsers(req: Request, res: Response) {
    try {
      const users = await User.find({ relations: ["task"] });
      console.log(users);
      return res.json(users);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Something went wrong" });
    }
  }
}

export default UsersController;
