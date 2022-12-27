import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';

import { authRemainingSelector, cartsRemainingSelector } from '~/redux/selector';
import styles from './CompletedSetup.module.scss';
// import cartSlice from './cartSlice';
const cx = classNames.bind(styles);
function CompletedSetup() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('container-body')}>
                    <div className={cx('container-body-box-emtyCart')}>
                        <div className={cx('container-body-emtyCart')}>
                            <img
                                src="https://res.cloudinary.com/sacchidananad-utech/image/upload/v1669570896/Screenshot_2022-11-28_004039_pwxzha.png"
                                className={cx('container-body-emtyCart-image')}
                            />
                            <img
                                src="https://res.cloudinary.com/sacchidananad-utech/image/upload/v1669570896/Screenshot_2022-11-28_004039_pwxzha.png"
                                className={cx('container-body-emtyCart-image')}
                            />

                            <h1 className={cx('container-body-emtyCart-text')}>Đăng ký gian hàng thành công tại 2Clothy!</h1>
                        </div>
                    </div>
                    <div className={cx('container-body-favourite')}>
                        <p className={cx('container-body-favourite-tittle')}>
                            Truy cập và trải nghiệm việc quản lý của bạn tại{' '}
                            <a className={cx('container-body-favourite-tittle-link')} href="https://www.sellercenter2clothy.software/">
                                sellercenter2clothy.software
                            </a>{' '}
                            hoặc
                        </p>
                        <div href="" className={cx('container-body-favourite-link')}>
                            <Button rounded large>
                                <Link to="/">Tiếp tục mua sắm</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompletedSetup;
