export const useTheme = () => {
    const theme = useState<'light' | 'dark'>('theme', () => 'light') // fallback default

    const detectInitialTheme = () => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme')
            if (saved === 'light' || saved === 'dark') return saved
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
        }
        return 'light'
    }

    const setTheme = (val: 'light' | 'dark') => {
        theme.value = val
        if (typeof window !== 'undefined') {
            document.documentElement.classList.toggle('dark', val === 'dark')
            localStorage.setItem('theme', val)
        }
    }

    // Hydrate on client
    if (process.client) {
        onMounted(() => {
            const initial = detectInitialTheme()
            theme.value = initial
            document.documentElement.classList.toggle('dark', initial === 'dark')
        })

        watch(theme, (val) => {
            document.documentElement.classList.toggle('dark', val === 'dark')
        }, { immediate: true })
    }

    return {
        theme,
        setTheme,
        toggleTheme: () => setTheme(theme.value === 'dark' ? 'light' : 'dark'),
    }
}
