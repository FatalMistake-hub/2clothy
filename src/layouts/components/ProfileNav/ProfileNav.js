import classNames from 'classnames/bind';
import styles from './ProfileNav.module.scss';
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

function ProfileNav() {
    return (
        <div className={cx('wrapper')}>
            <Nav>
                <NavItem title="Account" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <NavItem title="Public Profile" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <NavItem title="Addresses" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <NavItem title="Credit Cards" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                {/* <NavItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <NavItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} /> */}
            </Nav>
        </div>
    );
}

export default ProfileNav;
