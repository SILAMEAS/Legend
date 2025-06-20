import { defineComponent, withAsyncContext, watch, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useAsyncData } from './asyncData-D5T3j_YI.mjs';
import { a as useRoute } from './server.mjs';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: posts, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `posts-${route.fullPath}`,
      // Unique key to avoid cache collisions
      () => $fetch("https://jsonplaceholder.typicode.com/posts"),
      {
        immediate: true,
        // Fetch immediately on mount
        watch: [route],
        // Re-fetch when route changes
        dedupe: "cancel"
        // Cancel duplicate requests during navigation
      }
    )), __temp = await __temp, __restore(), __temp);
    watch(posts, (newPosts) => {
      console.log("Posts updated:", newPosts);
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(pending)) {
        _push(`<p${ssrRenderAttrs(_attrs)}>Loading...</p>`);
      } else if (unref(error)) {
        _push(`<p${ssrRenderAttrs(_attrs)}>Error: ${ssrInterpolate(unref(error).message)}</p>`);
      } else if (unref(posts)) {
        _push(`<!--[-->`);
        ssrRenderList(unref(posts), (i) => {
          _push(`<pre>${ssrInterpolate(i.id)}</pre>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<p${ssrRenderAttrs(_attrs)}>No data available</p>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/post/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-A_8gl_hs.mjs.map
