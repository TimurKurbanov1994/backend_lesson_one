import {
  BaseEntity,
  BeforeInsert,
  Column,
  PrimaryGeneratedColumn,
} from "typeorm";

const { v4: uuidv4 } = require("uuid");

export default abstract class Model extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "uuid" })
  uuid: string;

  @BeforeInsert()
  createUuid() {
    this.uuid = uuidv4();
  }

  constructor(model?: Partial<any>) {
    super();
    Object.assign(this, model);
  }

  toJSON() {
    return { ...this, id: undefined };
  }
}
