import { defineComponent, ref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ImageUploader",
  __ssrInlineRender: true,
  setup(__props) {
    const imageUrl = ref("");
    const errorMsg = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><input type="file">`);
      if (imageUrl.value) {
        _push(`<p>\u2705 Uploaded: <a${ssrRenderAttr("href", imageUrl.value)} target="_blank">${ssrInterpolate(imageUrl.value)}</a></p>`);
      } else if (errorMsg.value) {
        _push(`<p style="${ssrRenderStyle({ "color": "red" })}">${ssrInterpolate(errorMsg.value)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ms/ImageUploader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_MsImageUploader = _sfc_main$1;
      _push(ssrRenderComponent(_component_MsImageUploader, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/movie/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D0cegl2k.mjs.map
