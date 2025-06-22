const regexUrl = (key: string) => {
    return new RegExp(`^\\/[^\\/]+\\/${key}(\\/|$)`);
};
export default defineNuxtRouteMiddleware((to, from) => {
    console.log('[auth middleware] Running for path:', to.path);

    function isAuthenticated() {
        return false; // simulate unauthenticated
    }

    const protectedRoutes = ['ds'];

    const protectedRegexList = protectedRoutes.map(key => regexUrl(key));

    if (protectedRegexList.some(regex => regex.test(to.path)) && !isAuthenticated()) {
        const locale = to.path.split('/')[1] || 'en';
        return navigateTo(`/${locale}/login`);
    }
});
