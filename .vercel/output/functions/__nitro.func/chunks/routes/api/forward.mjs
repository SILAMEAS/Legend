import { d as defineEventHandler } from '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:fs';
import 'node:path';

const forward = defineEventHandler((event) => {
  return event.$fetch("/api/forwarded");
});

export { forward as default };
//# sourceMappingURL=forward.mjs.map
