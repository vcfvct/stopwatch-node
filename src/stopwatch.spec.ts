import { StopWatch } from './stopwatch';
import { TaskInfo } from './taskinfo';

describe('StopWatch Test', () => {
  let sw: StopWatch;
  // const sleep: Function = util.promisify(setTimeout);
  const sleep: Function = (ms?: number) => new Promise(resolve => setTimeout(resolve, ms));

  beforeEach(() => {
    sw = new StopWatch('sw');
  });

  test('should add task and log correctly', async () => {
    expect(sw.prettyPrint()).toContain(StopWatch.NoTaskMessage);
    expect(sw.isRunning()).toBeFalsy();
    const taskTimers = [30, 20];
    const taskTimersTotal = taskTimers.reduce((a, b) => a + b, 0);

    const firstTaskName = 'Test Task 1';
    sw.start(firstTaskName);
    await sleep(taskTimers[0]);
    expect(sw.isRunning()).toBeTruthy();
    sw.stop();
    expect(sw.isRunning()).toBeFalsy();

    const secondTaskName = 'Test Task 2';
    sw.start(secondTaskName);
    await sleep(taskTimers[1]);
    sw.stop();
    expect(sw.getTaskCount()).toBe(2);

    const prettyPrint = sw.prettyPrint();
    expect(prettyPrint).not.toBeNull();
    expect(prettyPrint).toContain(firstTaskName);
    expect(prettyPrint).toContain(secondTaskName);
    const rawTotal = sw.getTotalTime();
    expect(rawTotal).toBeGreaterThanOrEqual(taskTimersTotal);

    const noTask = sw.getTask('No task');
    expect(noTask).toBeUndefined();

    const taskOne = sw.getTask(firstTaskName);
    expect(taskOne).toBeInstanceOf(TaskInfo);
    expect(taskOne?.percentage).toBeTruthy;
  });

  test('should throw error calling start when some task already started', () => {
    sw = new StopWatch();
    sw.start();
    expect(() => sw.start('New Task')).toThrow();
  });

  test('should throw error calling sttop when no task', () => {
    expect(() => sw.stop()).toThrow();
  });
});

