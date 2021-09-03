import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { IsEmail } from "class-validator";
import { Task } from "./Task";
import Model from "./Model";

@Entity("users")
export class User extends Model {
  @PrimaryColumn()
  name: string;

  @Column()
  @IsEmail()
  email: string;

  @ManyToOne(() => Task)
  task: Task;
}
