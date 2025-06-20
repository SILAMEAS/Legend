import { d as defineEventHandler } from '../../_/nitro.mjs';
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

const index_put = defineEventHandler(async (event) => {
  event.context.auth.user;
  return "PUT";
});

export { index_put as default };
//# sourceMappingURL=index.put.mjs.map
