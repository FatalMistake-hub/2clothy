import styles from './CartItem.module.scss';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';

import addCartSlice from '~/redux/CartSlice';

import { Link } from 'react-router-dom';

import CartSlice from '~/redux/CartSlice';
const cx = classNames.bind(styles);

function CartItem({ shopId, shopName, shopImage, orderDetails = [] }) {
    const dispatch = useDispatch();

    const handleQuantity = (e, id) => {
        dispatch(
            CartSlice.actions.updateQuantityItem({
                quantity: parseInt(e.target.value),
                shopId: shopId,
                itemId: id,
            }),
        );
    };

    return (
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
                    <Link to={`/shop/${shopId}`} className={cx('checkout-item-shop-linkName')}>
                        {shopName}
                    </Link>
                </div>
            </div>
            <ul className={cx('checkout-item-productList')}>
                {orderDetails.map((productItem) => (
                    <li key={productItem.itemId} className={cx('checkout-item-productItem')}>
                        <div className={cx('checkout-item-productItem-box')}>
                            <div className={cx('checkout-item-productItem-image')}>
                                <Link to={`/detail/${productItem.itemId}`} className={cx('checkout-item-productItem-image-link')}>
                                    <img src={productItem.itemImg} loading="lazy" className={cx('checkout-item-productItem-image-data')} />
                                </Link>
                            </div>
                            <div className={cx('checkout-item-productItem-content')}>
                                <div className={cx('checkout-item-productItem-content-box')}>
                                    <div className={cx('productItem-infoAndaction')}>
                                        <div className={cx('productItem-info')}>
                                            <div className={cx('productItem-name')}>
                                                <Link to={`/detail/${productItem.itemId}`} className={cx('productItem-name-link')}>
                                                    {productItem.itemName}
                                                </Link>
                                            </div>
                                            <div className={cx('productItem-atribute')}>
                                                <ul className={cx('productItem-atribute-list')}>
                                                    <li className={cx('productItem-atribute-item')}>
                                                        <span className={cx('productItem-atribute-item-data')}>
                                                            Size : {productItem.size}
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className={cx('productItem-action')}>
                                            {/* <button className={cx('productItem-action-button')}>Save for later</button> */}

                                            <button
                                                onClick={() =>
                                                    dispatch(
                                                        addCartSlice.actions.removeProductItem({
                                                            itemId: productItem.itemId,
                                                            shopId: shopId,
                                                        }),
                                                    )
                                                }
                                                className={cx('productItem-action-button')}
                                            >
                                                Xoá
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('productItem-content-qtyAndPrice')}>
                                    <div className={cx('productItem-content-quantity')}>
                                        {/* <select name="" id="" className={cx('productItem-content-quantity-select')}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">jack 5m</option>
                                        </select> */}
                                        <input
                                            type="number"
                                            // max={productItem.quantity}
                                            value={productItem.quantity}
                                            // onChange={(e) => handleQuantity(e, productItem.itemId)}
                                            step="1"
                                            disabled
                                            className={cx('productItem-content-quantity-select')}
                                        />
                                    </div>
                                    <div className={cx('productItem-content-price')}>
                                        <p className={cx('productItem-content-price-text')}>{productItem.price.toLocaleString('es-ES')}₫</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className={cx('checkout-item-only')}>
                <a href="" className={cx('checkout-item-only-link')}>
                    {/* Check out from only this shop */}
                    Chỉ thanh toán của cửa hàng này
                </a>
            </div>
        </div>
    );
}

export default CartItem;
