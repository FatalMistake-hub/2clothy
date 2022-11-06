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
                <NavItem title="Hồ sơ" to={config.routes.account} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <NavItem title="Hồ sơ công khai" to={config.routes.publicprofile} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                {/* <NavItem title="Sổ địa chỉ" to={config.routes.addresses} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} /> */}
                <NavItem title="Tuỳ chọn thanh toán" to={config.routes.creditcards} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
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
