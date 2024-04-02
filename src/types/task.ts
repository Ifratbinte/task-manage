export interface Task {
  id: any
  title: string;
  description: string;
  dueDate: Date;
  completed?: boolean
  status?: any
}