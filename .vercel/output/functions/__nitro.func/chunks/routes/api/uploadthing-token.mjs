import { d as defineEventHandler, c as useRuntimeConfig, r as readBody } from '../../_/nitro.mjs';
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

const uploadthingToken = defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);
  const response = await $fetch("https://uploadthing.com/api/uploadFiles", {
    method: "POST",
    headers: {
      "x-uploadthing-api-key": config.uploadthingSecret,
      "x-uploadthing-app-id": config.public.uploadthingAppId,
      "ut-version": "5.0.0",
      "content-type": "application/json"
    },
    body: {
      files: [
        {
          name: body.name,
          type: body.type,
          size: body.size
        }
      ],
      route: "imageUploader"
    }
  });
  return response;
});

export { uploadthingToken as default };
//# sourceMappingURL=uploadthing-token.mjs.map
