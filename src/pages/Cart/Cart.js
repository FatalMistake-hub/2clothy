import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { Visa } from '~/components/Icons';

import styles from './Cart.module.scss';
const cx = classNames.bind(styles);
function Cart() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('checkout')}>
                <div className={cx('checkout-header')}>
                    <div className={cx('checkout-header-sumItem')}>
                        <h1 className={cx('checkout-header-sumItem-text')}>3 items in your cart</h1>
                    </div>
                    <div className={cx('checkout-header-gohome')}>
                        <a href="" className={cx('checkout-header-gohome-link')}>
                            Keep shopping
                        </a>
                    </div>
                </div>
                <div className={cx('checkout-body')}>
                    <div className={cx('checkout-body-box')}>
                        {/* <div className={cx('checkout-body-emtyCart')}>
                        <h1 className={cx('checkout-body-emtyCart-text')}>Your cart is empty.</h1>
                    </div> */}
                        <div className={cx('checkout-body-cartListitem')}>
                            <div className={cx('checkout-item')}>
                                <div className={cx('checkout-item-shop')}>
                                    <div className={cx('checkout-item-shop-image')}>
                                        <a href="" className={cx('checkout-item-shop-link')}>
                                            <img
                                                src="https://i.etsystatic.com/isla/9dd42b/51354831/isla_75x75.51354831_8jzkfb9j.jpg?version=0"
                                                alt=""
                                                className={cx('checkout-item-image-content')}
                                            />
                                        </a>
                                    </div>
                                    <div className={cx('checkout-item-shop-name')}>
                                        <a href="" className={cx('checkout-item-shop-linkName')}>
                                            Goodluckstuds
                                        </a>
                                    </div>
                                </div>
                                <ul className={cx('checkout-item-productList')}>
                                    <li className={cx('checkout-item-productItem')}>
                                        <div className={cx('checkout-item-productItem-box')}>
                                            <div className={cx('checkout-item-productItem-image')}>
                                                <a href=" " className={cx('checkout-item-productItem-image-link')}>
                                                    <img
                                                        src="	https://i.etsystatic.com/14691517/c/1259/1000/737/…/f65dd2/4024893455/il_170x135.4024893455_igxo.jpg"
                                                        alt=""
                                                        className={cx('checkout-item-productItem-image-data')}
                                                    />
                                                </a>
                                            </div>
                                            <div className={cx('checkout-item-productItem-content')}>
                                                <div className={cx('checkout-item-productItem-content-box')}>
                                                    <div className={cx('productItem-infoAndaction')}>
                                                        <div className={cx('productItem-info')}>
                                                            <div className={cx('productItem-name')}>
                                                                <a href="" className={cx('productItem-name-link')}>
                                                                    Medusa Pendant Protective Necklace Gorgon Greek Mythology Silver with
                                                                    Rose Gold
                                                                </a>
                                                            </div>
                                                            <div className={cx('productItem-atribute')}>
                                                                <ul className={cx('productItem-atribute-list')}>
                                                                    <li className={cx('productItem-atribute-item')}>
                                                                        <span className={cx('productItem-atribute-item-data')}>
                                                                            Necklace length: 55 Centimeters
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className={cx('productItem-action')}>
                                                            <button className={cx('productItem-action-button')}>Save for later</button>
                                                            <button className={cx('productItem-action-button')}>Remove</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={cx('productItem-content-qtyAndPrice')}>
                                                    <div className={cx('productItem-content-quantity')}>
                                                        <select name="" id="" className={cx('productItem-content-quantity-select')}>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">jack 5m</option>
                                                        </select>
                                                    </div>
                                                    <div className={cx('productItem-content-price')}>
                                                        <p className={cx('productItem-content-price-text')}>318,037₫</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={cx('checkout-item-productItem')}>
                                        <div className={cx('checkout-item-productItem-box')}>
                                            <div className={cx('checkout-item-productItem-image')}>
                                                <a href=" " className={cx('checkout-item-productItem-image-link')}>
                                                    <img
                                                        src="	https://i.etsystatic.com/14691517/c/1243/988/419/2…/81a48f/3977237276/il_170x135.3977237276_3bea.jpg"
                                                        alt=""
                                                        className={cx('checkout-item-productItem-image-data')}
                                                    />
                                                </a>
                                            </div>
                                            <div className={cx('checkout-item-productItem-content')}>
                                                <div className={cx('checkout-item-productItem-content-box')}>
                                                    <div className={cx('productItem-infoAndaction')}>
                                                        <div className={cx('productItem-info')}>
                                                            <div className={cx('productItem-name')}>
                                                                <a href="" className={cx('productItem-name-link')}>
                                                                    Medusa stud earrings, Greek mythology, gorgon medusa, Gift present
                                                                </a>
                                                            </div>
                                                            <div className={cx('productItem-atribute')}>
                                                                <ul className={cx('productItem-atribute-list')}>
                                                                    <li className={cx('productItem-atribute-item')}>
                                                                        <span className={cx('productItem-atribute-item-data')}>
                                                                            Necklace length: 55 Centimeters
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className={cx('productItem-action')}>
                                                            <button className={cx('productItem-action-button')}>Save for later</button>
                                                            <button className={cx('productItem-action-button')}>Remove</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={cx('productItem-content-qtyAndPrice')}>
                                                    <div className={cx('productItem-content-quantity')}>
                                                        <select name="" id="" className={cx('productItem-content-quantity-select')}>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">jack 5m</option>
                                                        </select>
                                                    </div>
                                                    <div className={cx('productItem-content-price')}>
                                                        <div className={cx('productItem-content-price-box')}><p className={cx('productItem-content-price-text')}>211,936₫</p></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className={cx('checkout-item-only')}>
                                    <a href="" className={cx('checkout-item-only-link')}>
                                        Check out from only this shop
                                    </a>
                                </div>
                            </div>
                            <div className={cx('checkout-item')}>
                                <div className={cx('checkout-item-shop')}>
                                    <div className={cx('checkout-item-shop-image')}>
                                        <a href="" className={cx('checkout-item-shop-link')}>
                                            <img
                                                src="https://i.etsystatic.com/isla/5ce2c8/50761499/isla_75x75.50761499_12jerqfi.jpg?version=0"
                                                alt=""
                                                className={cx('checkout-item-image-content')}
                                            />
                                        </a>
                                    </div>
                                    <div className={cx('checkout-item-shop-name')}>
                                        <a href="" className={cx('checkout-item-shop-linkName')}>
                                            Goodluckstuds
                                        </a>
                                    </div>
                                </div>
                                <ul className={cx('checkout-item-productList')}>
                                    <li className={cx('checkout-item-productItem')}>
                                        <div className={cx('checkout-item-productItem-box')}>
                                            <div className={cx('checkout-item-productItem-image')}>
                                                <a href=" " className={cx('checkout-item-productItem-image-link')}>
                                                    <img
                                                        src="		https://i.etsystatic.com/25908782/c/929/739/99/123…/4de6aa/3413687041/il_170x135.3413687041_h0r1.jpg"
                                                        alt=""
                                                        className={cx('checkout-item-productItem-image-data')}
                                                    />
                                                </a>
                                            </div>
                                            <div className={cx('checkout-item-productItem-content')}>
                                                <div className={cx('checkout-item-productItem-content-box')}>
                                                    <div className={cx('productItem-infoAndaction')}>
                                                        <div className={cx('productItem-info')}>
                                                            <div className={cx('productItem-name')}>
                                                                <a href="" className={cx('productItem-name-link')}>
                                                                    Tiny Eye Chart Stud Earrings, Snellen Eye Chart Jewelry, Optometry
                                                                    earrings, Optometry Jewelry, Optometrist, Optometry gift, Eye power
                                                                </a>
                                                            </div>
                                                            <div className={cx('productItem-atribute')}>
                                                                <ul className={cx('productItem-atribute-list')}>
                                                                    <li className={cx('productItem-atribute-item')}>
                                                                        <span className={cx('productItem-atribute-item-data')}>
                                                                            Necklace length: 55 Centimeters
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className={cx('productItem-action')}>
                                                            <button className={cx('productItem-action-button')}>Save for later</button>
                                                            <button className={cx('productItem-action-button')}>Remove</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={cx('productItem-content-qtyAndPrice')}>
                                                    <div className={cx('productItem-content-quantity')}>
                                                        <select name="" id="" className={cx('productItem-content-quantity-select')}>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">jack 5m</option>
                                                        </select>
                                                    </div>
                                                    <div className={cx('productItem-content-price')}>
                                                        <p className={cx('productItem-content-price-text')}>295,320₫</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className={cx('checkout-item-only')}>
                                    <a href="" className={cx('checkout-item-only-link')}>
                                        Check out from only this shop
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={cx('checkout-body-cartPayment')}>
                            <div className={cx('checkout-body-cartPayment-box')}>
                                <form action="" className={cx('checkout-form')}>
                                    <div className={cx('checkout-cardPayment-section')}>
                                        <fieldset className={cx('checkout-cardPayment-section-field')}>
                                            <legend className={cx('checkout-cardPayment-section-tittle')}>How you'll pay</legend>
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
                                                        <span className={cx('checkout-cardPayment-section-channelItem-icon')}>
                                                            <img
                                                                src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-momo.svg"
                                                                alt=""
                                                                className={cx('checkout-cardPayment-section-channelItem-icon-data')}
                                                            />
                                                        </span>
                                                        <span className={cx('checkout-cardPayment-section-channelItem-icon')}>
                                                            <img
                                                                src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-zalo-pay.svg"
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
                                                            Item(s) total
                                                        </th>
                                                        <td className={cx('checkout-cardPayment-section-priceSummary-rowcontent')}>
                                                            <span className={cx('checkout-cardPayment-section-priceSummary-rowcontent-text')}>
                                                                825,293₫
                                                            </span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className={cx('checkout-cardPayment-section-priceSummary-rowName')}>Shipping</th>
                                                        <td className={cx('checkout-cardPayment-section-priceSummary-rowcontent')}>
                                                            <span className={cx('checkout-cardPayment-section-priceSummary-rowcontent-text')}>
                                                                674,082₫
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
                                                                Total (3 items)
                                                            </h1>
                                                        </th>
                                                        <td className={cx('checkout-cardPayment-section-priceSummary-sumContent')}>
                                                            <h1 className={cx('checkout-cardPayment-section-priceSummary-sumContent-text')}>
                                                                1,499,375₫
                                                            </h1>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className={cx('checkout-cardPayment-section-priceSummary-submit')}>
                                                <Button primary login rounded>
                                                    Proceed to checkout
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className={cx('checkout-cardPayment-action')}></div> */}
                                </form>
                            </div>
                        </div>
                        <div className={cx('checkout-body-favourite')}>
                            <p className={cx('checkout-body-favourite-tittle')}>Looking for more of your finds?</p>
                            <div href="" className={cx('checkout-body-favourite-link')}>
                                <Button rounded large>View your favourites</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
