import { defineComponent, withAsyncContext, unref, ref, useSSRContext } from 'vue';
import { ssrRenderList, ssrInterpolate } from 'vue/server-renderer';

const useApiMutation = () => {
  const loading = ref(false);
  const error = ref(null);
  const data = ref(null);
  const mutate = async (url, method, payload) => {
    loading.value = true;
    error.value = null;
    try {
      const options = { method };
      if (method !== "GET" && payload) {
        options.body = payload;
      }
      const response = await $fetch(url, options);
      data.value = response;
      return response;
    } catch (err) {
      error.value = err;
      console.error(`API ${method} error:`, err);
      throw err;
    } finally {
      loading.value = false;
    }
  };
  return {
    mutate,
    loading,
    error,
    data
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { mutate: getUser } = useApiMutation();
    const data = ([__temp, __restore] = withAsyncContext(() => getUser("/api/user", "GET")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><p>List User</p>`);
      if (unref(data).length == 0) {
        _push(`<p>No users found. </p>`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(unref(data), (user) => {
          _push(`<p>${ssrInterpolate(user.email)} ${ssrInterpolate(user.name)}</p>`);
        });
        _push(`<!--]-->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BWcdOeOo.mjs.map
