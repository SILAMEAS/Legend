import { d as defineEventHandler } from '../../_/nitro.mjs';
import { p as prisma } from '../../_/prisma.mjs';
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
import '_prisma/client';

const index_get = defineEventHandler(async (event) => {
  return await prisma.user.findMany();
});

export { index_get as default };
//# sourceMappingURL=index.get2.mjs.map
