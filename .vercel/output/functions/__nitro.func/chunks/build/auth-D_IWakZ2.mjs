import { d as defineNuxtRouteMiddleware, c as abortNavigation } from './server.mjs';
import 'vue';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:fs';
import 'node:path';
import 'pinia';
import 'vue-router';
import '@iconify/vue';
import 'vue/server-renderer';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const auth = defineNuxtRouteMiddleware((to, from) => {
  const protectedRoutes = ["/posts"];
  if (protectedRoutes.includes(to.path) && true) {
    return abortNavigation();
  }
});

export { auth as default };
//# sourceMappingURL=auth-D_IWakZ2.mjs.map
