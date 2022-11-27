import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import { Truck } from '~/components/Icons';
import routes from '~/config/routes';

import styles from './Purchases.module.scss';

const cx = classNames.bind(styles);

function Purchases() {
    return (
        // <div className={cx('wrapper-emty')}>
        //     <div className={cx('container')}>
        //     <h1 className={cx('emtyPurchase')}>Bạn chưa thực hiện một đơn hàng nào cả .</h1>
        // <img src={'https://deo.shopeemobile.com/shopee/shopee-pcmall-…ve-sg/assets/5fafbb923393b712b96488590b8f781f.png'}/>
        //     </div>
        // </div>
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('nav')}>
                    
                        <div className={cx('nav-item')}>
                            <span className={cx('nav-item-text')}>Tất cả</span>
                        </div>
                        <div className={cx('nav-item')}>
                            <span className={cx('nav-item-text')}>Chờ xác nhận</span>
                        </div>
                        <div className={cx('nav-item')}>
                            <span className={cx('nav-item-text')}>Đang giao</span>
                        </div>
                        <div className={cx('nav-item')}>
                            <span className={cx('nav-item-text')}>Đã giao</span>
                        </div>
                        <div className={cx('nav-item')}>
                            <span className={cx('nav-item-text')}>Đã huỷ</span>
                        </div>
                    
                </div>
                <div className={cx('purchase')}>
                    <div className={cx('purchase-product')}>
                        <div className={cx('purchase-product-header')}>
                            <span className={cx('purchase-product-header-title')}>
                                Đơn hàng đặt từ{' '}
                                <Link to={routes.home} className={cx('purchase-product-header-shopName')}>
                                    DSimple{' '}
                                </Link>
                                vào ngày 11/8/2022
                            </span>
                            <span className={cx('purchase-product-header-title')}>
                                Tổng (1) :<span className={cx('purchase-product-header-money')}> 625.000₫</span>
                            </span>
                        </div>
                        <div className={cx('purchase-product-body')}>
                            <ul className={cx('purchase-product-list')}>
                                <li className={cx('purchase-product-list-item')}>
                                    <div className={cx('purchase-product-list-item-box')}>
                                        <div className={cx('purchase-product-list-item-image')}>
                                            <Link to={`/detail/`} className={cx('purchase-product-list-item-image-link')}>
                                                <img
                                                    src="https://cf.shopee.vn/file/d3def8ff7418925496136e0be7dc9e28_tn"
                                                    loading="lazy"
                                                    className={cx('purchase-product-list-item-image-data')}
                                                />
                                            </Link>
                                        </div>
                                        <div className={cx('purchase-product-list-item-content')}>
                                            <div className={cx('purchase-product-list-item-content-box')}>
                                                <div className={cx('item-infoAndaction')}>
                                                    <div className={cx('item-info')}>
                                                        <div className={cx('item-name')}>
                                                            <Link to={`/detail/`} className={cx('item-name-link')}>
                                                                Áo Bra Chạy Bộ Có Túi Medium Support
                                                            </Link>
                                                        </div>
                                                        <div className={cx('item-atribute')}>
                                                            <ul className={cx('item-atribute-list')}>
                                                                <li className={cx('item-atribute-item')}>
                                                                    <span className={cx('item-atribute-item-data')}>Size : S</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('item-content-qtyAndPrice')}>
                                                <div className={cx('item-content-quantity')}>
                                                    <input
                                                        type="number"
                                                        min="1"
                                                        max="100"
                                                        value="1212"
                                                        step="1"
                                                        className={cx('item-content-quantity-select')}
                                                    />
                                                </div>
                                                <div className={cx('item-content-price')}>
                                                    <p className={cx('item-content-price-text')}>625.000₫</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* <div className={cx('purchase-product-footer')}></div> */}
                    </div>
                    <div className={cx('purchase-state')}>
                        <div className={cx('purchase-state-box')}>
                            <div className={cx('purchase-state-title')}>
                                <span className={cx('purchase-state-title-text')}>Giao hàng thành công</span>
                                <span className={cx('purchase-state-title-status')}>ĐÃ GIAO</span>
                            </div>
                            <div className={cx('purchase-state-action')}>
                                <div className={cx('purchase-state-action-button')}>
                                    <Button primary medium>
                                        Đã nhận hàng
                                    </Button>
                                </div>
                                <div className={cx('purchase-state-action-button')}>
                                    <Button outline medium>
                                        Huỷ đơn hàng
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('purchase')}>
                    <div className={cx('purchase-product')}>
                        <div className={cx('purchase-product-header')}>
                            <span className={cx('purchase-product-header-title')}>
                                Đơn hàng đặt từ{' '}
                                <Link to={routes.home} className={cx('purchase-product-header-shopName')}>
                                    DSimple{' '}
                                </Link>
                                vào ngày 11/8/2022
                            </span>
                            <span className={cx('purchase-product-header-title')}>
                                Tổng (1) :<span className={cx('purchase-product-header-money')}> 625.000₫</span>
                            </span>
                        </div>
                        <div className={cx('purchase-product-body')}>
                            <ul className={cx('purchase-product-list')}>
                                <li className={cx('purchase-product-list-item')}>
                                    <div className={cx('purchase-product-list-item-box')}>
                                        <div className={cx('purchase-product-list-item-image')}>
                                            <Link to={`/detail/`} className={cx('purchase-product-list-item-image-link')}>
                                                <img
                                                    src="https://cf.shopee.vn/file/d3def8ff7418925496136e0be7dc9e28_tn"
                                                    loading="lazy"
                                                    className={cx('purchase-product-list-item-image-data')}
                                                />
                                            </Link>
                                        </div>
                                        <div className={cx('purchase-product-list-item-content')}>
                                            <div className={cx('purchase-product-list-item-content-box')}>
                                                <div className={cx('item-infoAndaction')}>
                                                    <div className={cx('item-info')}>
                                                        <div className={cx('item-name')}>
                                                            <Link to={`/detail/`} className={cx('item-name-link')}>
                                                                Áo Bra Chạy Bộ Có Túi Medium Support
                                                            </Link>
                                                        </div>
                                                        <div className={cx('item-atribute')}>
                                                            <ul className={cx('item-atribute-list')}>
                                                                <li className={cx('item-atribute-item')}>
                                                                    <span className={cx('item-atribute-item-data')}>Size : S</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('item-content-qtyAndPrice')}>
                                                <div className={cx('item-content-quantity')}>
                                                    <input
                                                        type="number"
                                                        min="1"
                                                        max="100"
                                                        value="1212"
                                                        step="1"
                                                        className={cx('item-content-quantity-select')}
                                                    />
                                                </div>
                                                <div className={cx('item-content-price')}>
                                                    <p className={cx('item-content-price-text')}>625.000₫</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* <div className={cx('purchase-product-footer')}></div> */}
                    </div>
                    <div className={cx('purchase-state')}>
                        <div className={cx('purchase-state-box')}>
                            <div className={cx('purchase-state-title')}>
                                <span className={cx('purchase-state-title-text')}>
                                    {/* <Truck/> */}
                                    Giao hàng thành công
                                </span>
                                <span className={cx('purchase-state-title-status')}>ĐÃ GIAO</span>
                            </div>
                            <div className={cx('purchase-state-action')}>
                                <div className={cx('purchase-state-action-button')}>
                                    <Button primary medium>
                                        Đã nhận hàng
                                    </Button>
                                </div>
                                <div className={cx('purchase-state-action-button')}>
                                    <Button outline medium>
                                        Huỷ đơn hàng
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('purchase')}>
                    <div className={cx('purchase-product')}>
                        <div className={cx('purchase-product-header')}>
                            <span className={cx('purchase-product-header-title')}>
                                Đơn hàng đặt từ{' '}
                                <Link to={routes.home} className={cx('purchase-product-header-shopName')}>
                                    DSimple{' '}
                                </Link>
                                vào ngày 11/8/2022
                            </span>
                            <span className={cx('purchase-product-header-title')}>
                                Tổng (1) :<span className={cx('purchase-product-header-money')}> 625.000₫</span>
                            </span>
                        </div>
                        <div className={cx('purchase-product-body')}>
                            <ul className={cx('purchase-product-list')}>
                                <li className={cx('purchase-product-list-item')}>
                                    <div className={cx('purchase-product-list-item-box')}>
                                        <div className={cx('purchase-product-list-item-image')}>
                                            <Link to={`/detail/`} className={cx('purchase-product-list-item-image-link')}>
                                                <img
                                                    src="https://cf.shopee.vn/file/d3def8ff7418925496136e0be7dc9e28_tn"
                                                    loading="lazy"
                                                    className={cx('purchase-product-list-item-image-data')}
                                                />
                                            </Link>
                                        </div>
                                        <div className={cx('purchase-product-list-item-content')}>
                                            <div className={cx('purchase-product-list-item-content-box')}>
                                                <div className={cx('item-infoAndaction')}>
                                                    <div className={cx('item-info')}>
                                                        <div className={cx('item-name')}>
                                                            <Link to={`/detail/`} className={cx('item-name-link')}>
                                                                Áo Bra Chạy Bộ Có Túi Medium Support
                                                            </Link>
                                                        </div>
                                                        <div className={cx('item-atribute')}>
                                                            <ul className={cx('item-atribute-list')}>
                                                                <li className={cx('item-atribute-item')}>
                                                                    <span className={cx('item-atribute-item-data')}>Size : S</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('item-content-qtyAndPrice')}>
                                                <div className={cx('item-content-quantity')}>
                                                    <input
                                                        type="number"
                                                        min="1"
                                                        max="100"
                                                        value="1212"
                                                        step="1"
                                                        className={cx('item-content-quantity-select')}
                                                    />
                                                </div>
                                                <div className={cx('item-content-price')}>
                                                    <p className={cx('item-content-price-text')}>625.000₫</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* <div className={cx('purchase-product-footer')}></div> */}
                    </div>
                    <div className={cx('purchase-state')}>
                        <div className={cx('purchase-state-box')}>
                            <div className={cx('purchase-state-title')}>
                                <span className={cx('purchase-state-title-text')}>Giao hàng thành công</span>
                                <span className={cx('purchase-state-title-status')}>ĐÃ GIAO</span>
                            </div>
                            <div className={cx('purchase-state-action')}>
                                <div className={cx('purchase-state-action-button')}>
                                    <Button primary medium>
                                        Đã nhận hàng
                                    </Button>
                                </div>
                                <div className={cx('purchase-state-action-button')}>
                                    <Button outline medium>
                                        Huỷ đơn hàng
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Purchases;
