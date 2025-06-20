import { e as eventHandler } from '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:fs';
import 'node:path';

const timeConsumingBackgroundTask = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1e3));
};
const backgroundTask = eventHandler((event) => {
  event.waitUntil(timeConsumingBackgroundTask());
  return "done";
});

export { backgroundTask as default };
//# sourceMappingURL=background-task.mjs.map
