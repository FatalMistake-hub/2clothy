const routes = {

    home: '/',
    homeid: '/:id',
    cart: '/cart',
    category: '/category',
    // Profile
    profile: '/@:nickname',
    profile: '/account',
    account:'/account/@:nickname',
    publicprofile:'/publicprofile/@:nickname',
    addresses:'/addresses/@:nickname',
    creditcards:'/creditcards/@:nickname',

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

    notfound: '*',
};

export default routes;
