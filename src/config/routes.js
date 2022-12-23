const routes = {
    home: '/',
    homeid: '/:id',
    cart: '/cart',
    completedpayment: '/completedpayment',
    category: '/category',
    // Profile
    profile: '',
    // profile: '/account',
    account: '/account',
    publicprofile: '/publicprofile',
    addresses: '/addresses',
    creditcards: '/creditcards',

    //

    search: '/search/:id',

    //SetupShop
    reference: '/reference',
    listings: '/listings',
    billing: '/billing',
    //
    //Checkout
    shipping: '/shipping',
    payment: '/payment',
    review: '/review',
    //

    shop: '/shop/:id',
    favorites: '/favorites',
    forgotpassword: '/forgotpassword',
    resetpassword: '/resetpassword',
    detail: '/detail/:id',

    purchases: '/purchases',
    wallet: '/wallet',
    notfound: '*',
};

export default routes;
