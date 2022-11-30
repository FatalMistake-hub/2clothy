import Button from '~/components/Button';
import classNames from 'classnames/bind';

import styles from './ResetPassword.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import ErrorBox from '~/components/ErrorBox';
import ErrorMsg from '~/components/ErrorMsg';
import { useSearchParams } from 'react-router-dom';
import * as searchServices from '~/services/apiService';

const cx = classNames.bind(styles);
function ResetPassword() {
    const [errorResponse, setErrorResponse] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get('code'));
    console.log(query);
    const ResetPassword = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
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
            const newPassword = {
                ResetPasswordCode: query,
                NewPassword: values.password,
                ConfirmPassword: values.confirmPassword,
            };
            const fetchApi = async () => {
                const res = await searchServices.ResetPassword(newPassword);
                setErrorResponse(res);
            };
            fetchApi();
        },
    });

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h1 className={cx('title')}>Đặt lại mật khẩu của bạn</h1>
                <div className={cx('form-container')}>
                    <form onSubmit={ResetPassword.handleSubmit}>
                        <div className={cx('form-container-inner')}>
                            <div className={cx('pane')}>
                                <div className={cx('input-group')}>
                                    <span className={cx('input-heading')}>Mật khẩu mới</span>
                                    <input
                                        id="password"
                                        name="password"
                                        value={ResetPassword.values.password}
                                        onChange={ResetPassword.handleChange}
                                        type="password"
                                        className={cx('input-box')}
                                    />
                                    <p className={cx('profile-section-notice')}>
                                        {ResetPassword.errors.password && <ErrorMsg data={ResetPassword.errors.password} />}
                                    </p>
                                </div>
                                <div className={cx('input-group')}>
                                    <span className={cx('input-heading')}>Nhập lại mật khẩu</span>
                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        value={ResetPassword.values.confirmPassword}
                                        onChange={ResetPassword.handleChange}
                                        type="password"
                                        className={cx('input-box')}
                                    />
                                    <p className={cx('profile-section-notice')}>
                                        {ResetPassword.errors.confirmPassword && <ErrorMsg data={ResetPassword.errors.confirmPassword} />}
                                    </p>
                                </div>
                                <div className={cx('button')}>
                                    <Button type="submit" primary>
                                        Đặt lại mật khẩu
                                    </Button>
                                </div>
                                {errorResponse ? <ErrorBox data={errorResponse} status={'success'} /> : ''}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
