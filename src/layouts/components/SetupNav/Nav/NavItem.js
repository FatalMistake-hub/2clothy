import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink ,Link} from 'react-router-dom';
import styles from './Nav.module.scss';

const cx = classNames.bind(styles);

function NavItem({ title, to, icon, activeIcon }) {
    return (
        <NavLink className={(nav) => cx('nav-item', { active: nav.isActive })} to={to}>
            {/* <h2 className={cx('icon')}>{icon}</h2>
            <h2 className={cx('active-icon')}>{activeIcon}</h2> */}
            <div className={cx('stop-dot')}></div>
            <div className={cx('title')}>{title}</div>
        </NavLink>
    );
}

NavItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node.isRequired,
};

export default NavItem;