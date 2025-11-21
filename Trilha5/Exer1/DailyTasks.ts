import { TaskManager } from "./TaskManager";

export class DailyTasks extends TaskManager {

    addTask(task: string): void {
        this.tasks.add(`(Diária) ${task}`);
    }
}
