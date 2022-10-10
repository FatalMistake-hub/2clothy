import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
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
import { useSelector } from 'react-redux';
import { cartsRemainingSelector } from '~/redux/selector';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
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
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;
    // Login logic
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
            title: 'View profile',
            to: '/account/@:nhatquach',
            // to: '/account',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    const cartList = useSelector(cartsRemainingSelector);


    const getTotalQuantity = () => {
        let total = 0
        cartList.forEach(item => {
            item.productItem.forEach(productItem => {

                total += productItem.quantity
            })
        })
        return total
      }
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('inner_header')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img 
                        src={images.logo} 
                        alt="" className={cx('logo')} 
                        
                        />
                    </Link>

                    <div className={cx('inner-search')}><Search /></div>

                    <div className={cx('actions')}>
                        {currentUser ? (
                            <>
                                <Tippy delay={[0, 50]} content="Favourites" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <FavoritesIcon />
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 50]} content="Shop manager" placement="bottom">
                                    <Link className={cx('action-btn')} to={config.routes.reference}>
                                        <ShopManagerIcon />
                                    </Link>
                                </Tippy>
                                <Tippy delay={[0, 50]} content="Cart" placement="bottom">
                                    <Link className={cx('action-btn')} to={config.routes.cart}>
                                        <CartIcon />
                                        <span className={cx('badge')}>{getTotalQuantity() || 0}</span>
                                    </Link>
                                </Tippy>
                            </>
                        ) : (
                            <>
                                {/* <Button text>Register</Button> */}
                                <Button primary onClick={togglePopup}>
                                    Sign In
                                </Button>

                                {isLogin && (
                                    <PopupForm handleClose={togglePopup} />
                                )}
                            </>
                        )}

                        <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
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
                            )}
                        </Menu>
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
