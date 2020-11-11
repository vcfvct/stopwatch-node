![Stopwatch](https://cdn.iconscout.com/icon/premium/png-256-thumb/stopwatch-13-111965.png)

## A simple JS/TS Stopwatch with 0 dependency.
This is inspired by the [Spring-Stopwatch](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/util/StopWatch.html). Written in `Typescript`, 100%` Test Coverage.

### Install
> npm install stopwatch-node

### Example
```javascript
import { StopWatch } from 'stopwatch-node';

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
  const sw = new StopWatch('sw');
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
```

#### Output
```
------------------------------------------
ms 		 % 		 Task name
------------------------------------------
1000 		 30.21 		 Task 1
1504 		 45.44 		 Task 2
505 		 15.26 		 Task 3
301 		 9.09 		 Task 4


'Task 2' took 1506 and percentage is 45.47
```

