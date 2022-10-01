import PropTypes from 'prop-types';
import Header from '~/layouts/components/Header';
// import Sidebar from '~/layouts/components/Sidebar';
import ProfileNav from '../components/ProfileNav';
import classNames from 'classnames/bind';
import styles from './ProfileLayout.module.scss';

const cx = classNames.bind(styles);

function ProfileLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <ProfileNav />
                    {children}
                </div>
            </div>
        </div>
    );
}

ProfileLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProfileLayout;
