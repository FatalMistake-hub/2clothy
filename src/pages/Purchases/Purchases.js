import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import routes from '~/config/routes';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthSlice from '~/redux/AuthSlice';
import { authRemainingSelector } from '~/redux/selector';
import { cancelOrder, getOrder, updateOrder } from '~/services/authService';
import { createAxios } from '~/services/createInstance';
import styles from './Purchases.module.scss';
import { useLayoutEffect } from 'react';
import PaginationNav from '~/components/PaginationNav/PaginationNav';
import moment from 'moment/moment';

const cx = classNames.bind(styles);

function Purchases() {
    const user = useSelector(authRemainingSelector);
    const currentUser = user?.login.currentUser;
    const accessToken = currentUser?.accessToken;
    const dispatch = useDispatch();
    const [dataPurchases, setDataPurchases] = useState();
    const [filterPurchases, setFilterPurchases] = useState();
    useEffect(() => {
        const fetchApi = async () => {
            let axiosJWT = createAxios(currentUser, dispatch, AuthSlice.actions.loginSuccess);
            const result = await getOrder(accessToken, axiosJWT);
            setDataPurchases(result);
            setFilterPurchases(result);
        };
        fetchApi();
    }, []);

    const getTotal = (orderList) => {
        let totalQuantity = 0;
        let totalPrice = 0;
        orderList.orderDetails.forEach((product) => {
            totalQuantity += product.quantity;
            totalPrice += product.price * product.quantity;
        });
        return { totalPrice, totalQuantity };
    };
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(10);

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = filterPurchases?.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(filterPurchases?.length / recordsPerPage);

    const [isactive, setIsActive] = useState('0');
    const handleOrder = async (id) => {
        if (id == 0) {
            setFilterPurchases(dataPurchases);
            setIsActive(id);
            // console.log(dataPurchases);
        } else {
            const data = dataPurchases.filter((p) => p.statusId == id);
            setFilterPurchases(data);
            setIsActive(id);
        }
    };

    const handleStatus = (status) => {
        switch (status) {
            case 1:
                return { status: 'CHỜ XÁC NHẬN', statusCaption: 'Đơn hàng đang chờ được xác nhận' };
            case 2:
                return { status: 'ĐANG GIAO', statusCaption: 'Đơn hàng đang được giao đến bạn' };
            case 3:
                return { status: 'ĐÃ GIAO', statusCaption: 'Đơn hàng đã giao thành công' };
            case 4:
                return { status: 'ĐÃ HUỶ', statusCaption: '' };
        }
    };
    const handleOrderStatus = (purchaseId, status) => {
        const fetchApi = async () => {
            let axiosJWT = createAxios(currentUser, dispatch, AuthSlice.actions.loginSuccess);
            let result;
            if (status == 3) {
                result = await updateOrder(
                    purchaseId,
                    {
                        StatusId: status,
                    },
                    accessToken,
                    axiosJWT,
                );
                setDataPurchases(result);
                setFilterPurchases(result);
            } else {
                result = await cancelOrder(purchaseId, accessToken, axiosJWT);
                setDataPurchases(result);
                setFilterPurchases(result);
            }
        };
        fetchApi();
    };
    return (
        <>
            {/* {dataPurchases ? ( */}
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('nav')}>
                        <div onClick={() => handleOrder(0)} className={cx('nav-item', `${isactive == 0 ? 'active' : ''}`)}>
                            <span className={cx('nav-item-text')}>Tất cả</span>
                        </div>
                        <div onClick={() => handleOrder(1)} className={cx('nav-item', `${isactive == 1 ? 'active' : ''}`)}>
                            <span className={cx('nav-item-text')}>Chờ xác nhận</span>
                        </div>
                        <div onClick={() => handleOrder(2)} className={cx('nav-item', `${isactive == 2 ? 'active' : ''}`)}>
                            <span className={cx('nav-item-text')}>Đang giao</span>
                        </div>
                        <div onClick={() => handleOrder(3)} className={cx('nav-item', `${isactive == 3 ? 'active' : ''}`)}>
                            <span className={cx('nav-item-text')}>Đã giao</span>
                        </div>
                        <div onClick={() => handleOrder(4)} className={cx('nav-item', `${isactive == 4 ? 'active' : ''}`)}>
                            <span className={cx('nav-item-text')}>Đã huỷ</span>
                        </div>
                    </div>
                    {currentRecords?.map((purchase, i) => (
                        <div key={i} className={cx('purchase')}>
                            <div className={cx('purchase-product')}>
                                <div className={cx('purchase-product-header')}>
                                    <span className={cx('purchase-product-header-title')}>
                                        Đơn hàng đặt từ{' '}
                                        <Link to={routes.home} className={cx('purchase-product-header-shopName')}>
                                            DSimple{' '}
                                        </Link>
                                        vào ngày {moment(purchase.dateCreated).format('L')}
                                    </span>
                                    <span className={cx('purchase-product-header-title')}>
                                        Tổng ({getTotal(purchase).totalQuantity}) :
                                        <span className={cx('purchase-product-header-money')}>
                                            {' '}
                                            {getTotal(purchase).totalPrice.toLocaleString('es-ES')}₫
                                        </span>
                                    </span>
                                </div>
                                <div className={cx('purchase-product-body')}>
                                    <ul className={cx('purchase-product-list')}>
                                        {purchase.orderDetails.map((orderItem, i) => (
                                            <li key={i} className={cx('purchase-product-list-item')}>
                                                <div className={cx('purchase-product-list-item-box')}>
                                                    <div className={cx('purchase-product-list-item-image')}>
                                                        <Link
                                                            to={`/detail/${orderItem.itemId}`}
                                                            className={cx('purchase-product-list-item-image-link')}
                                                        >
                                                            <img
                                                                src={orderItem.itemImg}
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
                                                                        <Link
                                                                            to={`/detail/${orderItem.itemId}`}
                                                                            className={cx('item-name-link')}
                                                                        >
                                                                            {orderItem.itemName}
                                                                        </Link>
                                                                    </div>
                                                                    <div className={cx('item-atribute')}>
                                                                        <ul className={cx('item-atribute-list')}>
                                                                            <li className={cx('item-atribute-item')}>
                                                                                <span className={cx('item-atribute-item-data')}>
                                                                                    Size : {orderItem.size}
                                                                                </span>
                                                                            </li>
                                                                            <li className={cx('item-atribute-item')}>
                                                                                <span className={cx('item-atribute-item-quantity')}>
                                                                                    X {orderItem.quantity}
                                                                                </span>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={cx('item-content-qtyAndPrice')}>
                                                            <div className={cx('item-content-price')}>
                                                                <p className={cx('item-content-price-text')}>
                                                                    ₫{orderItem.price.toLocaleString('es-ES')}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className={cx('purchase-product-list')}>
                                        <span className={cx('purchase-product-header-title')}>Địa Chỉ Nhận Hàng</span>
                                        <br />
                                        <span className={cx('purchase-product-header-title')}>
                                            {purchase.phoneNumber}
                                            <br />
                                            {purchase.address}, {purchase.city}, {purchase.country}
                                        </span>
                                    </div>
                                </div>

                                {/* <div className={cx('purchase-product-footer')}></div> */}
                            </div>
                            <div className={cx('purchase-state')}>
                                <div className={cx('purchase-state-box')}>
                                    <div className={cx('purchase-state-title')}>
                                        <span className={cx('purchase-state-title-text')}>
                                            {handleStatus(purchase.statusId).statusCaption}
                                        </span>
                                        <span className={cx('purchase-state-title-status')}>{handleStatus(purchase.statusId).status}</span>
                                    </div>
                                    <div className={cx('purchase-state-action')}>
                                        {purchase.statusId == 2 && (
                                            <div className={cx('purchase-state-action-button')}>
                                                <Button primary medium onClick={() => handleOrderStatus(purchase.id, 3)}>
                                                    Đã nhận hàng
                                                </Button>
                                            </div>
                                        )}
                                        {(purchase.statusId == 1 || purchase.statusId == 2) && (
                                            <div className={cx('purchase-state-action-button')}>
                                                <Button outline medium onClick={() => handleOrderStatus(purchase.id, 4)}>
                                                    Huỷ đơn hàng
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {nPages && currentPage && <PaginationNav nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />}
                </div>
            </div>
            // ) : ( //{' '}
            <div className={cx('wrapper-emty')}>
                //{' '}
                <div className={cx('container')}>
                    // <h1 className={cx('emtyPurchase')}>Bạn chưa thực hiện một đơn hàng nào cả .</h1>
                    // <img src={'https://deo.shopeemobile.com/shopee/shopee-pcmall-…ve-sg/assets/5fafbb923393b712b96488590b8f781f.png'} />
                    //{' '}
                </div>
                //{' '}
            </div>
            // )}
        </>
    );
}

export default Purchases;
