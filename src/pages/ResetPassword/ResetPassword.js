import Button from '~/components/Button';
import classNames from 'classnames/bind';

import styles from './ResetPassword.module.scss';

const cx = classNames.bind(styles);
function ResetPassword() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h1 className={cx('title')}>Đặt lại mật khẩu của bạn</h1>
                <div className={cx('form-container')}>
                        <div className={cx('form-container-inner')}>
                            <div className={cx('pane')}>
                                <div className={cx('input-group')}>
                                    <span className={cx('input-heading')}>
                                    Mật khẩu mới
                                    </span>
                                    <input type="text" className={cx('input-box')} />
                                </div>
                                <div className={cx('input-group')}>
                                    <span className={cx('input-heading')}>
                                        Nhập lại mật khẩu
                                    </span>
                                    <input type="text" className={cx('input-box')} />
                                </div>
                                <div className={cx('button')}>
                                    <Button primary >Đặt lại mật khẩu</Button>
                                </div>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
