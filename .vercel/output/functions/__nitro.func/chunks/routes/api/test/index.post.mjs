import { d as defineEventHandler, g as getRouterParam, r as readBody, a as getQuery, b as parseCookies } from '../../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:fs';
import 'node:path';

const index_post = defineEventHandler(async (event) => {
  const name = getRouterParam(event, "name");
  const body = await readBody(event);
  const query = getQuery(event);
  const cookies = parseCookies(event);
  const message = `Hello, ${name}! from Post`;
  return { message, body, query, cookies };
});

export { index_post as default };
//# sourceMappingURL=index.post.mjs.map
