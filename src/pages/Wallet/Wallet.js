import classNames from 'classnames/bind';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthSlice from '~/redux/AuthSlice';
import { authRemainingSelector } from '~/redux/selector';
import { getOrder, getTransaction, getWallet } from '~/services/authService';
import { createAxios } from '~/services/createInstance';
import styles from './Wallet.module.scss';
import PaginationNav from '~/components/PaginationNav/PaginationNav';
import moment from 'moment/moment';

const cx = classNames.bind(styles);

function Wallet() {
    const user = useSelector(authRemainingSelector);
    const currentUser = user?.login.currentUser;
    const accessToken = currentUser?.accessToken;
    const dispatch = useDispatch();
    const [dataTransaction, setDataTransaction] = useState([]);
    const [dataWallet, setDataWallet] = useState([]);
    const [filterTransaction, setFilterTransaction] = useState();
    useEffect(() => {
        const fetchApi = async () => {
            let axiosJWT = createAxios(currentUser, dispatch, AuthSlice.actions.loginSuccess);
            const result = await getTransaction(accessToken, axiosJWT);
            const wallet = await getWallet(accessToken, axiosJWT);
            setDataTransaction(result);
            setDataWallet(wallet);
            setFilterTransaction(result);
        };
        fetchApi();
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(10);

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = filterTransaction?.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(filterTransaction?.length / recordsPerPage);

    const [isactive, setIsActive] = useState('0');
    const handleTransaction = async (id) => {
        if (id == 0) {
            setFilterTransaction(dataTransaction);
            setIsActive(id);
            // console.log(dataTransaction);
        } else {
            const data = dataTransaction.filter((p) => p.statusId == id);
            setFilterTransaction(data);
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
            default:
                return { status: 'Sai', statusCaption: '' };
        }
    };

    return (
        <>
            {/* {dataTransaction ? ( */}
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('nav')}>
                        <div onClick={() => handleTransaction(0)} className={cx('nav-item', `${isactive == 0 ? 'active' : ''}`)}>
                            <span className={cx('nav-item-text')}>Tất cả</span>
                        </div>
                        <div onClick={() => handleTransaction(1)} className={cx('nav-item', `${isactive == 1 ? 'active' : ''}`)}>
                            <span className={cx('nav-item-text')}>Chờ xác nhận</span>
                        </div>
                        <div onClick={() => handleTransaction(2)} className={cx('nav-item', `${isactive == 2 ? 'active' : ''}`)}>
                            <span className={cx('nav-item-text')}>Đang giao</span>
                        </div>
                        <div onClick={() => handleTransaction(3)} className={cx('nav-item', `${isactive == 3 ? 'active' : ''}`)}>
                            <span className={cx('nav-item-text')}>Đã giao</span>
                        </div>
                        <div onClick={() => handleTransaction(4)} className={cx('nav-item', `${isactive == 4 ? 'active' : ''}`)}>
                            <span className={cx('nav-item-text')}>Đã huỷ</span>
                        </div>
                    </div>
                    <div className={cx('transaction')}>
                        <div className={cx('transaction-header')}>
                            <div className={cx('transaction-header-box')}>
                                <span className={cx('transaction-header-content')}>
                                    Số dư tài khoản: <p className={cx('transaction-header-money')}>{dataWallet.toLocaleString('es-ES')} </p>{' '}
                                    ₫{' '}
                                </span>
                            </div>
                        </div>
                        <div className={cx('transaction-content')}>
                            <div className={cx('transaction-content-box')}>
                                <div className={cx('transaction-content-css')}>
                                    <table className={cx('transaction-content-table')}>
                                        <thead className={cx('transaction-content-thead')}>
                                            <tr className={cx('transaction-content-thead-row')}>
                                                <th className={cx('transaction-content-thead-row-cell')} scope="col">
                                                    Ngày
                                                </th>
                                                <th className={cx('transaction-content-thead-row-cell')} scope="col">
                                                    Loại giao dịch | Mô tả
                                                </th>
                                                <th className={cx('transaction-content-thead-row-cell')} scope="col">
                                                    Số Tiền
                                                </th>
                                                <th className={cx('transaction-content-thead-row-cell')} scope="col">
                                                    Trạng Thái
                                                </th>
                                                <th className={cx('transaction-content-thead-row-cell')} scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody className={cx('transaction-content-tbody')}>
                                            {currentRecords?.map((transaction, i) => (
                                                <tr key={i} className={cx('transaction-content-tbody-row')}>
                                                    <td className={cx('transaction-content-tbody-cell')}>
                                                        <h6 className={cx('transaction-content-text')}>
                                                            {moment(transaction.transactionDate).format('L')}
                                                        </h6>
                                                        <p className={cx('transaction-content-textp')}>
                                                            {moment(transaction.transactionDate).format('LT')}
                                                        </p>
                                                    </td>
                                                    <td className={cx('transaction-content-tbody-cell')}>
                                                        <div className={cx('transaction-content-tbody-box')}>
                                                            <div className={cx('transaction-content-tbody-box-img')}>
                                                                <img
                                                                    alt="Annette Black"
                                                                    src="https://api-dev-minimal-v4.vercel.app/assets/images/avatars/avatar_9.jpg"
                                                                    className={cx('transaction-content-tbody-box-img-data')}
                                                                />
                                                            </div>

                                                            <div className={cx('transaction-content-tbody-box-content')}>
                                                                <p className={cx('transaction-content-textp')}>Receive money from</p>
                                                                <h6 className={cx('transaction-content-text')}> {transaction.shopName}</h6>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className={cx('transaction-content-tbody-cell')}>
                                                        <span className={cx('transaction-content-text')}>
                                                            {transaction.money.toLocaleString('es-ES')} ₫
                                                        </span>
                                                    </td>
                                                    <td className={cx('transaction-content-tbody-cell')}>
                                                        <span className={cx('transaction-content-text')}>{transaction.status}</span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <hr className={cx('transaction-hr')} />
                        <div className={cx('transaction-footer')}>
                            {nPages && currentPage && (
                                <PaginationNav nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Wallet;
