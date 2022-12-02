import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import Button from '~/components/Button';
import styles from './Shipping.module.scss';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import CheckOutSlice from '~/redux/CheckOutSlice';
const cx = classNames.bind(styles);

function Shipping() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const CheckoutAddress = useFormik({
        initialValues: {},
        validationSchema: Yup.object({
            address: Yup.string().required('Bắt buộc!'),
            country: Yup.string().required('Bắt buộc!'),
            city: Yup.string().required('Bắt buộc!'),
            phone: Yup.string().required('Bắt buộc!'),
        }),
        onSubmit: (values) => {
            console.log(values);
            const data = {
                Country: values.country,
                Address: values.address,
                PhoneNumber: values.phone,
                City: values.city,
            };
            dispatch(CheckOutSlice.actions.handleShipping(data));
            navigate('/payment');
        },
    });
    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <form onSubmit={CheckoutAddress.handleSubmit} className={cx('form')}>
                    <h1 className={cx('form-tittle')}>Nhập địa chỉ giao hàng của bạn</h1>
                    <div className={cx('form-group')}>
                        <div className={cx('form-group-item')}>
                            <label className={cx('form-group-item-label')} htmlFor="">
                                Quốc gia
                            </label>
                            <input
                                id="country"
                                name="country"
                                value={CheckoutAddress.values.country}
                                onChange={CheckoutAddress.handleChange}
                                className={cx('form-group-item-input')}
                                type="text"
                            />
                        </div>
                        <div className={cx('form-group-item')}>
                            <label className={cx('form-group-item-label')} htmlFor="">
                                Thành phố
                            </label>
                            <input
                                id="city"
                                name="city"
                                value={CheckoutAddress.values.city}
                                onChange={CheckoutAddress.handleChange}
                                className={cx('form-group-item-input')}
                                type="text"
                            />
                        </div>
                        <div className={cx('form-group-item')}>
                            <label className={cx('form-group-item-label')} htmlFor="">
                                Địa chỉ cụ thể
                            </label>
                            <input
                                id="address"
                                name="address"
                                value={CheckoutAddress.values.address}
                                onChange={CheckoutAddress.handleChange}
                                className={cx('form-group-item-input')}
                                type="text"
                            />
                        </div>
                        <div className={cx('form-group-item')}>
                            <label className={cx('form-group-item-label')} htmlFor="">
                                Số điện thoại
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                value={CheckoutAddress.values.phone}
                                onChange={CheckoutAddress.handleChange}
                                className={cx('form-group-item-input')}
                                type="text"
                            />
                        </div>
                    </div>
                    <div className={cx('form-group-submit')}>
                        <Button type="submit" primary rounded login>
                            Tiếp tục thanh toán
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Shipping;
