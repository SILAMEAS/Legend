
// ---cut---
export default defineNuxtRouteMiddleware((to, from) => {
    function isAuthenticated(): boolean {
        return false // simulate unauthenticated
    }

    const protectedRoutes = ['/posts']

    if (protectedRoutes.includes(to.path) && !isAuthenticated()) {
        // This will stop Nuxt from continuing the navigation
        return abortNavigation()
    }
})
