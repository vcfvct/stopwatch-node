/**
* class to hold data about one task executed within the stop watch.
*/
export class TaskInfo {
  private _taskName: string;

  private _timeMillis: number;

  constructor(taskName: string, timeMillis: number) {
    this._taskName = taskName;
    this._timeMillis = timeMillis;
  }

  get taskName(): string {
    return this._taskName;
  }

  get timeMills(): number {
    return this._timeMillis;
  }
}