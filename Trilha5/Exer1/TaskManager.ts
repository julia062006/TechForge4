export abstract class TaskManager {
    protected tasks: Set<string> = new Set();

    abstract addTask(task: string): void;

    listTasks(): string[] {
        return Array.from(this.tasks);
    }
}
