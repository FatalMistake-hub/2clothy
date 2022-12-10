import classNames from 'classnames/bind';
import styles from './CreditCards.module.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authRemainingSelector } from '~/redux/selector';
import { getUser, getUserBanks } from '~/services/authService';
import { createAxios } from '~/services/createInstance';

import AuthSlice from '~/redux/AuthSlice';

const cx = classNames.bind(styles);
function CreditCards() {
    const user = useSelector(authRemainingSelector);
    const currentUser = user?.login.currentUser;
    const accessToken = currentUser?.accessToken;
    const dispatch = useDispatch();
    const [dataUserBank, setDataUserBank] = useState();
    useEffect(() => {
        const fetchApi = async () => {
            let axiosJWT = createAxios(currentUser, dispatch, AuthSlice.actions.loginSuccess);
            const result = await getUserBanks(accessToken, axiosJWT);
            console.log(result);
            setDataUserBank(result[0]);
        };
        fetchApi();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('card')}>
                <div className={cx('card-notice')}>
                    <p className={cx('card-notice-text')}>Bạn chỉ có thể thêm thẻ tín dụng mới khi thanh toán.</p>
                </div>
                <div className={cx('card-container')}>
                    <div className={cx('card-item')}>
                        <div className={cx('card-item-content')}>
                            <h3 className={cx('card-item-content-tittle')}>
                                <img
                                    src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-vnpay.png"
                                    loading="lazy"
                                    className={cx('card-item-content-tittle-icon')}
                                />
                                VnPay kết thúc với {dataUserBank?.bankNumber.slice(-4,dataUserBank?.bankNumber.length)}
                            </h3>
                            <ul className={cx('card-item-content-infoList')}>
                                <li className={cx('card-item-content-infoItem')}>
                                    <label className={cx('card-item-content-infoItem-porperties')}>Ngày hết hạn</label>
                                    <span className={cx('card-item-content-infoItem-content')}>{dataUserBank?.expireDate}</span>
                                </li>
                                <li className={cx('card-item-content-infoItem')}>
                                    <label className={cx('card-item-content-infoItem-porperties')}>Tên ngân hàng</label>
                                    <span className={cx('card-item-content-infoItem-content')}>{dataUserBank?.bankCode}</span>
                                </li>
                                <li className={cx('card-item-content-infoItem')}>
                                    <label className={cx('card-item-content-infoItem-porperties')}>Tên trên thẻ</label>
                                    <span className={cx('card-item-content-infoItem-content')}>{dataUserBank?.accountName}</span>
                                </li>
                                <li className={cx('card-item-content-infoItem')}>
                                    <label className={cx('card-item-content-infoItem-porperties')}>Địa chỉ thanh toán</label>
                                    <div className={cx('card-item-content-infoItem-address')}>
                                        <span className={cx('card-item-content-infoItem-address-info')}>64 Ong Ich Duong, Cam Le</span>

                                        <span className={cx('card-item-content-infoItem-address-info')}>DA NANG</span>

                                        <span className={cx('card-item-content-infoItem-address-info')}>Da Nang 550000</span>
                                        <span className={cx('card-item-content-infoItem-address-info')}>Vietnam</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('card-item-action')}>
                            <button className={cx('card-item-action-edit')}>Cập nhật</button>
                            <button className={cx('card-item-action-remove')}>Xoá</button>
                            <label className={cx('card-item-action-default')}>
                                <input type="checkbox" className={cx('card-item-action-default-checkbox')} />
                                <span className={cx('card-item-action-default-text')}>Mặc định</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreditCards;
