import PropTypes from 'prop-types';

// import Sidebar from '~/layouts/components/Sidebar';

import classNames from 'classnames/bind';
import styles from './SetupShopLayout.module.scss';
import SetupNav from '../components/SetupNav';
import { Link } from 'react-router-dom';
import config from '~/config';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function SetupShopLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Etsy" className={cx('logo')} loading="lazy" />
                </Link>
            </div>
            <SetupNav />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

SetupShopLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default SetupShopLayout;
