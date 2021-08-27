export interface InterfaceTask {
  name: string;
  priority: Priority;
  description: string;
  data: string;
  id?: string;
}

export enum Priority {
  low,
  middle,
  high,
  ultra
}
