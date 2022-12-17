import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faFileInvoice,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import config from '~/config';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { CartIcon, FavoritesIcon, InboxIcon, MessageIcon, ShopManagerIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import Category from '../Category';
import { useState } from 'react';
import PopupForm from '../../../components/PopupForm';
import { useDispatch, useSelector } from 'react-redux';
import { authRemainingSelector, cartsRemainingSelector } from '~/redux/selector';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faFileInvoice} />,
        title: 'Hoá đơn',
        to: '/purchases',
    },
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Ngôn ngữ',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
];

function Header() {
    const user = useSelector(authRemainingSelector);
    const currentUser = user?.login.currentUser;

    const [isLogin, setIsLogin] = useState(false);
    const togglePopup = () => {
        setIsLogin(!isLogin);
    };

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Tài khoản',
            to: '/account',
            // to: '/account',
        },
        ...MENU_ITEMS,
        {
            // icon: <FontAwesomeIcon icon={faGear} />,
            // title: 'Cài đặt',
            // to: '/settings',
        },
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Đăng xuất',
            // to: '/logout',
            separate: true,
        },
    ];

    const cartList = useSelector(cartsRemainingSelector);

    const getTotalQuantity = () => {
        let total = 0;
        if (cartList) {
            cartList.forEach((item) => {
                item.orderDetails.forEach((orderDetails) => {
                    total += orderDetails.quantity;
                });
            });
        }
        return total;
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('inner_header')}>
                    <a href={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="" className={cx('logo')} loading="lazy" />
                        {/* <span className={cx('logo-text')}>2Clothy</span> */}
                    </a>

                    <div className={cx('inner-search')}>
                        <Search />
                    </div>

                    <div className={cx('actions')}>
                        {currentUser ? (
                            <>
                                {/* <Tippy delay={[0, 50]} content="Yêu thích" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <FavoritesIcon />
                                    </button>
                                </Tippy> */}
                                <Tippy delay={[0, 50]} content="Bán hàng" placement="bottom">
                                    <Link className={cx('action-btn')} to={config.routes.reference}>
                                        <ShopManagerIcon />
                                    </Link>
                                </Tippy>
                                <Tippy delay={[0, 50]} content="Giỏ hàng" placement="bottom">
                                    <Link className={cx('action-btn')} to={config.routes.cart}>
                                        <CartIcon />
                                        <span className={cx('badge')}>
                                            <p>{getTotalQuantity() || 0}</p>
                                        </span>
                                    </Link>
                                </Tippy>
                                <Menu items={userMenu} onChange={handleMenuChange}>
                                    <Image
                                        className={cx('user-avatar')}
                                        src="https://img2.etsystatic.com/site-assets/images/global-nav/no-user-avatar.svg"
                                        alt="Nguyen Van A"
                                    />
                                </Menu>
                            </>
                        ) : (
                            <>
                                {/* <Tippy delay={[0, 50]} content="Giỏ hàng" placement="bottom">
                                    <Link className={cx('action-btn')} to={config.routes.cart}>
                                        <CartIcon />
                                        <span className={cx('badge')}>
                                            <p>{getTotalQuantity() || 0}</p>
                                        </span>
                                    </Link>
                                </Tippy> */}
                                <Button primary onClick={togglePopup} className={cx('sign-btn')}>
                                    Đăng Nhập
                                </Button>
                                {isLogin && <PopupForm handleClose={togglePopup} />}
                            </>
                        )}

                        {/* <Menu items={currentUser?.accessToken ?MENU_ITEMS  : userMenu  } onChange={handleMenuChange}> */}
                        {/* <Menu items={userMenu} onChange={handleMenuChange}>
                            {currentUser ? (
                                <Image
                                    className={cx('user-avatar')}
                                    src="https://img2.etsystatic.com/site-assets/images/global-nav/no-user-avatar.svg"
                                    alt="Nguyen Van A"
                                />
                            ) : (
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            )
                            }
                        </Menu> */}
                    </div>
                </div>
                <div className={cx('inner_category')}>
                    <Category />
                </div>
            </div>
        </header>
    );
}

export default Header;
