import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './PublicProfile.module.scss';
import moment from 'moment/moment';
import { useEffect, useState, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authRemainingSelector } from '~/redux/selector';
import { getUser, updateUser } from '~/services/authService';
import { createAxios } from '~/services/createInstance';
import { Field, Form, useField, useFormik } from 'formik';
import * as Yup from 'yup';
import AuthSlice from '~/redux/AuthSlice';

const cx = classNames.bind(styles);
function PublicProfile() {
    const user = useSelector(authRemainingSelector);
    const currentUser = user?.login.currentUser;
    const accessToken = currentUser?.accessToken;
    const dispatch = useDispatch();

    const [dataUser, setDataUser] = useState();
    useLayoutEffect(() => {
        const fetchApi = async () => {
            let axiosJWT = createAxios(currentUser, dispatch, AuthSlice.actions.loginSuccess);
            const result = await getUser(accessToken, axiosJWT);
            setDataUser(result);
            User.values.name=result.name;
            User.values.addrress=result.addrress;
            User.values.phoneNumber=result.phoneNumber;
        };
        fetchApi();
    }, []);
    const [errorResponse, setErrorResponse] = useState('');
    const User = useFormik({
        initialValues: {
            name: dataUser?.name,
            addrress: dataUser?.addrress,
            phoneNumber: dataUser?.phoneNumber,
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Bắt buộc!'),
                addrress: Yup.string()
                .required('Bắt buộc!'),
                phoneNumber: Yup.string()
                .required('Bắt buộc!')
                
        }),
        onSubmit: (values) => {
            console.log(values);
            const data = {
                id: dataUser?.id,
                Name: values.name,
                Address: values.addrress,
                PhoneNumber: values.phoneNumber,
            };
            console.log(data);

            const fetchApi = async () => {
                let axiosJWT = createAxios(currentUser, dispatch, AuthSlice.actions.loginSuccess);

                const res = await updateUser(data, accessToken, axiosJWT);
                setErrorResponse(res);
            };
            fetchApi();
        },
    });

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <p className={cx('header-text')}>Mọi thứ ghi trên trang này đều có thể được nhìn thấy bởi bất kỳ ai</p>
                <p className={cx('header-text')}>{errorResponse}</p>
            </div>
            <form onSubmit={User.handleSubmit}>
                <div className={cx('profile')}>
                    <div className={cx('profile-container')}>
                        <div className={cx('profile-section')}>
                            <label className={cx('profile-section-title')}>Ảnh đại diện</label>
                            <div className={cx('profile-section-image')}>
                                {/* <input type="file" className={cx('profile-section-input-file')} /> */}
                                <div className={cx('profile-section-image-box')}>
                                    <img
                                        src="https://www.etsy.com/images/avatars/default_avatar_400x400.png"
                                        alt=""
                                        className={cx('profile-section-image-content')}
                                    />
                                </div>
                            </div>
                            <p className={cx('profile-section-notice')}>
                                Start typing and choose from a suggested city to help others find you.
                            </p>
                        </div>
                        <div className={cx('profile-section-break')} />

                        <div className={cx('profile-section')}>
                            <label className={cx('profile-section-title')}>Email</label>
                            {/* <input type="text" className={cx('profile-section-input')} /> */}
                            <span className={cx('profile-section-text')}>{dataUser?.email}</span>
                        </div>
                        <div className={cx('profile-section-break')} />
                        <div className={cx('profile-section')}>
                            <label className={cx('profile-section-title')}>Tên</label>
                            <input
                                id="name"
                                name="name"
                                value={User.values.name}
                                onChange={User.handleChange}
                                type="text"
                                className={cx('profile-section-input')}
                            />
                            <p className={cx('profile-section-notice')}></p>
                        </div>
                        <div className={cx('profile-section-break')} />
                        <div className={cx('profile-section')}>
                            <label className={cx('profile-section-title')}>Số điện thoại</label>
                            <input
                                id="phoneNumber"
                                name="phoneNumber"
                                value={User.values.phoneNumber}
                                onChange={User.handleChange}
                                type="number"
                                className={cx('profile-section-input')}
                            />
                        </div>
                        <div className={cx('profile-section-break')} />
                        <div className={cx('profile-section')}>
                            <label className={cx('profile-section-title')}>Địa chỉ</label>

                            <textarea
                                id="addrress"
                                name="addrress"
                                rows="5"
                                cols="33"
                                value={User.values.addrress}
                                onChange={User.handleChange}
                            />
                        </div>
                    </div>
                </div>
                <div className={cx('profile-submit')}>
                    <Button type="submit" primary>
                        Lưu thay đổi
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default PublicProfile;
