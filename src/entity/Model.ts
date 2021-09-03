import {
  BaseEntity,
  BeforeInsert,
  Column,
  PrimaryGeneratedColumn,
} from "typeorm";

import * as uuid from "uuid";

export default class Model extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "uuid" })
  uuid: string;

  @BeforeInsert()
  createUuid() {
    this.uuid = uuid.v4();
  }

  constructor(model?: Partial<any>) {
    super();
    Object.assign(this, model);
  }
}
