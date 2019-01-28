![Stopwatch](https://cdn.iconscout.com/icon/premium/png-256-thumb/stopwatch-13-111965.png)

## A simple stopwatch with 0 dependency.
This is inspired by the [Spring-Stopwatch](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/util/StopWatch.html). `100%` Test Coverage.

### Install
> npm install stopwatch-node

### Example
```javascript
import { StopWatch } from 'stopwatch-node';

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
  const sw: StopWatch = new StopWatch('sw');
  sw.start('Task 1');
  await sleep(1000);
  sw.stop();
  // whether the stopwatch is currently running
  console.info(sw.isRunning());

  sw.start('Task 2');
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
```

