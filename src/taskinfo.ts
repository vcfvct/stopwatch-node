/**
* class to hold data about one task executed within the stop watch.
*/
export class TaskInfo {
  private _taskName: string;
  private _percentage: string | undefined;
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

  get percentage(): string | undefined {
    return this._percentage;
  }

  calculatePercentage(totalTimeMillis: number): string {
    this._percentage = (this._timeMillis * 100 / totalTimeMillis).toFixed(2);
    return this._percentage;
  }


}