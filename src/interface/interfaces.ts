export interface InterfaceTask {
  name: string;
  description: string;
  status?: string;
  data: string;
  id?: string;
}

export enum TaskStatus {
  opened = "Opened",
  update = "Updated",
  closed = "Closed",
}
