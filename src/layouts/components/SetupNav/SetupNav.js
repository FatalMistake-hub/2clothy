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

function SetupNav() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Nav>
                    <NavItem title="Name your shop" to={config.routes.reference} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                    <NavItem title="Stock your shop" to={config.routes.listings} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                    <NavItem title="Set up billing" to={config.routes.billing} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
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
