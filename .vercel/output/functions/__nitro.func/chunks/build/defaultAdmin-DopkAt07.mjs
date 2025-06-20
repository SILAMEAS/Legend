import { _ as __nuxt_component_0 } from './nuxt-link-BsPFViS0.mjs';
import { u as useI18nCustom, a as useActiveRoute, c as createLucideIcon, U as User } from './useActiveRoute-BJIFGeCg.mjs';
import { defineComponent, useSSRContext, mergeProps, unref, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './server.mjs';
import '../_/nitro.mjs';
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
import 'pinia';
import 'vue-router';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

/**
 * @license lucide-vue-next v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Clapperboard = createLucideIcon("clapperboard", [
  [
    "path",
    { d: "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z", key: "1tn4o7" }
  ],
  ["path", { d: "m6.2 5.3 3.1 3.9", key: "iuk76l" }],
  ["path", { d: "m12.4 3.4 3.1 4", key: "6hsd6n" }],
  ["path", { d: "M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z", key: "ltgou9" }]
]);
/**
 * @license lucide-vue-next v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cog = createLucideIcon("cog", [
  ["path", { d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z", key: "sobvz5" }],
  ["path", { d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z", key: "11i496" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 22v-2", key: "1osdcq" }],
  ["path", { d: "m17 20.66-1-1.73", key: "eq3orb" }],
  ["path", { d: "M11 10.27 7 3.34", key: "16pf9h" }],
  ["path", { d: "m20.66 17-1.73-1", key: "sg0v6f" }],
  ["path", { d: "m3.34 7 1.73 1", key: "1ulond" }],
  ["path", { d: "M14 12h8", key: "4f43i9" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "m20.66 7-1.73 1", key: "1ow05n" }],
  ["path", { d: "m3.34 17 1.73-1", key: "nuk764" }],
  ["path", { d: "m17 3.34-1 1.73", key: "2wel8s" }],
  ["path", { d: "m11 13.73-4 6.93", key: "794ttg" }]
]);
/**
 * @license lucide-vue-next v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Film = createLucideIcon("film", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M7 3v18", key: "bbkbws" }],
  ["path", { d: "M3 7.5h4", key: "zfgn84" }],
  ["path", { d: "M3 12h18", key: "1i2n21" }],
  ["path", { d: "M3 16.5h4", key: "1230mu" }],
  ["path", { d: "M17 3v18", key: "in4fa5" }],
  ["path", { d: "M17 7.5h4", key: "myr1c1" }],
  ["path", { d: "M17 16.5h4", key: "go4c1d" }]
]);
/**
 * @license lucide-vue-next v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const LayoutDashboard = createLucideIcon("layout-dashboard", [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }],
  ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }],
  ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]
]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "adminLeftSide",
  __ssrInlineRender: true,
  setup(__props) {
    const { localePath } = useI18nCustom();
    const { isActive } = useActiveRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_layoutDashboard = LayoutDashboard;
      const _component_Clapperboard = Clapperboard;
      const _component_Film = Film;
      const _component_Cog = Cog;
      const _component_User = User;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col p-5 gap-y-3" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/admin"),
        class: ["link flex items-center gap-x-2", { "active-link active-link-border": unref(isActive)("/admin") }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_layoutDashboard, null, null, _parent2, _scopeId));
            _push2(` Dashboard `);
          } else {
            return [
              createVNode(_component_layoutDashboard),
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/admin/movie"),
        class: ["link flex items-center gap-x-2", { "active-link active-link-border": unref(isActive)("/admin/movie") }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Clapperboard, null, null, _parent2, _scopeId));
            _push2(` Movie `);
          } else {
            return [
              createVNode(_component_Clapperboard),
              createTextVNode(" Movie ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/admin/cinema"),
        class: ["link flex items-center gap-x-2", { "active-link active-link-border": unref(isActive)("/admin/cinema") }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Film, null, null, _parent2, _scopeId));
            _push2(` Cinema `);
          } else {
            return [
              createVNode(_component_Film),
              createTextVNode(" Cinema ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/admin/set-up"),
        class: ["link flex items-center gap-x-2", { "active-link active-link-border": unref(isActive)("/admin/set-up") }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Cog, null, null, _parent2, _scopeId));
            _push2(` Set up `);
          } else {
            return [
              createVNode(_component_Cog),
              createTextVNode(" Set up ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/admin/user"),
        class: ["link flex items-center gap-x-2", { "active-link active-link-border": unref(isActive)("/admin/user") }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_User, null, null, _parent2, _scopeId));
            _push2(` User `);
          } else {
            return [
              createVNode(_component_User),
              createTextVNode(" User ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ms/adminLeftSide.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_MsAdminLeftSide = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-full" }, _attrs))}><div class="w-[200px] h-screen border-r-1 border-white/30">`);
  _push(ssrRenderComponent(_component_MsAdminLeftSide, null, null, _parent));
  _push(`</div><div class="flex grow p-5">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/defaultAdmin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const defaultAdmin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { defaultAdmin as default };
//# sourceMappingURL=defaultAdmin-DopkAt07.mjs.map
