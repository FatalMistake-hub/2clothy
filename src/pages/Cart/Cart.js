import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '~/components/Button';
import CartItem from '~/components/CartItem/CartItem';

import { authRemainingSelector, cartsRemainingSelector } from '~/redux/selector';


import styles from './Cart.module.scss';
// import cartSlice from './cartSlice';
const cx = classNames.bind(styles);
function Cart() {
    const cartList = useSelector(cartsRemainingSelector);

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
    
    const handlePaymnet = () => {
        // dispatch(CartSlice.actions.handleCart([]));
    };
    return (
        <>
            {cartList.length ? (
                <div className={cx('wrapper')}>
                    <div className={cx('checkout')}>
                        <div className={cx('checkout-header')}>
                            <div className={cx('checkout-header-sumItem')}>
                                <h1 onBlur={(e) => e.preventDefault()} className={cx('checkout-header-sumItem-text')}>
                                    {getTotal().totalQuantity} sản phẩm trong giỏ hàng
                                </h1>
                            </div>
                            <div className={cx('checkout-header-gohome')}>
                                <a href="" className={cx('checkout-header-gohome-link')}>
                                    Tiếp tục mua sắm
                                </a>
                            </div>
                        </div>
                        <div className={cx('checkout-body')}>
                            <div className={cx('checkout-body-box')}>
                                <div className={cx('checkout-body-cartListitem')}>
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
                                <div className={cx('checkout-body-cartPayment')}>
                                    <div className={cx('checkout-body-cartPayment-box')}>
                                        {/* <form action="" className={cx('checkout-form')}> */}
                                        <div className={cx('checkout-cardPayment-section')}>
                                            <fieldset className={cx('checkout-cardPayment-section-field')}>
                                                <legend className={cx('checkout-cardPayment-section-tittle')}>Hình thức thanh toán</legend>
                                                <ul className={cx('checkout-cardPayment-section-chanelList')}>
                                                    <li className={cx('checkout-cardPayment-section-channelItem')}>
                                                        <input
                                                            type="radio"
                                                            id="radio"
                                                            className={cx('checkout-cardPayment-section-channelItem-radio')}
                                                        />
                                                        <label
                                                            htmlFor="radio"
                                                            className={cx('checkout-cardPayment-section-channelItem-iconList')}
                                                        >
                                                            {/* <span className={cx('checkout-cardPayment-section-channelItem-icon')}>
                                                                <img
                                                                    src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-momo.svg"
                                                                    loading="lazy"
                                                                    className={cx('checkout-cardPayment-section-channelItem-icon-data')}
                                                                />
                                                            </span> */}
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
                                                            id="radio"
                                                            className={cx('checkout-cardPayment-section-channelItem-radio')}
                                                        />
                                                        <label
                                                            htmlFor="radio"
                                                            className={cx('checkout-cardPayment-section-channelItem-iconList')}
                                                        >
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
                                                                <span
                                                                    className={cx(
                                                                        'checkout-cardPayment-section-priceSummary-rowcontent-text',
                                                                    )}
                                                                >
                                                                    {getTotal().totalPrice.toLocaleString('es-ES')}₫
                                                                </span>
                                                            </td>
                                                        </tr>
                                                        {/* <tr>
                                                                <th className={cx('checkout-cardPayment-section-priceSummary-rowName')}>
                                                                    Shipping
                                                                </th>
                                                                <td className={cx('checkout-cardPayment-section-priceSummary-rowcontent')}>
                                                                    <span
                                                                        className={cx(
                                                                            'checkout-cardPayment-section-priceSummary-rowcontent-text',
                                                                        )}
                                                                    >
                                                                        674,082₫
                                                                    </span>
                                                                </td>
                                                            </tr> */}
                                                        <tr>
                                                            <td colspan="2">
                                                                <div
                                                                    className={cx('checkout-cardPayment-section-priceSummary-linebreak')}
                                                                ></div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th className={cx('checkout-cardPayment-section-priceSummary-sumTittle')}>
                                                                <h1
                                                                    className={cx(
                                                                        'checkout-cardPayment-section-priceSummary-sumTittle-text',
                                                                    )}
                                                                >
                                                                    Tổng ({getTotal().totalQuantity})
                                                                </h1>
                                                            </th>
                                                            <td className={cx('checkout-cardPayment-section-priceSummary-sumContent')}>
                                                                <h1
                                                                    className={cx(
                                                                        'checkout-cardPayment-section-priceSummary-sumContent-text',
                                                                    )}
                                                                >
                                                                    {getTotal().totalPrice.toLocaleString('es-ES')}₫
                                                                </h1>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className={cx('checkout-cardPayment-section-priceSummary-submit')}>
                                                    <Button onClick={handlePaymnet} primary login rounded>
                                                        Thanh toán
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* </form> */}
                                    </div>
                                </div>
                                <div className={cx('checkout-body-favourite')}>
                                    <p className={cx('checkout-body-favourite-tittle')}>Tìm kiếm thêm từ mục yêu thích của bạn?</p>
                                    <div href="" className={cx('checkout-body-favourite-link')}>
                                        <Button rounded large>
                                            Xem mục yêu thích của bạn
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={cx('wrapper')}>
                    <div className={cx('checkout')}>
                        <div className={cx('checkout-body')}>
                            <div className={cx('checkout-body-box-emtyCart')}>
                                <div className={cx('checkout-body-emtyCart')}>
                                    <h1 className={cx('checkout-body-emtyCart-text')}>Không có sản phẩm nào trong giỏ hàng của bạn.</h1>
                                </div>
                            </div>
                            <div className={cx('checkout-body-favourite')}>
                                <p className={cx('checkout-body-favourite-tittle')}>Tìm kiếm thêm từ mục yêu thích của bạn?</p>
                                <div href="" className={cx('checkout-body-favourite-link')}>
                                    <Button rounded large>
                                        Xem mục yêu thích của bạn
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Cart;
