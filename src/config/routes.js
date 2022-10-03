const routes = {

    home: '/',
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
    upload: '/upload',
    search: '/search',
    shop: '/shop',
    favorites: '/favorites',
    forgotpassword: '/forgotpassword',
    resetpassword: '/resetpassword',
    detail: '/detail',
};

export default routes;
