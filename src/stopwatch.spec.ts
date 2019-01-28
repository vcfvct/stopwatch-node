import { StopWatch } from './stopwatch';

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
    const firstTaskName = 'Test Task 1';
    sw.start(firstTaskName);
    await sleep(30);
    expect(sw.isRunning()).toBeTruthy();
    sw.stop();
    expect(sw.isRunning()).toBeFalsy();
    const secondTaskName = 'Test Task 2';
    sw.start(secondTaskName);
    await sleep(20);
    sw.stop();
    expect(sw.getTaskCount()).toBe(2);
    const prettyPrint = sw.prettyPrint();
    expect(prettyPrint).not.toBeNull();
    expect(prettyPrint).toContain(firstTaskName);
    expect(prettyPrint).toContain(secondTaskName);
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

