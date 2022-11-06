import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import Button from '~/components/Button';
import CartItem from '~/components/CartItem';
import { Edit } from '~/components/Icons';
import { cartsRemainingSelector } from '~/redux/selector';
import styles from './Review.module.scss';
const cx = classNames.bind(styles);

function Review() {
    const cartList = useSelector(cartsRemainingSelector);

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
                                    <span  className={cx('checkout-address-item-address-info')}>
                                        64 ong ich khiem
                                    </span>
                                    <br></br>
                                    <span  className={cx('checkout-address-item-address-info')}>
                                        HCM
                                    </span>
                                    <br></br>
                                    <span  className={cx('checkout-address-item-address-info')}>
                                        Da Nang
                                    </span>
                                    <span  className={cx('checkout-address-item-address-info')}>
                                        550000
                                    </span>
                                    <br></br>
                                    <span  className={cx('checkout-address-item-address-info')}>
                                        Vietnam
                                    </span>
                                    <br></br>
                                    <span  className={cx('checkout-address-item-address-info')}>
                                        0123456
                                    </span>
                                </div>
                                <div className={cx('checkout-address-item-action')}>
                                    <button className={cx('checkout-address-item-button')}>
                                        <span className={cx('checkout-address-item-button-icon')}>
                                            <Edit />
                                        </span>
                                        Edit
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={cx('checkout-payment')}>
                            <h2 className={cx('checkout-payment-title')}>Phương thức thanh toán</h2>
                            <div className={cx('checkout-payment-method')}>
                                <div className={cx('checkout-payment-method-icon')}>
                                    <span className={cx('checkout-cardPayment-section-channelItem-icon')}>
                                        <img
                                            src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-momo.svg"
                                            alt=""
                                            className={cx('checkout-cardPayment-section-channelItem-icon-data')}
                                        />
                                    </span>
                                </div>
                                <div className={cx('checkout-payment-method-content')}>
                                    <p className={cx('checkout-payment-method-content-text')}>
                                        Momo …5239
                                        <br />
                                        Exp: 08 / 2026
                                    </p>
                                </div>
                            </div>
                            <div className={cx('checkout-address-item-action')}>
                                <button className={cx('checkout-address-item-button')}>
                                    <span className={cx('checkout-address-item-button-icon')}>
                                        <Edit />
                                    </span>
                                    Edit
                                </button>
                            </div>
                        </div>
                        <div className={cx('checkout-cardPayment')}>
                            <form action="" className={cx('checkout-form')}>
                                <div className={cx('checkout-cardPayment-section')}>
                                    <fieldset className={cx('checkout-cardPayment-section-field')}>
                                        <legend className={cx('checkout-cardPayment-section-tittle')}>Tổng đơn hàng</legend>
                                        <ul className={cx('checkout-cardPayment-section-chanelList')}>
                                            <li className={cx('checkout-cardPayment-section-channelItem')}>
                                                <input
                                                    type="radio"
                                                    id="radio"
                                                    className={cx('checkout-cardPayment-section-channelItem-radio')}
                                                />
                                                <label htmlFor="radio" className={cx('checkout-cardPayment-section-channelItem-iconList')}>
                                                    <span className={cx('checkout-cardPayment-section-channelItem-icon')}>
                                                        <img
                                                            src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-momo.svg"
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
                                                <label htmlFor="radio" className={cx('checkout-cardPayment-section-channelItem-iconList')}>
                                                    <span className={cx('checkout-cardPayment-section-channelItem-icon')}>
                                                        <img
                                                            src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-credit.svg"
                                                            alt=""
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
                                                            {/* {getTotal().totalPrice.toLocaleString('es-ES')}₫ */}
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
                                                            {/* Tổng ({getTotal().totalQuantity}) */}
                                                        </h1>
                                                    </th>
                                                    <td className={cx('checkout-cardPayment-section-priceSummary-sumContent')}>
                                                        <h1 className={cx('checkout-cardPayment-section-priceSummary-sumContent-text')}>
                                                            {/* {getTotal().totalPrice.toLocaleString('es-ES')}₫ */}
                                                        </h1>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className={cx('checkout-cardPayment-section-priceSummary-submit')}>
                                            <Button primary login rounded>
                                                Thanh toán
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={cx('cartListitem')}>
                    {cartList.map((item) => (
                        <CartItem
                            key={item.id}
                            idShop={item.idShop}
                            shopName={item.shopName}
                            shopImage={item.shopImage}
                            productItem={item.productItem}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Review;
