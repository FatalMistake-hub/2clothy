import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import Button from '~/components/Button';
import CartItem from '~/components/CartItem';
import { Edit } from '~/components/Icons';
import { cartsRemainingSelector, authRemainingSelector, checkOutRemainingSelector } from '~/redux/selector';
import styles from './Review.module.scss';
import { useNavigate } from 'react-router-dom';
import AuthSlice from '~/redux/AuthSlice';
import CartSlice from '~/redux/CartSlice';
import { createAxios } from '~/services/createInstance';
import { checkOutOrderCod, checkOutOrderVnPay, updateBank } from '~/services/authService';
import CheckOutSlice from '~/redux/CheckOutSlice';

const cx = classNames.bind(styles);

function Review() {
    const cartList = useSelector(cartsRemainingSelector);
    const checkOut = useSelector(checkOutRemainingSelector);
    const user = useSelector(authRemainingSelector);
    const getTotal = () => {
        let totalQuantity = 0;
        let totalPrice = 0;
        cartList.forEach((item) => {
            item.orderDetails.forEach((product) => {
                totalQuantity += product.quantity;
                totalPrice += product.price * product.quantity;
            });
            //   totalQuantity += item.quantity
            //   totalPrice += item.price * item.quantity
        });
        return { totalPrice, totalQuantity };
    };
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentUser = user?.login.currentUser;
    const accessToken = currentUser?.accessToken;

    const dataOrder = [];
    if (cartList) {
        cartList?.map((item) => {
            let orderDetails = {
                ShopId: item.shopId,
                OrderDetails: [],
            };
            item.orderDetails.map((product) => {
                orderDetails.OrderDetails.push({
                    ItemId: product.itemId,
                    Quantity: product.quantity,
                });
            });

            dataOrder.push(orderDetails);
        });
    }
    const dataCheckOut = {
        Address: checkOut.shipping.Address,
        City: checkOut.shipping.City,
        BankCode: checkOut.payment.info.BankCode,
        // Bank: checkOut.payment.info.BankName,
        Country: checkOut.shipping.Country,
        PaymentId: 2,
        PhoneNumber: checkOut.shipping.PhoneNumber,
        Total: getTotal().totalPrice.toString(),
        Details: dataOrder,
    };
    const handleCheckOut = async () => {
        let axiosJWT = createAxios(currentUser, dispatch, AuthSlice.actions.loginSuccess);
        let res;
        if (checkOut.paymentType !== 'cod') {
            res = await checkOutOrderVnPay(dataCheckOut, dispatch, accessToken, axiosJWT);
        } else {
            const { BankCode, ...dataCOD } = dataCheckOut;
            res = await checkOutOrderCod(dataCOD, dispatch, accessToken, axiosJWT);
        }
        console.log(res);
        if (res.status == 200 && checkOut.paymentType !== 'cod') {
            window.location.href = res.data;
        } else {
            navigate('/completedpayment');
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <div className={cx('checkout')}>
                    <h1 className={cx('checkout-tittle')}>Vui lòng xác nhận và thanh toán đơn đặt hàng của bạn</h1>
                    <div className={cx('checkout-box')}>
                        <div className={cx('checkout-address')}>
                            <h2 className={cx('checkout-address-tittle')}>Địa chỉ giao hàng</h2>
                            <div className={cx('checkout-address-item')}>
                                <div className={cx('checkout-address-item-address')}>
                                    <span className={cx('checkout-address-item-address-name')}>Quach Nhat</span>
                                    <br></br>
                                    <span className={cx('checkout-address-item-address-info')}>{checkOut.shipping.Address}</span>
                                    <br></br>
                                    <span className={cx('checkout-address-item-address-info')}>{checkOut.shipping.City}</span>
                                    <br></br>
                                    <span className={cx('checkout-address-item-address-info')}>{checkOut.shipping.Country}</span>
                                    <br></br>

                                    <span className={cx('checkout-address-item-address-info')}>{checkOut.shipping.PhoneNumber}</span>
                                </div>
                                <div className={cx('checkout-address-item-action')}>
                                    {/* <button className={cx('checkout-address-item-button')}>
                                        <span className={cx('checkout-address-item-button-icon')}>
                                            <Edit />
                                        </span>
                                        Edit
                                    </button> */}
                                </div>
                            </div>
                        </div>
                        <div className={cx('checkout-payment')}>
                            <h2 className={cx('checkout-payment-title')}>Phương thức thanh toán</h2>
                            <div className={cx('checkout-payment-method')}>
                                {checkOut.paymentType !== 'cod' ? (
                                    <>
                                        <div className={cx('checkout-payment-method-icon')}>
                                            <span className={cx('checkout-cardPayment-section-channelItem-icon')}>
                                                <img
                                                    src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-vnpay.png"
                                                    loading="lazy"
                                                    className={cx('checkout-cardPayment-section-channelItem-icon-data')}
                                                />
                                            </span>
                                        </div>
                                        <div className={cx('checkout-payment-method-content')}>
                                            <p className={cx('checkout-payment-method-content-text')}>
                                                {checkOut.payment.type}
                                                …5239
                                                <br />
                                                Exp: {checkOut.payment.info.DateExpired}
                                            </p>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className={cx('checkout-payment-method-icon')}>
                                            <span className={cx('checkout-cardPayment-section-channelItem-icon')}>
                                                <img
                                                    src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-credit.svg"
                                                    loading="lazy"
                                                    className={cx('checkout-cardPayment-section-channelItem-icon-data')}
                                                />
                                            </span>
                                        </div>
                                        <div className={cx('checkout-payment-method-content')}>
                                            <p className={cx('checkout-payment-method-content-text')}>Thanh toán khi nhận hàng</p>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className={cx('checkout-address-item-action')}>
                                {/* <button className={cx('checkout-address-item-button')}>
                                    <span className={cx('checkout-address-item-button-icon')}>
                                        <Edit />
                                    </span>
                                    Edit
                                </button> */}
                            </div>
                        </div>
                        <div className={cx('checkout-cardPayment')}>
                            <div action="" className={cx('checkout-form')}>
                                <div className={cx('checkout-cardPayment-section')}>
                                    <fieldset className={cx('checkout-cardPayment-section-field')}>
                                        <legend className={cx('checkout-cardPayment-section-tittle')}>Tổng đơn hàng</legend>
                                        <ul className={cx('checkout-cardPayment-section-chanelList')}>
                                            <li className={cx('checkout-cardPayment-section-channelItem')}>
                                                <input
                                                    type="radio"
                                                    id="vnpay"
                                                    checked={checkOut.paymentType == 'vnpay'}
                                                    className={cx('checkout-cardPayment-section-channelItem-radio')}
                                                />
                                                <label htmlFor="vnpay" className={cx('checkout-cardPayment-section-channelItem-iconList')}>
                                                    <span className={cx('checkout-cardPayment-section-channelItem-icon')}>
                                                        <img
                                                            src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-vnpay.png"
                                                            alt=""
                                                            className={cx('checkout-cardPayment-section-channelItem-icon-data')}
                                                        />
                                                    </span>
                                                </label>
                                            </li>
                                            <li className={cx('checkout-cardPayment-section-channelItem')}>
                                                <input
                                                    type="radio"
                                                    id="cod"
                                                    checked={checkOut.paymentType == 'cod'}
                                                    className={cx('checkout-cardPayment-section-channelItem-radio')}
                                                />
                                                <label htmlFor="cod" className={cx('checkout-cardPayment-section-channelItem-iconList')}>
                                                    <span className={cx('checkout-cardPayment-section-channelItem-icon')}>
                                                        <img
                                                            src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-credit.svg"
                                                            loading="lazy"
                                                            className={cx('checkout-cardPayment-section-channelItem-icon-data')}
                                                        />
                                                    </span>
                                                </label>
                                            </li>
                                        </ul>
                                    </fieldset>
                                    <div className={cx('checkout-cardPayment-section-priceSummary')}>
                                        <table className={cx('checkout-cardPayment-section-priceSummary-table')}>
                                            <tbody className={cx('checkout-cardPayment-section-priceSumary-tbody')}>
                                                <tr>
                                                    <th className={cx('checkout-cardPayment-section-priceSummary-rowName')}>
                                                        Tổng số mặt hàng
                                                    </th>
                                                    <td className={cx('checkout-cardPayment-section-priceSummary-rowcontent')}>
                                                        <span className={cx('checkout-cardPayment-section-priceSummary-rowcontent-text')}>
                                                            {getTotal().totalPrice.toLocaleString('es-ES')}₫
                                                        </span>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td colspan="2">
                                                        <div className={cx('checkout-cardPayment-section-priceSummary-linebreak')}></div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className={cx('checkout-cardPayment-section-priceSummary-sumTittle')}>
                                                        <h1 className={cx('checkout-cardPayment-section-priceSummary-sumTittle-text')}>
                                                            Tổng ({getTotal().totalQuantity})
                                                        </h1>
                                                    </th>
                                                    <td className={cx('checkout-cardPayment-section-priceSummary-sumContent')}>
                                                        <h1 className={cx('checkout-cardPayment-section-priceSummary-sumContent-text')}>
                                                            {getTotal().totalPrice.toLocaleString('es-ES')}₫
                                                        </h1>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className={cx('checkout-cardPayment-section-priceSummary-submit')}>
                                            <Button
                                                primary
                                                login
                                                rounded
                                                // rightIcon={
                                                //     <img
                                                //         src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-vnpay.png"
                                                //         loading="lazy"
                                                //         className={cx('checkout-cardPayment-section-channelItem-icon-data')}
                                                //     />
                                                // }
                                                onClick={handleCheckOut}
                                            >
                                                Thanh toán
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('cartListitem')}>
                    {cartList.map((item, i) => (
                        <CartItem
                            key={i}
                            shopId={item.shopId}
                            shopName={item.shopName}
                            shopImage={item.shopImage}
                            orderDetails={item.orderDetails}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Review;
