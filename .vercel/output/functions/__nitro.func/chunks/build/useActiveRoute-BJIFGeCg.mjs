import { h } from 'vue';
import { m as useI18n, n as useLocalePath, o as useSwitchLocalePath, a as useRoute } from './server.mjs';

/**
 * @license lucide-vue-next v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
/**
 * @license lucide-vue-next v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
/**
 * @license lucide-vue-next v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Icon = ({ size, strokeWidth = 2, absoluteStrokeWidth, color, iconNode, name, class: classes, ...props }, { slots }) => {
  return h(
    "svg",
    {
      ...defaultAttributes,
      width: size || defaultAttributes.width,
      height: size || defaultAttributes.height,
      stroke: color || defaultAttributes.stroke,
      "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      class: mergeClasses(
        "lucide",
        ...name ? [`lucide-${toKebabCase(toPascalCase(name))}-icon`, `lucide-${toKebabCase(name)}`] : ["lucide-icon"]
      ),
      ...props
    },
    [...iconNode.map((child) => h(...child)), ...slots.default ? [slots.default()] : []]
  );
};
/**
 * @license lucide-vue-next v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const createLucideIcon = (iconName, iconNode) => (props, { slots }) => h(
  Icon,
  {
    ...props,
    iconNode,
    name: iconName
  },
  slots
);
/**
 * @license lucide-vue-next v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const User = createLucideIcon("user", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
]);
const useI18nCustom = () => {
  const { locales, setLocale, locale } = useI18n();
  const localePath = useLocalePath();
  const switchLocalePath = useSwitchLocalePath();
  return {
    locales,
    locale,
    setLocale,
    localePath,
    switchLocalePath
  };
};
const useActiveRoute = () => {
  const { localePath } = useI18nCustom();
  const route = useRoute();
  const isActive = (path) => route.fullPath === localePath(path);
  return { isActive };
};

export { User as U, useActiveRoute as a, createLucideIcon as c, useI18nCustom as u };
//# sourceMappingURL=useActiveRoute-BJIFGeCg.mjs.map
