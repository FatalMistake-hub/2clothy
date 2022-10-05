import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import config from '~/config';
import styles from './PopupForm.module.scss';

const cx = classNames.bind(styles);
function PopupForm({ handleClose }) {
    const [isRegister, setIsRegister] = useState(true);
    const toggleForm = () => {
        setIsRegister(!isRegister);


    };

    return (
        <div className={cx('actions')}>
            {isRegister ? (
                <div className={cx('popup-box')}>
                    <div className={cx('box')}>
                        <span className={cx('close_icon')} onClick={handleClose}>
                            x
                        </span>
                        <div className={cx('header')}>
                            <h1>Sign in</h1>
                            <Button text rounded outline onClick={toggleForm}>
                                Register
                            </Button>
                        </div>
                        <div className={cx('email')}>
                            <span className={cx('content')}>Email address</span>
                            <input className={cx('input_login')} type="email" />
                        </div>
                        <div className={cx('password')}>
                            <span className={cx('content')}>Password</span>
                            <input className={cx('input_login')} type="text" />
                        </div>
                        <div className={cx('forgotorsave')}>
                            <div className={cx('check')}>
                                <input type="checkbox" className={cx('checkbox')} />
                                <span className={cx('staysigned')}> Stay signed in</span>
                            </div>
                            <Link to={config.routes.forgotpassword}className={cx('forgotpass')} >Forgot your password?</Link>
                        </div>
                        <div className={cx('sign_in')}>
                            <Button login rounded primary>
                                Sign in
                            </Button>
                        </div>
                        {/* <div className={cx('or')}>
                            <span>OR</span>
                        </div>
                        <div className={cx('sign_in')}>
                            <Button login rounded>
                                Continue with Google
                            </Button>
                        </div> */}
                        
                    </div>
                </div>
            ) : (
                <div className={cx('popup-box')}>
                    <div className={cx('box')}>
                        <span className={cx('close_icon')} onClick={handleClose}>
                            x
                        </span>
                        <div className={cx('header')}>
                            <h1>Create your account</h1>
                        </div>
                        <div className={cx('header')}>
                            <h2>Registration is easy.</h2>
                        </div>

                        <div className={cx('email')}>
                            <span className={cx('content')}>Email address</span>
                            <input className={cx('input_login')} type="email" />
                        </div>
                        <div className={cx('password')}>
                            <span className={cx('content')}>Password</span>
                            <input className={cx('input_login')} type="text" />
                        </div>
                        <div className={cx('password')}>
                            <span className={cx('content')}>Confirm password</span>
                            <input className={cx('input_login')} type="text" />
                        </div>

                        <div className={cx('sign_in')}>
                            <Button login rounded primary>
                                Register
                            </Button>
                        </div>
                        
                    </div>
                </div>
            )}
        </div>
    );
}

export default PopupForm;
