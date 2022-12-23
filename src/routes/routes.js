import config from '~/config';
import { Suspense, lazy } from 'react';

// Layouts
import { HeaderOnly } from '~/layouts';
import { ProfileLayout } from '~/layouts';
import { SetupShopLayout } from '~/layouts';


// const   HeaderOnly  =lazy(()=>import( '~/layouts/DefaultLayout/DefaultLayout'));
// const   ProfileLayout  =lazy(()=>import( '~/layouts/ProfileLayout/ProfileLayout'));
// const   SetupShopLayout  =lazy(()=>import( '~/layouts/SetupShopLayout/SetupShopLayout'));

// Pages

const  Cart =lazy(()=>import( '~/pages/Cart/Cart'));

// const  Upload =lazy(()=>import( '~/pages/Upload'));
const  Search =lazy(()=>import( '~/pages/Search/Search'));
const  Shop =lazy(()=>import( '~/pages/Shop/Shop'));
const  Home  =lazy(()=>import( '~/pages/Home/Home'));
const  ForgotPassword =lazy(()=>import( '~/pages/ForgotPassword/ForgotPassword'));
const  ResetPassword =lazy(()=>import( '~/pages/ResetPassword/ResetPassword'));
const  Detail =lazy(()=>import( '~/pages/Detail/Detail'));
const  Account =lazy(()=>import( '~/pages/Profile/Account/Account'));
const  PublicProfile =lazy(()=>import( '~/pages/Profile/PublicProfile/PublicProfile'));
const  CreditCards =lazy(()=>import( '~/pages/Profile/CreditCards/CreditCards'));
const  Addresses =lazy(()=>import( '~/pages/Profile/Addresses/Addresses'));
const  Billing =lazy(()=>import( '~/pages/SetupShop/Billing/Billing'));
const  Listings =lazy(()=>import( '~/pages/SetupShop/Listings/Listings'));
const  Reference =lazy(()=>import( '~/pages/SetupShop/Reference/Reference'));
const  NotFound =lazy(()=>import( '~/pages/NotFound/NotFound'));
const  Shipping =lazy(()=>import( '~/pages/CheckOut/Shipping/Shipping'));
const  Payment =lazy(()=>import( '~/pages/CheckOut/Payment/Payment'));
const  Review =lazy(()=>import( '~/pages/CheckOut/Review/Review'));
const  Wallet =lazy(()=>import( '~/pages/Wallet/Wallet'));
const  Purchases =lazy(()=>import( '~/pages/Purchases/Purchases'));
const CompletedPayment = lazy(()=>import( '~/pages/CheckOut/CompletedPayment/CompletedPayment'))
// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.homeid, component: Home },


    { path: config.routes.shop, component: Shop },
    { path: config.routes.forgotpassword, component: ForgotPassword },
    { path: config.routes.resetpassword, component: ResetPassword },
    { path: config.routes.detail, component: Detail },
    { path: config.routes.search, component: Search },
    { path: config.routes.notfound, component: NotFound, layout: null },
];

const privateRoutes = [
    { path: config.routes.cart, component: Cart },
    { path: config.routes.completedpayment, component: CompletedPayment },


    //SetupShop
    { path: config.routes.billing, component: Billing, layout: SetupShopLayout },
    { path: config.routes.listings, component: Listings, layout: SetupShopLayout },
    { path: config.routes.reference, component: Reference, layout: SetupShopLayout },

    //
    // Profile
    { path: config.routes.account, component: Account, layout: ProfileLayout },
    { path: config.routes.publicprofile, component: PublicProfile, layout: ProfileLayout },
    { path: config.routes.creditcards, component: CreditCards, layout: ProfileLayout },
    { path: config.routes.addresses, component: Addresses, layout: ProfileLayout },

    //

    // Checkout
    { path: config.routes.shipping, component: Shipping, layout: SetupShopLayout },
    { path: config.routes.payment, component: Payment, layout: SetupShopLayout },
    { path: config.routes.review, component: Review, layout: SetupShopLayout },
    //
    { path: config.routes.purchases, component: Purchases },
    { path: config.routes.wallet, component: Wallet },


];

export { publicRoutes, privateRoutes };
