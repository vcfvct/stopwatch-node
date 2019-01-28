import { TaskInfo } from './taskinfo';
import { puts } from 'util';

export class StopWatch {
  public static NoTaskMessage = 'No task info kept';

  private id: string;
  private currentTaskName: string | null = null;
  private startTimeMillis: number = 0;
  private totalTimeMillis: number = 0;
  private taskList: Array<TaskInfo> = [];

  constructor(id: string = '') {
    this.id = id;
  }

  /**
   * start a task
   */
  start(taskName: string = '') {
    this.currentTaskName !== null && this.throwError("Can't start StopWatch: it's already running");
    this.currentTaskName = taskName;
    this.startTimeMillis = Date.now();
  }

  /**
   * stop the current task
   */
  stop() {
    this.currentTaskName === null && this.throwError("Can't stop StopWatch: it's not running");
    const lastTime: number = Date.now() - this.startTimeMillis;
    this.totalTimeMillis += lastTime;
    const lastTaskInfo = new TaskInfo(this.currentTaskName!, lastTime);
    this.taskList.push(lastTaskInfo);
    this.currentTaskName = null;
  }

  /**
   * Return a string with a table describing all tasks performed.
   */
  prettyPrint(): string {
    const output: Array<string> = [this.shortSummary()];
    if (this.taskList.length) {
      output.push('------------------------------------------');
      output.push('ms \t\t % \t\t Task name');
      output.push('------------------------------------------');
      this.taskList.forEach((task: TaskInfo) => {
        let percentage = '0';
        try {
          percentage = (task.timeMills * 100 / this.totalTimeMillis).toFixed(2);
        } catch (e) {
        }
        output.push(`${task.timeMills} \t\t ${percentage} \t\t ${task.taskName}`);
      });
    } else {
      output.push(StopWatch.NoTaskMessage);
    }
    const outputString = output.join('\n');

    console.info(outputString);
    return outputString;
  }

  /**
   * Return a short description of the total running time.
   */
  shortSummary(): string {
    return `StopWatch '${this.id}' running time (millis) = ${this.totalTimeMillis}`;
  }

  /**
   * Return whether the stop watch is currently running
   */
  isRunning(): boolean {
    return this.currentTaskName !== null;
  }

  /**
   * Return the number of tasks timed.
   */
  getTaskCount(): number {
    return this.taskList.length;
  }

  private throwError(msg: string) {
    throw new Error(msg);
  }
}