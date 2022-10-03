import classNames from 'classnames/bind';
import styles from './Account.module.scss';

const cx = classNames.bind(styles);
function Account() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('account')}>
                <div className={cx('account_form')}>
                    <h2 className={cx('account_form-title')}>About You</h2>
                    <div className={cx('account_form-body')}>
                        <div className={cx('account_form-infoGroup')}>
                            <h6>Name</h6>
                            <p>Nhat Quách</p>
                        </div>
                        <div className={cx('account_form-infoGroup')}>
                            <h6>Member since</h6>
                            <p>September 5, 2022</p>
                        </div>
                    </div>
                </div>
                <div className={cx('account_form')}>
                    <h2 className={cx('account_form-title')}>Password</h2>
                    <div className={cx('account_form-body')}>
                        <div className={cx('account_form-inputGroup')}>
                            <div className={cx('account_form-inputGroup-box')}>
                                <label htmlFor="current-password"className={cx('account_form-inputtitle')} >Current Password</label>
                                <input type="password" id="current-password" className={cx('account_form-input')}/>
                            </div>
                        </div>
                        <div className={cx('account_form-inputGroup')}>
                        <div className={cx('account_form-inputGroup-box')}>

                            <label htmlFor="password"className={cx('account_form-inputtitle')} >New Password</label>
                            <input type="password" id="password" className={cx('account_form-input')}/>
                        </div>
                        </div>
                        <div className={cx('account_form-inputGroup')}>
                        <div className={cx('account_form-inputGroup-box')}>

                            <label htmlFor="confirm-password"className={cx('account_form-inputtitle')} >Confirm New Password</label>
                            <input type="password" id="confirm-password" className={cx('account_form-input')}/>
                        </div>
                        </div>
                        
                    <div className={cx('account_form-submit')}>
                        <input type="submit" value="Change Password" className={cx('account_form-submit-input')}/>
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
