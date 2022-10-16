import classNames from 'classnames/bind';
import styles from './Account.module.scss';

const cx = classNames.bind(styles);
function Account() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('account')}>
                <div className={cx('account_form')}>
                    <h2 className={cx('account_form-title')}>Thông tin tài khoản</h2>
                    <div className={cx('account_form-body')}>
                        <div className={cx('account_form-infoGroup')}>
                            <h6>Tên</h6>
                            <p>Nhat Quách</p>
                        </div>
                        <div className={cx('account_form-infoGroup')}>
                            <h6>Ngày tạo tài khoản</h6>
                            <p>September 5, 2022</p>
                        </div>
                    </div>
                </div>
                <div className={cx('account_form')}>
                    <h2 className={cx('account_form-title')}>Mật khẩu</h2>
                    <div className={cx('account_form-body')}>
                        <div className={cx('account_form-inputGroup')}>
                            <div className={cx('account_form-inputGroup-box')}>
                                <label htmlFor="current-password"className={cx('account_form-inputtitle')} >Mật khẩu hiện tại</label>
                                <input type="password" id="current-password" className={cx('account_form-input')}/>
                            </div>
                        </div>
                        <div className={cx('account_form-inputGroup')}>
                        <div className={cx('account_form-inputGroup-box')}>

                            <label htmlFor="password"className={cx('account_form-inputtitle')} >Mật khẩu mới</label>
                            <input type="password" id="password" className={cx('account_form-input')}/>
                        </div>
                        </div>
                        <div className={cx('account_form-inputGroup')}>
                        <div className={cx('account_form-inputGroup-box')}>

                            <label htmlFor="confirm-password"className={cx('account_form-inputtitle')} >Nhập lại mật khẩu mới</label>
                            <input type="password" id="confirm-password" className={cx('account_form-input')}/>
                        </div>
                        </div>
                        
                    <div className={cx('account_form-submit')}>
                        <input type="submit" value="Thay đổi mật khẩu" className={cx('account_form-submit-input')}/>
                    </div>
                    </div>
                </div>
                <div className={cx('account_help')}>
                    <a href="" className={cx('account_help-link')}>Apps</a>
                    <a href="" className={cx('account_help-link')}>Prototypes</a>
                </div>
            </div>
        </div>
    );
}

export default Account;
