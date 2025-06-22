export default defineNuxtRouteMiddleware((to, from) => {
    console.log('Auth middleware triggered for:', to.path);

    function isAuthenticated(): boolean {
        return false; // simulate unauthenticated user
    }

    // Match any path that is exactly '/cinemas' or starts with '/cinemas/'
    const protectedRouteRegex = /^\/cinemas(\/|$)/;

    if (protectedRouteRegex.test(to.path) && !isAuthenticated()) {
        console.log('Navigation blocked to:', to.path);
        // Redirect to login page or abort navigation
        // return abortNavigation(); // silent block
        return navigateTo('/login'); // recommended: redirect user to login
    }
});
