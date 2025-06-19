import {useRoute} from "nuxt/app";

export const useActiveRoute = () => {
    const { localePath } = useI18nCustom()
    const route = useRoute()
    const isActive = (path: string) => route.fullPath === localePath(path)
    return {isActive}
}