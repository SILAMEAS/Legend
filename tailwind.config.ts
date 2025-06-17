import type { Config } from 'tailwindcss'

export default <Config>{
    darkMode: 'class', // Enables dark mode by toggling the 'dark' class on <html>
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './app.vue',
        './assets/css/**/*.css'
    ],
    theme: {
        extend: {
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                border: 'hsl(var(--border))',
                // Add more shadcn-vue variables as needed
            }
        }
    },
    plugins: []
}