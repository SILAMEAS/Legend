// middleware/auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
    function isAuthenticated() {
        return false; // simulate unauthenticated
    }

    console.log('Auth middleware running for:', to.path);

    const protectedRoutes = [/\/cinemas(\/|$)/];

    if (protectedRoutes.some(regex => regex.test(to.path)) && !isAuthenticated()) {
        console.log('Blocked navigation to:', to.path);
        return navigateTo('/login') // redirect user to login page
    }
});
