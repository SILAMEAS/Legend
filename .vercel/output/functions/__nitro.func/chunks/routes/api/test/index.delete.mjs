import { d as defineEventHandler, g as getRouterParam } from '../../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:fs';
import 'node:path';

const index_delete = defineEventHandler(async (event) => {
  const name = getRouterParam(event, "name");
  return `Hello, ${name}! from Delete`;
});

export { index_delete as default };
//# sourceMappingURL=index.delete.mjs.map
