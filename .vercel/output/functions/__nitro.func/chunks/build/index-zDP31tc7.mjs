import { mergeProps, defineComponent, ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "listDateShow",
  __ssrInlineRender: true,
  setup(__props) {
    const listDates = ref([
      {
        id: 0,
        day: "Today",
        th: 18,
        month: "jun"
      },
      {
        id: 1,
        day: "Mon",
        th: 19,
        month: "jun"
      },
      {
        id: 2,
        day: "Tue",
        th: 20,
        month: "jun"
      },
      {
        id: 3,
        day: "Wen",
        th: 21,
        month: "jun"
      },
      {
        id: 4,
        day: "Thu",
        th: 22,
        month: "jun"
      },
      {
        id: 5,
        day: "Fri",
        th: 23,
        month: "jun"
      },
      {
        id: 6,
        day: "Sat",
        th: 24,
        month: "jun"
      },
      {
        id: 7,
        day: "Sun",
        th: 24,
        month: "jun"
      }
    ]);
    const selected = ref(listDates.value[0]);
    const scrollContainer = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "scrollContainer",
        ref: scrollContainer,
        class: "flex w-full mt-[20px] gap-x-3 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing"
      }, _attrs))}><!--[-->`);
      ssrRenderList(unref(listDates), (date) => {
        _push(`<div class="${ssrRenderClass([date === unref(selected) ? "border-red-500" : "border-gray-500", "min-w-[60px] h-[80px] md:min-w-[200px] md:h-[100px] border-2 rounded-md"])}"><div class="flex flex-col justify-between items-center h-full py-2 text-sm md:text-lg text-gray-400"><p>${ssrInterpolate(date.day)}</p><p class="font-bold text-white">${ssrInterpolate(date.th)}</p><p>${ssrInterpolate(date.month)}</p></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ms/listDateShow.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "listMovies",
  __ssrInlineRender: true,
  setup(__props) {
    const movies = ref([
      {
        id: 1,
        title: "Pernikahan Arwah",
        poster: "https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001959",
        releaseDate: "20 Jun 2025",
        rating: "R18",
        hasAdvanceTicket: true
      },
      {
        id: 2,
        title: "Elio",
        poster: "https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001854",
        releaseDate: "19 Jun 2025",
        rating: "TBC",
        hasAdvanceTicket: true
      },
      {
        id: 3,
        title: "28 Years Later",
        poster: "https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001855",
        releaseDate: "19 Jun 2025",
        rating: "R18",
        hasAdvanceTicket: true
      },
      {
        id: 4,
        title: "Witch Returns, The",
        poster: "https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001903",
        releaseDate: "18 Jun 2025",
        rating: "G",
        hasAdvanceTicket: false
      },
      {
        id: 5,
        title: "Soul Lantern, The",
        poster: "https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001947",
        releaseDate: "13 Jun 2025",
        rating: "NC15",
        hasAdvanceTicket: false
      },
      {
        id: 6,
        title: "How to Train Your Dragon",
        poster: "https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001923",
        releaseDate: "12 Jun 2025",
        rating: "G",
        hasAdvanceTicket: false
      },
      {
        id: 7,
        title: "Guardian, The",
        poster: "https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001902",
        releaseDate: "12 Jun 2025",
        rating: "NC15",
        hasAdvanceTicket: false
      },
      {
        id: 8,
        title: "Ballerina",
        poster: "https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001917",
        releaseDate: "12 Jun 2025",
        rating: "R18",
        hasAdvanceTicket: false
      }
    ]);
    const getRatingClass = (rating) => {
      const ratingClasses = {
        "R18": "bg-red-600 text-white",
        "TBC": "bg-yellow-600 text-white",
        "G": "bg-green-600 text-white",
        "NC15": "bg-orange-600 text-white",
        "PG": "bg-blue-600 text-white"
      };
      return ratingClasses[rating] || "bg-gray-600 text-white";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-900 p-6" }, _attrs))} data-v-72c0db1c><div class="max-w-7xl mx-auto" data-v-72c0db1c><div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-v-72c0db1c><!--[-->`);
      ssrRenderList(movies.value, (movie) => {
        _push(`<div class="group relative bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105" data-v-72c0db1c><div class="relative aspect-[3/4] overflow-hidden" data-v-72c0db1c><img${ssrRenderAttr("src", movie.poster + "?height=600&width=400")}${ssrRenderAttr("alt", movie.title)} class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" data-v-72c0db1c>`);
        if (movie.hasAdvanceTicket) {
          _push(`<div class="absolute top-0 left-0 bg-red-600 text-white px-3 py-1 text-xs font-semibold transform -rotate-45 -translate-x-9 md:-translate-x-3 translate-y-6 shadow-lg w-[120px]" style="${ssrRenderStyle({ "text-align": "center" })}" data-v-72c0db1c> Advance Ticket </div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="absolute bottom-3 right-3" data-v-72c0db1c><span class="${ssrRenderClass([getRatingClass(movie.rating), "px-2 py-1 text-xs font-bold rounded"])}" data-v-72c0db1c>${ssrInterpolate(movie.rating)}</span></div></div><div class="p-4 space-y-2" data-v-72c0db1c><div class="flex items-center justify-between" data-v-72c0db1c><span class="text-gray-400 text-sm" data-v-72c0db1c>${ssrInterpolate(movie.releaseDate)}</span></div><h3 class="text-white font-semibold text-sm md:text-lg leading-tight line-clamp-2" data-v-72c0db1c>${ssrInterpolate(movie.title)}</h3></div><div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100" data-v-72c0db1c><button class="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200" data-v-72c0db1c> Book Now </button></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ms/listMovies.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-72c0db1c"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_MsListDateShow = _sfc_main$2;
  const _component_MsListMovies = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[20px] md:px-0" }, _attrs))}><div class="flex items-center gap-x-5 font-medium text-sm md:text-2xl lg:text-3xl"><p>${ssrInterpolate(_ctx.$t("now_showing"))}</p> | <p class="text-gray-600">${ssrInterpolate(_ctx.$t("coming_soon"))}</p></div>`);
  _push(ssrRenderComponent(_component_MsListDateShow, null, null, _parent));
  _push(ssrRenderComponent(_component_MsListMovies, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-zDP31tc7.mjs.map
