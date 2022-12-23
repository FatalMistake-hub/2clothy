import classNames from 'classnames/bind';
import styles from './Payment.module.scss';
import Button from '~/components/Button';
import { Card } from '~/components/Icons';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import CheckOutSlice from '~/redux/CheckOutSlice';
import { useEffect } from 'react';
import * as authServices from '~/services/authService';
import { authRemainingSelector } from '~/redux/selector';
import AuthSlice from '~/redux/AuthSlice';
import { createAxios } from '~/services/createInstance';
const cx = classNames.bind(styles);

function Payment() {
    const user = useSelector(authRemainingSelector);
    const currentUser = user?.login.currentUser;
    const accessToken = currentUser?.accessToken;
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
            const bank = dataBankType.find((item) => {
                if (item.bankName == values.bankname) {
                    return item.id;
                }
            });
            const data = {
                type: 'VNPAY',
                info: {
                    Id: userBank?.id,
                    BankName: values.bankname,
                    BankNumber: values.numberCard,
                    BankCode: bank.bankCode,
                    AccountName: values.owner,
                    ExpiredDate: values.dateExpired,
                    StartedDate: values.dateStarted,
                    BankTypeId: bank.id,
                },
            };
            console.log(data);

            dispatch(CheckOutSlice.actions.handlePayment(data));
            const fetchApi = async () => {
                let { BankName, ...dataUpdateAPi } = data.info;
                let { Id, ...dataAddAPi } = data.info;

                if (!userBank) {
                    const res = await authServices.addBank(dataAddAPi, accessToken, axiosJWT);
                    setResBank(res);
                } else {
                    const res = await authServices.updateBank(dataUpdateAPi, accessToken, axiosJWT);
                    setResBank(res);
                }
            };
            fetchApi();
        },
    });
    const [resBank, setResBank] = useState([]);
    useEffect(() => {
        console.log(resBank);
        if (resBank.status == 200) {
            navigate('/review');
        }
    }, [resBank]);

    const [dataBankType, setDataBankType] = useState([]);
    const [userBank, setUserBank] = useState([]);
    let axiosJWT = createAxios(currentUser, dispatch, AuthSlice.actions.loginSuccess);
    useEffect(() => {
        const fetchApi = async () => {
            const dataItem = await authServices.getTypeBanks(accessToken, axiosJWT);
            const dataUserBank = await authServices.getUserBanks(accessToken, axiosJWT);
            setDataBankType(dataItem);
            CheckoutPayment.values.bankname = dataUserBank[0]?.bankName;
            CheckoutPayment.values.numberCard = dataUserBank[0]?.bankNumber;
            CheckoutPayment.values.owner = dataUserBank[0]?.accountName;
            CheckoutPayment.values.dateExpired = dataUserBank[0]?.expiredDate;
            CheckoutPayment.values.dateStarted = dataUserBank[0]?.startedDate;
            setUserBank(dataUserBank[0]);
        };
        fetchApi();
    }, []);
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

                                <select
                                    id="bankname"
                                    name="bankname"
                                    // value={CheckoutPayment.values.bankname}
                                    onChange={CheckoutPayment.handleChange}
                                    className={cx('form-group-item-input')}
                                    type="text"
                                    placeholder="Nhập tên ngân hàng"
                                >
                                    {!userBank && <option value="" label="- - - - Chọn ngân hàng thanh toán - - - -" selected />}
                                    {dataBankType?.map((data, i) => (
                                        <option
                                            key={i}
                                            value={data.bankName}
                                            label={data.bankName}
                                            selected={data.bankCode === userBank?.bankCode}
                                        ></option>
                                    ))}
                                </select>
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
                                <div className={cx('form-group-item-datetime')}>
                                    <p>
                                        <label className={cx('form-group-item-label')} htmlFor="">
                                            Ngày bắt đầu:
                                        </label>
                                        <label className={cx('form-group-item-label')} htmlFor="">
                                            Ngày hết hạn:
                                        </label>
                                    </p>
                                    <div className={cx('form-group-item-datetime-box')}>
                                        <input
                                            id="dateStarted"
                                            name="dateStarted"
                                            value={CheckoutPayment.values.dateStarted}
                                            onChange={CheckoutPayment.handleChange}
                                            className={cx('form-group-item-input')}
                                            type="date"
                                        />
                                        <input
                                            id="dateExpired"
                                            name="dateExpired"
                                            value={CheckoutPayment.values.dateExpired}
                                            onChange={CheckoutPayment.handleChange}
                                            className={cx('form-group-item-input')}
                                            type="date"
                                        />
                                    </div>
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
