import classNames from 'classnames/bind';
import Button from '~/components/Button';

import styles from './ResetPassword.module.scss';

const cx = classNames.bind(styles);
function ResetPassword() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h1 className={cx('title')}>Reset Your Password</h1>
                <div className={cx('form-container')}>
                        <div className={cx('form-container-inner')}>
                            <div className={cx('pane')}>
                                <div className={cx('input-group')}>
                                    <span className={cx('input-heading')}>
                                        New Password
                                    </span>
                                    <input type="text" className={cx('input-box')} />
                                </div>
                                <div className={cx('input-group')}>
                                    <span className={cx('input-heading')}>
                                        Confirm Password
                                    </span>
                                    <input type="text" className={cx('input-box')} />
                                </div>
                                <div className={cx('button')}>
                                    <Button primary >Set Password</Button>
                                </div>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
