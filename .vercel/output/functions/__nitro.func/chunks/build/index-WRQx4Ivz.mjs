import { defineComponent, resolveComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { defineStore } from 'pinia';

const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    }
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const counter = useCounterStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CNButton = resolveComponent("CNButton");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))}><h1 class="text-2xl font-bold">Counter: ${ssrInterpolate(unref(counter).count)}</h1><button class="bg-blue-500 text-white px-4 py-2 rounded">Increment</button><button class="bg-blue-500 text-white px-4 py-2 rounded ml-2">Decrement</button>`);
      _push(ssrRenderComponent(_component_CNButton, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`dsf`);
          } else {
            return [
              createTextVNode("dsf")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-WRQx4Ivz.mjs.map
