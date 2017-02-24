export default [
    // Landing Page.
    {
        path: '/',
        name: 'landing-page',
        component: require('components/LandingPageView')
    },

    // Login Page.
    {
        path: '/login',
        name: 'login-page',
        component: require('components/LoginPage')
    },

    // Fall back.
    {
        path: '*',
        redirect: '/'
    }
]
