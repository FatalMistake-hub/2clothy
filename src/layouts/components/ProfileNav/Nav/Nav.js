import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Nav.module.scss';

const cx = classNames.bind(styles);
function Nav({ children }) {
    return <nav className={cx('nav')}>{
        children
        }</nav>;
}
Nav.propTypes = {
    children: PropTypes.node.isRequired,
}
export default Nav;
