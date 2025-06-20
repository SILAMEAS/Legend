import { c as cn, a as _sfc_main$e, _ as _sfc_main$1$1 } from './index-BCVr8lgN.mjs';
import { u as useI18nCustom, a as useActiveRoute, c as createLucideIcon, U as User } from './useActiveRoute-BJIFGeCg.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, ref, createBlock, openBlock, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { Sun, Moon, PlayIcon, AppleIcon, FacebookIcon, InstagramIcon, YoutubeIcon, SendIcon, ChevronDown, Check } from 'lucide-vue-next';
import { _ as __nuxt_component_1$1, l as useState, k as useCookie } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as __nuxt_component_0$2 } from './nuxt-link-BsPFViS0.mjs';
import { reactiveOmit } from '@vueuse/core';
import { Separator, useForwardPropsEmits, DropdownMenuRoot, useForwardProps, DropdownMenuTrigger, DropdownMenuPortal, DropdownMenuContent, DropdownMenuItem } from 'reka-ui';
import 'clsx';
import 'tailwind-merge';
import 'class-variance-authority';
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

/**
 * @license lucide-vue-next v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bell = createLucideIcon("bell", [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
]);
/**
 * @license lucide-vue-next v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const House = createLucideIcon("house", [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt"
    }
  ]
]);
/**
 * @license lucide-vue-next v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const MapPin = createLucideIcon("map-pin", [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
]);
/**
 * @license lucide-vue-next v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Popcorn = createLucideIcon("popcorn", [
  [
    "path",
    {
      d: "M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4",
      key: "10td1f"
    }
  ],
  ["path", { d: "M10 22 9 8", key: "yjptiv" }],
  ["path", { d: "m14 22 1-14", key: "8jwc8b" }],
  [
    "path",
    {
      d: "M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z",
      key: "1qo33t"
    }
  ]
]);
/**
 * @license lucide-vue-next v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Search = createLucideIcon("search", [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
]);
/**
 * @license lucide-vue-next v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tags = createLucideIcon("tags", [
  ["path", { d: "m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19", key: "1cbfv1" }],
  [
    "path",
    {
      d: "M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z",
      key: "135mg7"
    }
  ],
  ["circle", { cx: "6.5", cy: "9.5", r: ".5", fill: "currentColor", key: "5pm5xn" }]
]);
/**
 * @license lucide-vue-next v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ticket = createLucideIcon("ticket", [
  [
    "path",
    {
      d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
      key: "qn84l0"
    }
  ],
  ["path", { d: "M13 5v2", key: "dyzc3o" }],
  ["path", { d: "M13 17v2", key: "1ont0d" }],
  ["path", { d: "M13 11v2", key: "1wjjxi" }]
]);
const _sfc_main$d = {
  __name: "selecteLanguage",
  __ssrInlineRender: true,
  setup(__props) {
    useI18nCustom();
    const localeCookie = useCookie("i18n_redirected");
    const languages = ref([
      {
        code: "en",
        name: "English",
        flag: "https://flagcdn.com/w20/gb.png"
      },
      {
        code: "kh",
        name: "\u1797\u17B6\u179F\u17B6\u1781\u17D2\u1798\u17C2\u179A",
        flag: "https://flagcdn.com/w20/kh.png"
      }
      // {
      //   code: 'CN',
      //   name: '中文',
      //   flag: 'https://flagcdn.com/w20/cn.png'
      // }
    ]);
    const isOpen = ref(false);
    const selectedLanguage = ref(languages.value[0]);
    if (localeCookie.value) {
      const exitLanguageLoader = languages.value.find((l) => l.code === localeCookie.value);
      if (exitLanguageLoader) {
        selectedLanguage.value = exitLanguageLoader;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative inline-block text-left" }, _attrs))}><button class="hidden md:inline-flex items-center justify-center gap-2 rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-expanded="true" aria-haspopup="true"><img${ssrRenderAttr("src", selectedLanguage.value.flag)}${ssrRenderAttr("alt", selectedLanguage.value.name)} class="h-5 w-5 rounded-sm"><span>${ssrInterpolate(selectedLanguage.value.code)}</span>`);
      _push(ssrRenderComponent(unref(ChevronDown), { class: "h-4 w-4" }, null, _parent));
      _push(`</button><button class="md:hidden inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" aria-expanded="true" aria-haspopup="true"><img${ssrRenderAttr("src", selectedLanguage.value.flag)}${ssrRenderAttr("alt", selectedLanguage.value.name)} class="h-5 w-5 rounded-sm">`);
      _push(ssrRenderComponent(unref(ChevronDown), { class: "h-4 w-4" }, null, _parent));
      _push(`</button>`);
      if (isOpen.value) {
        _push(`<div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1"><div class="py-1" role="none"><!--[-->`);
        ssrRenderList(languages.value, (language) => {
          _push(`<button class="group flex w-full items-center justify-between px-4 py-2 text-sm text-white hover:bg-gray-700" role="menuitem" tabindex="-1"><div class="flex items-center gap-3"><img${ssrRenderAttr("src", language.flag)}${ssrRenderAttr("alt", language.name)} class="h-5 w-5 rounded-sm"><span>${ssrInterpolate(language.name)}</span></div>`);
          if (selectedLanguage.value.code === language.code) {
            _push(ssrRenderComponent(unref(Check), { class: "h-4 w-4 text-green-400" }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ms/selecteLanguage.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_Input = _sfc_main$1$1;
  const _component_Button = _sfc_main$e;
  const _component_Ticket = Ticket;
  const _component_User = User;
  const _component_Bell = Bell;
  const _component_MsSelecteLanguage = _sfc_main$d;
  const _component_Search = Search;
  _push(`<!--[--><div class="hidden md:flex justify-between items-center w-[100%]">`);
  _push(ssrRenderComponent(_component_Input, {
    type: "text",
    placeholder: "Search",
    class: "max-w-[400px] !bg-[#2A2A2F]"
  }, null, _parent));
  _push(`<div class="flex items-center gap-x-8"><img src="https://www.legend.com.kh/_ipx/s_117x44/legend-cinema-logo.png" alt="logo">`);
  _push(ssrRenderComponent(_component_Button, {
    variant: "outline",
    class: "border-1 !border-gray-500"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Ticket, null, null, _parent2, _scopeId));
        _push2(` ${ssrInterpolate(_ctx.$t("ticket"))}`);
      } else {
        return [
          createVNode(_component_Ticket),
          createTextVNode(" " + toDisplayString(_ctx.$t("ticket")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Button, {
    variant: "outline",
    class: "border-1 !border-gray-500"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_User, null, null, _parent2, _scopeId));
        _push2(` ${ssrInterpolate(_ctx.$t("join_now"))}`);
      } else {
        return [
          createVNode(_component_User),
          createTextVNode(" " + toDisplayString(_ctx.$t("join_now")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Button, {
    variant: "outline",
    class: "border-1 !border-gray-500"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Bell, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Bell)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_MsSelecteLanguage, null, null, _parent));
  _push(`</div></div><div class="h-[50px] flex justify-between items-center w-full md:hidden"><div class="flex gap-2 items-center h-full"><div class="h-[33px] bg-gray-900 rounded-full flex items-center justify-center w-[33px]">`);
  _push(ssrRenderComponent(_component_Ticket, { class: "w-[20px] h-[20px]" }, null, _parent));
  _push(`</div><div class="h-[33px] bg-gray-900 rounded-full flex items-center justify-center w-[33px]">`);
  _push(ssrRenderComponent(_component_Bell, { class: "w-[20px] h-[20px]" }, null, _parent));
  _push(`</div></div><img src="https://www.legend.com.kh/_ipx/s_117x44/legend-cinema-logo.png" alt="logo" class="w-[100px] h-[30px]"><div class="flex items-center gap-x-1">`);
  _push(ssrRenderComponent(_component_MsSelecteLanguage, null, null, _parent));
  _push(`<div class="h-[33px] bg-gray-900 rounded-full flex items-center justify-center w-[33px]">`);
  _push(ssrRenderComponent(_component_Search, { class: "w-[20px] h-[20px]" }, null, _parent));
  _push(`</div></div></div><!--]-->`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ms/headerNavbar.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const { localePath } = useI18nCustom();
    const { isActive } = useActiveRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_House = House;
      const _component_MapPin = MapPin;
      const _component_Tags = Tags;
      const _component_Popcorn = Popcorn;
      _push(`<!--[--><div class="hidden md:flex container justify-between"><div class="flex gap-x-5">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/"),
        class: ["link", { "active-link": unref(isActive)("/") }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_House, null, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(_ctx.$t("home"))}`);
          } else {
            return [
              createVNode(_component_House),
              createTextVNode(" " + toDisplayString(_ctx.$t("home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/cinemas"),
        class: ["link", { "active-link": unref(isActive)("/cinemas") }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_MapPin, null, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(_ctx.$t("cinemas"))}`);
          } else {
            return [
              createVNode(_component_MapPin),
              createTextVNode(" " + toDisplayString(_ctx.$t("cinemas")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/promotion"),
        class: ["link", { "active-link": unref(isActive)("/promotion") }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Tags, null, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(_ctx.$t("offers"))}`);
          } else {
            return [
              createVNode(_component_Tags),
              createTextVNode(" " + toDisplayString(_ctx.$t("offers")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/food-and-drinks"),
        class: ["link", { "active-link": unref(isActive)("/food-and-drinks") }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Popcorn, null, null, _parent2, _scopeId));
            _push2(` ${ssrInterpolate(_ctx.$t("food_and_drinks"))}`);
          } else {
            return [
              createVNode(_component_Popcorn),
              createTextVNode(" " + toDisplayString(_ctx.$t("food_and_drinks")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex md:hidden container justify-between fixed bottom-0 bg-black/80 h-[50px] left-0 z-[999]"><div class="flex w-full justify-around">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/"),
        class: ["link", { "active-link": unref(isActive)("/") }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_House, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_House)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/cinemas"),
        class: ["link", { "active-link": unref(isActive)("/cinemas") }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_MapPin, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_MapPin)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/promotion"),
        class: ["link", { "active-link": unref(isActive)("/promotion") }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Tags, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Tags)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(localePath)("/food-and-drinks"),
        class: ["link", { "active-link": unref(isActive)("/food-and-drinks") }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Popcorn, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Popcorn)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ms/navbar.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "Separator",
  __ssrInlineRender: true,
  props: {
    orientation: { default: "horizontal" },
    decorative: { type: Boolean, default: true },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Separator), mergeProps({ "data-slot": "separator-root" }, unref(delegatedProps), {
        class: unref(cn)(
          `bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px`,
          props.class
        )
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/separator/Separator.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div class="hidden md:flex absolute w-full top-[0] left-0 h-[400px] md:h-[600px] z-[1] items-center justify-center bg-cover bg-center transition-all duration-500 bg-no-repeat" style="${ssrRenderStyle({ backgroundImage: `url('https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/b7918c9b-3fa8-4e08-ac21-b15e0ecd2979.jpeg')` })}"></div><div class="hidden md:flex absolute w-full top-[0] left-0 h-[400px] md:h-[600px] z-[2] inset-0.5 bg-black/30 backdrop-blur-sm items-center justify-center"></div><!--]-->`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ms/overlayBlur.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "membershipSwiper",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    ref(0);
    ref([
      { url: "https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/5fc3097e-92d6-40a9-ad08-57da9cf79ece.jpeg", alt: "Image 1" },
      { url: "https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/bab652d6-8f39-42d8-98c5-2661fc0a3bdd.jpeg", alt: "Image 2" },
      { url: "https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/0ee58116-137c-4301-a9dd-875bb7d74bd9.jpeg", alt: "Image 3" },
      { url: "https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/84fe69e2-26bf-44a5-89c6-d5b31ad603ad.jpeg", alt: "Image 4" },
      { url: "https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/b7918c9b-3fa8-4e08-ac21-b15e0ecd2979.jpeg", alt: "Image 5" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MsOverlayBlur = __nuxt_component_0;
      const _component_ClientOnly = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-screen h-[220px] md:h-[630px] lg:h-[600px] flex items-center justify-center md:pt-[80] lg:pt-[0]" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_MsOverlayBlur, null, null, _parent));
      _push(`<div class="w-full max-w-4xl mx-auto px-4 z-5">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ms/membershipSwiper.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const TiktokIcon = {
      template: `
    <svg viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  `
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "py-12" }, _attrs))} data-v-8081fe8b><div class="max-w-7xl mx-auto px-6" data-v-8081fe8b><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8" data-v-8081fe8b><div class="space-y-4" data-v-8081fe8b><h3 class="text-xl font-semibold mb-6" data-v-8081fe8b>Company</h3><ul class="space-y-3" data-v-8081fe8b><li data-v-8081fe8b><a href="#" class="text-gray-300 hover:text-white transition-colors duration-200" data-v-8081fe8b> About Us </a></li><li data-v-8081fe8b><a href="#" class="text-gray-300 hover:text-white transition-colors duration-200" data-v-8081fe8b> Contact Us </a></li><li data-v-8081fe8b><a href="#" class="text-gray-300 hover:text-white transition-colors duration-200" data-v-8081fe8b> Cinemas </a></li></ul></div><div class="space-y-4" data-v-8081fe8b><h3 class="text-xl font-semibold mb-6" data-v-8081fe8b>More</h3><ul class="space-y-3" data-v-8081fe8b><li data-v-8081fe8b><a href="#" class="text-gray-300 hover:text-white transition-colors duration-200" data-v-8081fe8b> Promotions </a></li><li data-v-8081fe8b><a href="#" class="text-gray-300 hover:text-white transition-colors duration-200" data-v-8081fe8b> News &amp; Activity </a></li><li data-v-8081fe8b><a href="#" class="text-gray-300 hover:text-white transition-colors duration-200" data-v-8081fe8b> My Ticket </a></li><li data-v-8081fe8b><a href="#" class="text-gray-300 hover:text-white transition-colors duration-200" data-v-8081fe8b> Terms &amp; Conditions </a></li><li data-v-8081fe8b><a href="#" class="text-gray-300 hover:text-white transition-colors duration-200" data-v-8081fe8b> Privacy &amp; Policy </a></li></ul></div><div class="space-y-4" data-v-8081fe8b><h3 class="text-xl font-semibold mb-6" data-v-8081fe8b>Download Our App</h3><div class="flex space-x-4" data-v-8081fe8b><a href="#" class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200" aria-label="Download on Google Play" data-v-8081fe8b>`);
      _push(ssrRenderComponent(unref(PlayIcon), { class: "w-6 h-6 text-white" }, null, _parent));
      _push(`</a><a href="#" class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200" aria-label="Download on App Store" data-v-8081fe8b>`);
      _push(ssrRenderComponent(unref(AppleIcon), { class: "w-6 h-6 text-white" }, null, _parent));
      _push(`</a></div></div><div class="space-y-4" data-v-8081fe8b><h3 class="text-xl font-semibold mb-6" data-v-8081fe8b>Follow Our Social Media</h3><div class="flex flex-wrap gap-3" data-v-8081fe8b><a href="#" class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200" aria-label="Follow us on Facebook" data-v-8081fe8b>`);
      _push(ssrRenderComponent(unref(FacebookIcon), { class: "w-5 h-5 text-white" }, null, _parent));
      _push(`</a><a href="#" class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-200" aria-label="Follow us on Instagram" data-v-8081fe8b>`);
      _push(ssrRenderComponent(unref(InstagramIcon), { class: "w-5 h-5 text-white" }, null, _parent));
      _push(`</a><a href="#" class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200" aria-label="Follow us on YouTube" data-v-8081fe8b>`);
      _push(ssrRenderComponent(unref(YoutubeIcon), { class: "w-5 h-5 text-white" }, null, _parent));
      _push(`</a><a href="#" class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-black transition-colors duration-200" aria-label="Follow us on TikTok" data-v-8081fe8b>`);
      _push(ssrRenderComponent(TiktokIcon, { class: "w-5 h-5 text-white" }, null, _parent));
      _push(`</a><a href="#" class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-200" aria-label="Follow us on Telegram" data-v-8081fe8b>`);
      _push(ssrRenderComponent(unref(SendIcon), { class: "w-5 h-5 text-white" }, null, _parent));
      _push(`</a></div></div></div><div class="border-t border-gray-800 pt-8" data-v-8081fe8b><div class="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0" data-v-8081fe8b><div data-v-8081fe8b><h4 class="text-lg font-semibold mb-4" data-v-8081fe8b>Payment</h4><div class="flex items-center space-x-6" data-v-8081fe8b><div class="flex items-center space-x-2" data-v-8081fe8b><div class="bg-blue-600 px-3 py-1 rounded text-sm font-bold" data-v-8081fe8b>ABA</div><span class="text-blue-400 font-semibold" data-v-8081fe8b>PAYWAY</span></div><div class="bg-blue-600 px-4 py-2 rounded text-white font-bold text-lg" data-v-8081fe8b> VISA </div><div class="flex items-center space-x-1" data-v-8081fe8b><div class="w-8 h-8 bg-red-500 rounded-full opacity-80" data-v-8081fe8b></div><div class="w-8 h-8 bg-yellow-500 rounded-full opacity-80 -ml-4" data-v-8081fe8b></div></div></div></div><div class="text-center lg:text-right" data-v-8081fe8b><p class="text-gray-400" data-v-8081fe8b>All right reserved \xA9 2023</p></div></div></div></div></footer>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ms/Footer.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-8081fe8b"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenu",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuRoot), mergeProps({ "data-slot": "dropdown-menu" }, unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenu.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: { default: 4 },
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    positionStrategy: {},
    updatePositionStrategy: {},
    disableUpdateOnLayoutShift: { type: Boolean },
    prioritizePosition: { type: Boolean },
    reference: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(DropdownMenuContent), mergeProps({ "data-slot": "dropdown-menu-content" }, unref(forwarded), {
              class: unref(cn)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", props.class)
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(DropdownMenuContent), mergeProps({ "data-slot": "dropdown-menu-content" }, unref(forwarded), {
                class: unref(cn)("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--reka-dropdown-menu-content-available-height) min-w-[8rem] origin-(--reka-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", props.class)
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 16, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuContent.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuItem",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean },
    variant: { default: "default" }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "inset", "variant", "class");
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuItem), mergeProps({
        "data-slot": "dropdown-menu-item",
        "data-inset": _ctx.inset ? "" : void 0,
        "data-variant": _ctx.variant
      }, unref(forwardedProps), {
        class: unref(cn)(`focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive-foreground data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/40 data-[variant=destructive]:focus:text-destructive-foreground data-[variant=destructive]:*:[svg]:!text-destructive-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`, props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuItem.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuTrigger",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    const forwardedProps = useForwardProps(props);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuTrigger), mergeProps({ "data-slot": "dropdown-menu-trigger" }, unref(forwardedProps), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuTrigger.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const useColorMode = () => {
  return useState("color-mode").value;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ThemeToggle",
  __ssrInlineRender: true,
  setup(__props) {
    const colorMode = useColorMode();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed bottom-0 left-0" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(_sfc_main$6), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(_sfc_main$3), { "as-child": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$e), {
                    variant: "outline",
                    size: "icon"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (unref(colorMode).preference === "light") {
                          _push4(ssrRenderComponent(unref(Sun), { class: "h-5 w-5" }, null, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(unref(Moon), { class: "h-5 w-5" }, null, _parent4, _scopeId3));
                        }
                        _push4(`<span class="sr-only"${_scopeId3}>Toggle theme</span>`);
                      } else {
                        return [
                          unref(colorMode).preference === "light" ? (openBlock(), createBlock(unref(Sun), {
                            key: 0,
                            class: "h-5 w-5"
                          })) : (openBlock(), createBlock(unref(Moon), {
                            key: 1,
                            class: "h-5 w-5"
                          })),
                          createVNode("span", { class: "sr-only" }, "Toggle theme")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$e), {
                      variant: "outline",
                      size: "icon"
                    }, {
                      default: withCtx(() => [
                        unref(colorMode).preference === "light" ? (openBlock(), createBlock(unref(Sun), {
                          key: 0,
                          class: "h-5 w-5"
                        })) : (openBlock(), createBlock(unref(Moon), {
                          key: 1,
                          class: "h-5 w-5"
                        })),
                        createVNode("span", { class: "sr-only" }, "Toggle theme")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(_sfc_main$5), { align: "end" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(_sfc_main$4), {
                    onClick: ($event) => unref(colorMode).preference = "light"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Light `);
                      } else {
                        return [
                          createTextVNode(" Light ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$4), {
                    onClick: ($event) => unref(colorMode).preference = "dark"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Dark `);
                      } else {
                        return [
                          createTextVNode(" Dark ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(_sfc_main$4), {
                    onClick: ($event) => unref(colorMode).preference = "system"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` System `);
                      } else {
                        return [
                          createTextVNode(" System ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(_sfc_main$4), {
                      onClick: ($event) => unref(colorMode).preference = "light"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Light ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(unref(_sfc_main$4), {
                      onClick: ($event) => unref(colorMode).preference = "dark"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Dark ")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(unref(_sfc_main$4), {
                      onClick: ($event) => unref(colorMode).preference = "system"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" System ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(_sfc_main$3), { "as-child": "" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$e), {
                    variant: "outline",
                    size: "icon"
                  }, {
                    default: withCtx(() => [
                      unref(colorMode).preference === "light" ? (openBlock(), createBlock(unref(Sun), {
                        key: 0,
                        class: "h-5 w-5"
                      })) : (openBlock(), createBlock(unref(Moon), {
                        key: 1,
                        class: "h-5 w-5"
                      })),
                      createVNode("span", { class: "sr-only" }, "Toggle theme")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(_sfc_main$5), { align: "end" }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$4), {
                    onClick: ($event) => unref(colorMode).preference = "light"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Light ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(unref(_sfc_main$4), {
                    onClick: ($event) => unref(colorMode).preference = "dark"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Dark ")
                    ]),
                    _: 1
                  }, 8, ["onClick"]),
                  createVNode(unref(_sfc_main$4), {
                    onClick: ($event) => unref(colorMode).preference = "system"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" System ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ThemeToggle.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "hidden md:flex fixed w-screen top-[0] left-0 h-[120px] z-[2] inset-0.5 bg-black/30 backdrop-blur-sm items-center justify-center" }, _attrs))}></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ms/overlayBlurNavBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const OverlayBlurNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MsHeaderNavbar = __nuxt_component_0$1;
      const _component_MsNavbar = _sfc_main$b;
      const _component_Separator = _sfc_main$a;
      const _component_MsMembershipSwiper = _sfc_main$8;
      const _component_MsFooter = __nuxt_component_4;
      const _component_ThemeToggle = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_MsHeaderNavbar, null, null, _parent));
      _push(ssrRenderComponent(_component_MsNavbar, null, null, _parent));
      _push(`<div class="hidden md:flex items-center flex-col z-[10] fixed w-screen bg-[#211B1F]/50 -mx-auto /50 justify-center"><div class="container mx-auto px-2 py-5">`);
      _push(ssrRenderComponent(_component_MsHeaderNavbar, null, null, _parent));
      _push(ssrRenderComponent(_component_Separator, { class: "my-5 bg-[#3A301F]" }, null, _parent));
      _push(ssrRenderComponent(_component_MsNavbar, null, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(OverlayBlurNavBar, null, null, _parent));
      _push(ssrRenderComponent(_component_MsMembershipSwiper, null, null, _parent));
      _push(`<div class="container mx-auto overflow-hidden">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_MsFooter, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ThemeToggle, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-Bnj-g9Lp.mjs.map
