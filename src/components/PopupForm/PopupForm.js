import classNames from 'classnames/bind';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '~/components/Button';
import config from '~/config';
import { loginUser,registerUser } from '~/services/authService';
import styles from './PopupForm.module.scss';

const cx = classNames.bind(styles);
function PopupForm({ handleClose }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        const newUser = {
            Email: email,
            Password: password,
        };
        loginUser(newUser, dispatch, navigate);
    };
    const handleRegister = (e) => {
        const newUser = {
            Email: email,
            Password: password,
            ConfirmPassword: confirmPassword,
        };
        registerUser(newUser, dispatch, navigate);
    };

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
                            <h1>Đăng nhập</h1>
                            <Button text rounded outline onClick={toggleForm}>
                            Đăng ký
                            </Button>
                        </div>
                        <div className={cx('email')}>
                            <span className={cx('content')}>Địa chỉ email </span>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} className={cx('input_login')} type="email" />
                        </div>
                        <div className={cx('password')}>
                            <span className={cx('content')}>Mật khẩu</span>
                            <input
                                value={password}
                                className={cx('input_login')}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                            />
                        </div>
                        <div className={cx('forgotorsave')}>
                            {/* <div className={cx('check')}>
                                <input type="checkbox" className={cx('checkbox')} />
                                <span className={cx('staysigned')}> Stay signed in</span>
                            </div> */}
                            <Link to={config.routes.forgotpassword} className={cx('forgotpass')}>
                                Quên mật khẩu ?
                            </Link>
                        </div>
                        <div className={cx('sign_in')}>
                            <Button login rounded primary onClick={handleLogin}>
                                Đăng nhập
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
                            <h1>Tạo tài khoản</h1>
                        </div>
                        {/* <div className={cx('header')}>
                            <h2>Registration is easy.</h2>
                        </div> */}

                        <div className={cx('email')}>
                            <span className={cx('content')}>Địa chỉ email</span>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} className={cx('input_login')} type="email" />
                        </div>
                        <div className={cx('password')}>
                            <span className={cx('content')}>Mật Khẩu</span>
                            <input
                                value={password}
                                className={cx('input_login')}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                            />
                        </div>
                        <div className={cx('password')}>
                            <span className={cx('content')}>Nhập lại mật khẩu</span>
                            <input
                                value={confirmPassword}
                                className={cx('input_login')}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                type="password"
                            />
                        </div>

                        <div className={cx('sign_in')}>
                            <Button login rounded primary onClick={handleRegister}>
                                Đăng ký
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PopupForm;
