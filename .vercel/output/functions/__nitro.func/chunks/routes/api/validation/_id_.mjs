import { d as defineEventHandler, g as getRouterParam, B as BadRequestException } from '../../../_/nitro.mjs';
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

const _id_ = defineEventHandler((event) => {
  const idParam = getRouterParam(event, "id");
  const id = Number(idParam);
  if (!Number.isInteger(id)) {
    return BadRequestException(event, "ID must be an integer");
  }
  return { message: "Valid ID", id };
});

export { _id_ as default };
//# sourceMappingURL=_id_.mjs.map
