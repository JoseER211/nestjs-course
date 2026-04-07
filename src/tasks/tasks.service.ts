import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDTO } from './dto/create-task.dto';
import { UpdateTaskDTO } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  private readonly tasks: any[] = [];

  getTasks(): any {
    return this.tasks;
  }
  getTask(id: number): any {
    const foundTask = this.tasks.find((task: any) => task.id == id);
    if (!foundTask) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    return foundTask;
  }

  createTask(task: CreateTaskDTO): any {
    const createdTask = { ...task, id: this.tasks.length + 1 };
    this.tasks.push(createdTask);
    console.log(createdTask);
    return createdTask;
  }
  updateTask(task: UpdateTaskDTO) {
    console.log(task);
    return 'Updating tasks';
  }
  deleteTask() {
    return 'Deleting tasks';
  }
  updateStatusTask() {
    return "Updating task's status";
  }
}
