import { d as defineEventHandler } from '../../_/nitro.mjs';
import { p as prisma } from '../../_/prisma.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:fs';
import 'node:path';
import '_prisma/client';

const index_post = defineEventHandler(async () => {
  const user = await prisma.user.create({
    data: { email: "test@test.com", name: "Meas Sila" }
  });
  return user;
});

export { index_post as default };
//# sourceMappingURL=index.post2.mjs.map
