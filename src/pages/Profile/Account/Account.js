import classNames from 'classnames/bind';
import styles from './Account.module.scss';

const cx = classNames.bind(styles);
function Account() {
    return <div className={cx('wrapper')}>
        <div className={cx('account')}>
            <div className={cx('account_aboutU')}>
                <h2 className={cx('account_aboutU-title')}>About You</h2>
                <div className={cx('account_aboutU-body')}>
                    <div className={cx('account_aboutU-infoGroup')}>
                        <h6></h6>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default Account;
