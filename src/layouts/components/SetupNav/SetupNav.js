import classNames from 'classnames/bind';
import styles from './SetupNav.module.scss';
import Nav, { NavItem } from './Nav';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import config from '~/config';


const cx = classNames.bind(styles);

function SetupNav({data}) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Nav>
                    <NavItem title="Đặt tên shop" to={config.routes.reference} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                    <NavItem title="Thông tin shop" to={config.routes.listings} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                    <NavItem title="Thiết lập thanh toán" to={config.routes.billing} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                    {/* <NavItem title="Credit Cards" to={config.routes.creditcards} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} /> */}
                    {/* <NavItem
                        title="Following"
                        to={config.routes.following}
                        icon={<UserGroupIcon />}
                        activeIcon={<UserGroupActiveIcon />}
                    />
                    <NavItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} /> */}
                </Nav>
            </div>
        </div>
    );
}

export default SetupNav;
