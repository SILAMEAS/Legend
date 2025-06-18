export const useI18nCustom = () => {
    const { locales, setLocale, locale } = useI18n()
    const localePath = useLocalePath()
    const switchLocalePath = useSwitchLocalePath()

    return {
        locales,
        locale,
        setLocale,
        localePath,
        switchLocalePath,
    }
}
