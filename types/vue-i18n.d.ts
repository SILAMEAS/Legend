// types/vue-i18n.d.ts
import 'vue-i18n'

import en from '@/i18n/locales/kh.json';

type LanguageType = keyof typeof en;

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $t: (key: LanguageType, ...args: any[]) => string
    }
}
