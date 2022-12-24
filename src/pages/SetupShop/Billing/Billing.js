import classNames from 'classnames/bind';
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
import { authRemainingSelector, setupShopRemainingSelector } from '~/redux/selector';
import AuthSlice from '~/redux/AuthSlice';
import { createAxios } from '~/services/createInstance';
import styles from './Billing.module.scss';

const cx = classNames.bind(styles);

function Billing() {
    const user = useSelector(authRemainingSelector);
    const shopInfo = useSelector(setupShopRemainingSelector);

    const currentUser = user?.login.currentUser;
    const accessToken = currentUser?.accessToken;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const ShopPayment = useFormik({
        initialValues: {},
        validationSchema: Yup.object({
            bankname: Yup.string().required('Bắt buộc!'),
            owner: Yup.string().required('Bắt buộc!'),
            numberCard: Yup.string().required('Bắt buộc!'),
            dateExpired: Yup.string().required('Bắt buộc!'),
        }),
        onSubmit: (values) => {
            //bank
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

            // dispatch(CheckOutSlice.actions.handlePayment(data));
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
            const fetchApiAddShop = async () => {
                const dataShop = {
                    Name: shopInfo.reference.name,
                    Address: shopInfo.info.Address,
                    PhoneNumber: shopInfo.info.PhoneNumber,
                   p Description: shopInfo.info.Description,
                    Paths: shopInfo.info.Paths,
                    // "BankNumber": 560100018989,
                    // "BankName":"BIDV"
                };
                const res = await authServices.addShop(dataShop, accessToken, axiosJWT);
                setResShop(res);
                console.log(dataShop);
            };
            fetchApiAddShop();
            //add shop
        },
    });
    const [resBank, setResBank] = useState([]);
    const [resShop, setResShop] = useState([]);
    useEffect(() => {
        console.log(resBank);
        if (resBank.status == 200&&resShop.status==200) {
            navigate('/completedpayment');
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
            ShopPayment.values.bankname = dataUserBank[0]?.bankName;
            ShopPayment.values.numberCard = dataUserBank[0]?.bankNumber;
            ShopPayment.values.owner = dataUserBank[0]?.accountName;
            ShopPayment.values.dateExpired = dataUserBank[0]?.expiredDate;
            ShopPayment.values.dateStarted = dataUserBank[0]?.startedDate;
            setUserBank(dataUserBank[0]);
        };
        fetchApi();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <form onSubmit={ShopPayment.handleSubmit}>
                <div className={cx('billing')}>
                    <div className={cx('billing-title')}>
                        <h1 className={cx('billing-title-text')}>Thiết lập thanh toán</h1>
                        <div className={cx('billing-help')}>Hãy cho chúng tôi biết cách bạn muốn thanh toán hóa đơn 2Clothy của mình.</div>
                    </div>
                    <div className={cx('billing-container')}>
                        <div className={cx('billing-container-box')}>
                            <div className={cx('billing-form')}>
                                <div className={cx('billing-form-body')}>
                                    {/* <div className={cx('billing-form-creditcard')}>
                                    <div className={cx('billing-form-creditcard-title')}>Add a credit card</div>
                                    <div className={cx('billing-form-creditcard-item')}>
                                        <div className={cx('billing-form-creditcard-item-porperties')}>Card number &nbsp;*</div>
                                        <input type="text" className={cx('billing-form-creditcard-item-input')} />
                                    </div>
                                    <div className={cx('billing-form-creditcard-item')}>
                                        <div className={cx('billing-form-creditcard-item-porperties')}>Card number &nbsp;*</div>
                                        <input type="text" className={cx('billing-form-creditcard-item-input')} />
                                    </div>
                                    <div className={cx('billing-form-creditcard-item')}>
                                        <div className={cx('billing-form-creditcard-item-porperties')}>Card number &nbsp;*</div>
                                        <input type="text" className={cx('billing-form-creditcard-item-input')} />
                                    </div>
                                </div>
                                <div className={cx('billing-form-address')}>
                                    <div className={cx('billing-form-address-title')}>Billing address</div>
                                    <div className={cx('billing-form-address-item')}>
                                        <div className={cx('billing-form-address-item-porperties')}>Country</div>
                                        <input type="text" className={cx('billing-form-address-item-input')} />
                                    </div>
                                    <div className={cx('billing-form-address-item')}>
                                        <div className={cx('billing-form-address-item-porperties')}>Country</div>
                                        <input type="text" className={cx('billing-form-address-item-input')} />
                                    </div>
                                    <div className={cx('billing-form-address-item')}>
                                        <div className={cx('billing-form-address-item-porperties')}>Country</div>
                                        <input type="text" className={cx('billing-form-address-item-input')} />
                                    </div>
                                </div> */}
                                    <div className={cx('billing-box')}>
                                        <div className={cx('billing-check')}>
                                            <input type="radio" id="radio" className={cx('billing-check-radio')} />
                                            <div className={cx('billing-check-group')}>
                                                <p className={cx('billing-check-name')}>Thẻ ngân hàng </p>
                                                <label htmlFor="radio" className={cx('billing-check-iconList')}>
                                                    <span className={cx('billing-check-icon')}>
                                                        <img
                                                            src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-vnpay.png"
                                                            loading="lazy"
                                                            className={cx('billing-check-icon-data')}
                                                        />
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className={cx('billing-group')}>
                                            <div className={cx('billing-group-item')}>
                                                <label className={cx('billing-group-item-label')} htmlFor="">
                                                    Ngân hàng
                                                </label>

                                                <select
                                                    id="bankname"
                                                    name="bankname"
                                                    value={ShopPayment.values.bankname}
                                                    onChange={ShopPayment.handleChange}
                                                    className={cx('billing-group-item-input')}
                                                    type="text"
                                                    placeholder="Nhập tên ngân hàng"
                                                >
                                                    {!userBank && (
                                                        <option value="" label="- - - - Chọn ngân hàng thanh toán - - - -" selected />
                                                    )}
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
                                            <div className={cx('billing-group-item')}>
                                                <label className={cx('billing-group-item-label')} htmlFor="">
                                                    Tên chủ thẻ
                                                </label>
                                                <input
                                                    id="owner"
                                                    name="owner"
                                                    value={ShopPayment.values.owner}
                                                    onChange={ShopPayment.handleChange}
                                                    className={cx('billing-group-item-input')}
                                                    type="text"
                                                    placeholder="Nhập tên chủ thẻ"
                                                />
                                            </div>
                                            <div className={cx('billing-group-item')}>
                                                <label className={cx('billing-group-item-label')} htmlFor="">
                                                    Số thẻ
                                                </label>

                                                <div className={cx('billing-group-item-input-append')}>
                                                    <span className={cx('billing-group-item-input-append-icon')}>
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
                                                    value={ShopPayment.values.numberCard}
                                                    onChange={ShopPayment.handleChange}
                                                    className={cx('billing-group-item-input', 'number')}
                                                />
                                            </div>
                                            <div className={cx('billing-group-item')}>
                                                <div className={cx('billing-group-item-datetime')}>
                                                    <p>
                                                        <label className={cx('billing-group-item-label')} htmlFor="">
                                                            Ngày bắt đầu:
                                                        </label>
                                                        <label className={cx('billing-group-item-label')} htmlFor="">
                                                            Ngày hết hạn:
                                                        </label>
                                                    </p>
                                                    <div className={cx('billing-group-item-datetime-box')}>
                                                        <input
                                                            id="dateStarted"
                                                            name="dateStarted"
                                                            value={ShopPayment.values.dateStarted}
                                                            onChange={ShopPayment.handleChange}
                                                            className={cx('billing-group-item-input')}
                                                            type="date"
                                                        />
                                                        <input
                                                            id="dateExpired"
                                                            name="dateExpired"
                                                            value={ShopPayment.values.dateExpired}
                                                            onChange={ShopPayment.handleChange}
                                                            className={cx('billing-group-item-input')}
                                                            type="date"
                                                        />
                                                    </div>
                                                    {/* <select className={cx('billing-group-item-input')}></select> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('billing-check-default')}>
                                            {/* <input type="checkbox" className={cx('billing-check-default-checkbox')} />
                                        <span className={cx('billing-check-default-staysigned')}>Đặt làm mặc định</span> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('billing-notice')}>
                                <div className={cx('billing-notice-header')}>
                                    <span className={cx('billing-notice-header-text')}>Một số lưu ý về thanh toán:</span>
                                </div>
                                <div className={cx('billing-notice-body')}>
                                    <p className={cx('billing-notice-body-content')}>
                                        - Tài khoản ngân hàng của bạn đã đăng ký tại <strong>2Clothy</strong> sẽ đồng nhất với tài khoản
                                        ngân hàng cho cửa hàng của bạn.
                                    </p>
                                    <p className={cx('billing-notice-body-content')}>
                                        - Thêm ngân hàng nếu bạn <strong>chưa thanh toán</strong> lần nào tại <strong>2Clothy</strong>
                                    </p>
                                    <p className={cx('billing-notice-body-content')}>
                                        - Có thể sửa thông tin của ngân hàng nếu bạn <strong>đã từng thanh toán</strong> tại{' '}
                                        <strong>2Clothy</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('billing-action')}>
                        <Button primary rounded large type="submit">
                            Hoàn tất đăng ký
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Billing;
