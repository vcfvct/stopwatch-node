import { StopWatch } from './index';

const sleep: Function = (ms?: number) => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
  const sw: StopWatch = new StopWatch('sw');
  sw.start('Task 1');
  await sleep(1000);
  sw.stop();
  // whether the stop watch is currently running
  console.info(sw.isRunning());

  const task2Name = 'Task 2';
  sw.start(task2Name);
  await sleep(1500);
  sw.stop();

  sw.start('Task 3');
  await sleep(500);
  sw.stop();

  sw.start('Task 4');
  await sleep(300);
  sw.stop();

  console.info(`Short Summary: ${sw.shortSummary()}`);
  console.info(`Task Count: ${sw.getTaskCount()}`);
  // a table describing all tasks performed
  sw.prettyPrint();

  const task2 = sw.getTask(task2Name);
  console.info(`'${task2Name}' took ${task2?.timeMills} and percentage is ${task2?.percentage}`);
})();
