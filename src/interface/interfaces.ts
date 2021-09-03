export interface ITask {
  id: number;
  uuid: string;
  name: string;
  status: string;
  description: string;
  data: Date;
}

export enum TaskStatus {
  opened = "Opened",
  update = "Updated",
  closed = "Closed",
}
