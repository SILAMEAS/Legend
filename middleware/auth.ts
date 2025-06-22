export default defineNuxtRouteMiddleware((to, from) => {
    console.log('[auth middleware] Running for path:', to.path);

    function isAuthenticated() {
        return false; // simulate unauthenticated
    }

    // Match paths with locale prefix like /kh/cinemas or /en/cinemas
    const protectedRouteRegex = /^\/[^\/]+\/cinemas(\/|$)/;

    if (protectedRouteRegex.test(to.path) && !isAuthenticated()) {
        console.log('[auth middleware] Blocking access to:', to.path);
        return navigateTo('/en/login'); // redirect to login page
    }
});
