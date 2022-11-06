import classNames from 'classnames/bind';
import { useState ,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '~/components/Button';
import config from '~/config';
import { getCart, loginUser, registerUser } from '~/services/authService';
import styles from './PopupForm.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { authRemainingSelector } from '~/redux/selector';
import { createAxios } from '~/services/createInstance';
import AuthSlice from '~/redux/AuthSlice';
import CartSlice from '~/redux/CartSlice';
const cx = classNames.bind(styles);
function PopupForm({ handleClose }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(authRemainingSelector);
    const currentUser = user?.login.currentUser;
    const accessToken = currentUser?.accessToken;
    const [errorResponse, setErrorResponse] = useState('');
    const Login = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required('Bắt buộc!')
                .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Vui lòng nhập một địa chỉ email hợp lệ!'),
            password: Yup.string()
                .required('Bắt buộc!')
                .matches(
                    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
                    'Mật khẩu phải có 7-19 ký tự và chứa ít nhất một chữ cái, một số và một ký tự đặc biệt!',
                ),
        }),
        onSubmit: (values) => {
            const newUser = {
                Email: values.email,
                Password: values.password,
            };

            const fetchApi = async () => {
                const res = await loginUser(newUser, dispatch, navigate);
                setErrorResponse(res);
            };
            // const fetchApiCart = async () => {
                
            //     console.log('do get cart', user);
            //     let axiosJWT = createAxios(currentUser, dispatch, AuthSlice.actions.loginSuccess);
            //     const result = await getCart(accessToken, axiosJWT);
            //     dispatch(CartSlice.actions.handleCart(result));
            // };
            // fetchApiCart();
            fetchApi();

            // fetchApiCart();
            

        },
    });
    const Register = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required('Bắt buộc!')
                .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Vui lòng nhập một địa chỉ email hợp lệ!'),
            password: Yup.string()
                .required('Bắt buộc!')
                .matches(
                    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
                    'Mật khẩu phải có 7-19 ký tự và chứa ít nhất một chữ cái, một số và một ký tự đặc biệt!',
                ),
            confirmPassword: Yup.string()
                .required('Bắt buộc!')
                .oneOf([Yup.ref('password'), null], 'Mật khẩu nhập lại không trùng khớp!'),
        }),
        onSubmit: (values) => {
            const newUser = {
                Email: values.email,
                Password: values.password,
                ConfirmPassword: values.confirmPassword,
            };
            const fetchApi = async () => {
                const res = await registerUser(newUser, dispatch, navigate);
                setErrorResponse(res);
            };
            fetchApi();
        },
    });
    const [isRegister, setIsRegister] = useState(true);
    const toggleForm = () => {
        setIsRegister(!isRegister);
        setErrorResponse();
    };

    return (
        <div className={cx('actions')}>
            {isRegister ? (
                <div className={cx('popup-box')}>
                    <div className={cx('box')}>
                        <span className={cx('close_icon')} onClick={handleClose}>
                            x
                        </span>
                        <form className={cx('form-submit')} onSubmit={Login.handleSubmit}>
                            <div className={cx('header')}>
                                <h1>Đăng nhập</h1>
                                <Button text rounded outline onClick={toggleForm}>
                                    Đăng ký
                                </Button>
                            </div>
                            <div className={cx('email')}>
                                <span className={cx('content')}>Địa chỉ email </span>
                                <input
                                    id="email"
                                    name="email"
                                    value={Login.values.email}
                                    onChange={Login.handleChange}
                                    className={cx('input_login')}
                                    type="email"
                                />
                                {Login.errors.email && (
                                    <div className={cx('errorBox')}>
                                        <p className={cx('errorMsg')}>* {Login.errors.email} </p>
                                    </div>
                                )}
                            </div>
                            <div className={cx('password')}>
                                <span className={cx('content')}>Mật khẩu</span>
                                <input
                                    id="password"
                                    name="password"
                                    value={Login.values.password}
                                    onChange={Login.handleChange}
                                    className={cx('input_login')}
                                    type="password"
                                />
                                {Login.errors.password && (
                                    <div className={cx('errorBox')}>
                                        <p className={cx('errorMsg')}>* {Login.errors.password} </p>
                                    </div>
                                )}
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
                                <Button type="submit" login rounded primary>
                                    Đăng nhập
                                </Button>
                            </div>
                            {errorResponse ? (
                                <div className={cx('errorResponse-box')}>
                                    <p className={cx('errorResponse-alert')}>{errorResponse}</p>
                                </div>
                            ) : (
                                ''
                            )}
                        </form>
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
                            <Button text rounded outline onClick={toggleForm}>
                                Đăng nhập
                            </Button>
                        </div>
                        {/* <div className={cx('header')}>
                            <h2>Registration is easy.</h2>
                        </div> */}

                        <form className={cx('form-submit')} onSubmit={Register.handleSubmit}>
                            <div className={cx('email')}>
                                <span className={cx('content')}>Địa chỉ email</span>
                                <input
                                    id="email"
                                    name="email"
                                    value={Register.values.email}
                                    onChange={Register.handleChange}
                                    className={cx('input_login')}
                                    type="email"
                                />
                                {Register.errors.email && (
                                    <div className={cx('errorBox')}>
                                        <p className={cx('errorMsg')}>* {Register.errors.email} </p>
                                    </div>
                                )}
                            </div>
                            <div className={cx('password')}>
                                <span className={cx('content')}>Mật Khẩu</span>
                                <input
                                    id="password"
                                    name="password"
                                    value={Register.values.password}
                                    onChange={Register.handleChange}
                                    className={cx('input_login')}
                                    type="password"
                                />
                                {Register.errors.password && (
                                    <div className={cx('errorBox')}>
                                        <p className={cx('errorMsg')}>* {Register.errors.password} </p>
                                    </div>
                                )}
                            </div>
                            <div className={cx('password')}>
                                <span className={cx('content')}>Nhập lại mật khẩu</span>
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={Register.values.confirmPassword}
                                    onChange={Register.handleChange}
                                    className={cx('input_login')}
                                    type="password"
                                />
                                {Register.errors.confirmPassword ? (
                                    <div className={cx('errorBox')}>
                                        <p className={cx('errorMsg')}>* {Register.errors.confirmPassword} </p>
                                    </div>
                                ) : (
                                    ''
                                )}
                            </div>

                            <div className={cx('sign_in')}>
                                <Button type="submit" login rounded primary>
                                    Đăng ký
                                </Button>
                            </div>
                            {errorResponse ? (
                                <div className={cx('errorResponse-box')}>
                                    <p className={cx('errorResponse-alert')}>{errorResponse}</p>
                                </div>
                            ) : (
                                ''
                            )}
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PopupForm;
