import {
  Entity,
  Column,
  BaseEntity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";
import { User } from "./User";
import Model from "./Model";
import { TaskStatus } from "../interface/interfaces";

const { v4: uuidv4 } = require("uuid");

@Entity("tasks")
export class Task extends Model {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    enum: TaskStatus,
  })
  status: string;

  @Column()
  description: string;

  @CreateDateColumn()
  data: Date = new Date();

  @OneToMany(() => User, (user) => user.task)
  users: User[];
}
