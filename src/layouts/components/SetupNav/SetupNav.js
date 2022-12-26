import classNames from 'classnames/bind';
import styles from './SetupNav.module.scss';
import Nav, { NavItem } from './Nav';
import { HomeIcon, HomeActiveIcon, UserGroupIcon, UserGroupActiveIcon, LiveIcon, LiveActiveIcon } from '~/components/Icons';
import config from '~/config';
import { useSelector } from 'react-redux';
import { checkOutRemainingSelector } from '~/redux/selector';

const cx = classNames.bind(styles);

function SetupNav({ data }) {
    const type = useSelector(checkOutRemainingSelector);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {console.log(data)}
                {type.paymentType ? (
                    <Nav>
                        {type.paymentType == 'vnpay' ? (
                            <>
                                <NavItem
                                    title="Địa chỉ giao hàng"
                                    to={config.routes.shipping}
                                    icon={<HomeIcon />}
                                    activeIcon={<HomeActiveIcon />}
                                />
                                <NavItem
                                    title="Thanh toán"
                                    to={config.routes.payment}
                                    icon={<HomeIcon />}
                                    activeIcon={<HomeActiveIcon />}
                                />
                                <NavItem
                                    title="Kiểm tra đơn hàng"
                                    to={config.routes.review}
                                    icon={<HomeIcon />}
                                    activeIcon={<HomeActiveIcon />}
                                />
                            </>
                        ) : (
                            <>
                                <NavItem
                                    title="Địa chỉ giao hàng"
                                    to={config.routes.shipping}
                                    icon={<HomeIcon />}
                                    activeIcon={<HomeActiveIcon />}
                                />
                                <NavItem
                                    title="Kiểm tra đơn hàng"
                                    to={config.routes.review}
                                    icon={<HomeIcon />}
                                    activeIcon={<HomeActiveIcon />}
                                />
                            </>
                        )}
                    </Nav>
                ) : (
                    <Nav>
                        <NavItem title="Đặt tên shop" to={config.routes.reference} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                        <NavItem title="Thông tin shop" to={config.routes.listings} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                        <NavItem
                            title="Thiết lập thanh toán"
                            to={config.routes.billing}
                            icon={<HomeIcon />}
                            activeIcon={<HomeActiveIcon />}
                        />
                        {/* <NavItem title="Credit Cards" to={config.routes.creditcards} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} /> */}
                        {/* <NavItem
                        title="Following"
                        to={config.routes.following}
                        icon={<UserGroupIcon />}
                        activeIcon={<UserGroupActiveIcon />}
                    />
                    <NavItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} /> */}
                    </Nav>
                )}
            </div>
        </div>
    );
}

export default SetupNav;
