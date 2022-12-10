import classNames from 'classnames/bind';
import styles from './Payment.module.scss';
import Button from '~/components/Button';
import { Card } from '~/components/Icons';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import CheckOutSlice from '~/redux/CheckOutSlice';
const cx = classNames.bind(styles);

function Payment() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const CheckoutPayment = useFormik({
        initialValues: {},
        validationSchema: Yup.object({
            bankname: Yup.string().required('Bắt buộc!'),
            owner: Yup.string().required('Bắt buộc!'),
            numberCard: Yup.string().required('Bắt buộc!'),
            dateExpired: Yup.string().required('Bắt buộc!'),
        }),
        onSubmit: (values) => {
            console.log(values);
            const data = {
                type: 'VNPAY',
                info: {
                    BankName: values.bankname,
                    NumberCard: values.numberCard,
                    Owner: values.owner,
                    DateExpired: values.dateExpired,
                },
            };
            dispatch(CheckOutSlice.actions.handlePayment(data));
            navigate('/review');
        },
    });
    return (
        <div className={cx('wrapper')}>
            <form onSubmit={CheckoutPayment.handleSubmit}>
                <div className={cx('body')}>
                    <div className={cx('tittle')}>
                        <h2 className={cx('tittle-text')}>Hãy chọn phương thức thanh toán</h2>
                        <p className={cx('tittle-tip')}>
                            Bạn sẽ không bị tính phí cho đến khi bạn xem lại đơn đặt hàng này trên trang tiếp theo.
                        </p>
                    </div>

                    <div className={cx('form-box')}>
                        <div className={cx('form-check')}>
                            <input type="radio" id="radio" className={cx('form-check-radio')} />
                            <div className={cx('form-check-group')}>
                                <p className={cx('form-check-name')}>Thẻ ngân hàng </p>
                                <label htmlFor="radio" className={cx('form-check-iconList')}>
                                    <span className={cx('form-check-icon')}>
                                        <img
                                            src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-vnpay.png"
                                            loading="lazy"
                                            className={cx('form-check-icon-data')}
                                        />
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className={cx('form-group')}>
                            <div className={cx('form-group-item')}>
                                <label className={cx('form-group-item-label')} htmlFor="">
                                    Ngân hàng
                                </label>
                                <input
                                    id="bankname"
                                    name="bankname"
                                    value={CheckoutPayment.values.bankname}
                                    onChange={CheckoutPayment.handleChange}
                                    className={cx('form-group-item-input')}
                                    type="text"
                                    placeholder="Nhập tên ngân hàng"
                                />
                            </div>
                            <div className={cx('form-group-item')}>
                                <label className={cx('form-group-item-label')} htmlFor="">
                                    Tên chủ thẻ
                                </label>
                                <input
                                    id="owner"
                                    name="owner"
                                    value={CheckoutPayment.values.owner}
                                    onChange={CheckoutPayment.handleChange}
                                    className={cx('form-group-item-input')}
                                    type="text"
                                    placeholder="Nhập tên chủ thẻ"
                                />
                            </div>
                            <div className={cx('form-group-item')}>
                                <label className={cx('form-group-item-label')} htmlFor="">
                                    Số thẻ
                                </label>

                                <div className={cx('form-group-item-input-append')}>
                                    <span className={cx('form-group-item-input-append-icon')}>
                                        <Card />
                                    </span>
                                </div>
                                <input
                                    type="digits"
                                    placeholder="Nhập số thẻ"
                                    maxlength="19"
                                    minlength="14"
                                    id="numberCard"
                                    name="numberCard"
                                    value={CheckoutPayment.values.numberCard}
                                    onChange={CheckoutPayment.handleChange}
                                    className={cx('form-group-item-input', 'number')}
                                />
                            </div>
                            <div className={cx('form-group-item')}>
                                <label className={cx('form-group-item-label')} htmlFor="">
                                    Ngày hết hạn
                                </label>
                                <div className={cx('form-group-item-datetime')}>
                                    <input
                                        id="dateExpired"
                                        name="dateExpired"
                                        value={CheckoutPayment.values.dateExpired}
                                        onChange={CheckoutPayment.handleChange}
                                        className={cx('form-group-item-input')}
                                        type="date"
                                    />
                                    {/* <select className={cx('form-group-item-input')}></select> */}
                                </div>
                            </div>
                        </div>
                        <div className={cx('form-check-default')}>
                            <input type="checkbox" className={cx('form-check-default-checkbox')} />
                            <span className={cx('form-check-default-staysigned')}>Đặt làm mặc định</span>
                        </div>
                        <div className={cx('form-group-submit')}>
                            <Button type="submit" primary rounded login>
                                Kiểm tra đơn hàng
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Payment;
