import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';
import { ProfileLayout } from '~/layouts'

// Pages

import Cart from '~/pages/Cart';
import Category from '~/pages/Category';
import Profile from '~/pages/Profile';
// import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Shop from '~/pages/Shop';
import Favorites from '~/pages/Favorites';
import Home from '~/pages/Home';
import ForgotPassword from '~/pages/ForgotPassword';
import ResetPassword from '~/pages/ResetPassword';
import Detail from '~/pages/Detail';
import Account from '~/pages/Profile/Account';
import PublicProfile from '~/pages/Profile/PublicProfile';
import CreditCards from '~/pages/Profile/CreditCards';
import Addresses from '~/pages/Profile/Addresses';




// Public routes
const publicRoutes = [
    { path: config.routes.home, component:  Home},
    { path: config.routes.cart, component: Cart },
    { path: config.routes.category, component: Category },
    // Profile
    { path: config.routes.profile, component: Profile , layout: ProfileLayout},
    { path: config.routes.account, component: Account , layout: ProfileLayout},
    { path: config.routes.publicprofile, component: PublicProfile , layout: ProfileLayout},
    { path: config.routes.creditcards, component: CreditCards , layout: ProfileLayout}, 
    { path: config.routes.addresses, component: Addresses , layout: ProfileLayout}, 

    //
    { path: config.routes.shop, component: Shop },
    { path: config.routes.forgotpassword, component: ForgotPassword },
    { path: config.routes.resetpassword, component: ResetPassword },
    { path: config.routes.detail, component: Detail },
    // { path: config.routes.upload, component: Upload, layout: HeaderOnly null },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.favorites, component: Favorites, layout: HeaderOnly},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
