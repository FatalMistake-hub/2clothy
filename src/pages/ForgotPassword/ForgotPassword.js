import { useState } from 'react';
import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './ForgotPassword.module.scss';

const cx = classNames.bind(styles);

function ForgotPassword() {
    const [checkSubmit, setcheckSubmit] = useState(true);
    const changeForm = () => {
        setcheckSubmit(!checkSubmit);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('form-container')}>
                    {checkSubmit ? (
                        <div className={cx('form-container-inner')}>
                            <div className={cx('heading')}>
                                <h1 className={cx('heading-content')}>Reset your password</h1>
                            </div>
                            <div className={cx('pane')}>
                                <div className={cx('input-group')}>
                                    <span className={cx('input-heading')}>
                                        Enter your email address and we'll send you a link to reset your password.
                                    </span>
                                    <input type="text" className={cx('input-email')} />
                                </div>
                                <div className={cx('button')}>
                                    <Button primary onClick={changeForm}>Submit</Button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className={cx('form-container-inner')}>
                            <div className={cx('heading')}>
                                <h1 className={cx('heading-content')}>Okay!</h1>
                            </div>
                            <div className={cx('pane')}>
                                <span className={cx('pane-content')}>
                                    If an account exists for quachminhnhat1711@gmail.com, a confirmation email has been
                                    sent. It will have a link to reset your password.
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
