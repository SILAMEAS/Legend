import { d as defineEventHandler, g as getRouterParam } from '../../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:module';
import 'node:fs';
import 'node:path';

const index_get = defineEventHandler(async (event) => {
  const name = getRouterParam(event, "name");
  return `Hello, ${name}! from GET`;
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
