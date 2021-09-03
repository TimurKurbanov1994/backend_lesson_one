import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { Task } from "./Task";
import Model from "./Model";

@Entity("users")
export class User extends Model {
  @PrimaryColumn()
  name: string;

  @Column()
  email: string;

  @ManyToOne(() => Task)
  task: Task;
}
