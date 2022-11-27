import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '~/components/Button';

import { authRemainingSelector, cartsRemainingSelector } from '~/redux/selector';
import styles from './CompletedPayment.module.scss';
// import cartSlice from './cartSlice';
const cx = classNames.bind(styles);
function CompletedPayment() {
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

                            <h1 className={cx('container-body-emtyCart-text')}>Cảm ơn bạn đã mua sắm tại 2Clothy!</h1>
                        </div>
                    </div>
                    <div className={cx('container-body-favourite')}>
                        <p className={cx('container-body-favourite-tittle')}>Tiếp tục trải nghiệm thời trang của bạn tại 2Clothy.</p>
                        <div href="" className={cx('container-body-favourite-link')}>
                            <Button rounded large>
                                Tiếp tục mua sắm
                            </Button>
                            <Button rounded large>
                                Xem đơn hàng
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompletedPayment;
