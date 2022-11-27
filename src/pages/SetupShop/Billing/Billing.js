import classNames from 'classnames/bind';
import Button from '~/components/Button';

import styles from './Billing.module.scss';

const cx = classNames.bind(styles);

function Billing() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('billing')}>
                <div className={cx('billing-title')}>
                    <h1 className={cx('billing-title-text')}>Thiết lập thanh toán</h1>
                    <div className={cx('billing-help')}>Hãy cho chúng tôi biết cách bạn muốn thanh toán hóa đơn 2Clothy của mình..</div>
                </div>
                <div className={cx('billing-container')}>
                    <div className={cx('billing-container-box')}>
                        <div className={cx('billing-form')}>
                            <div className={cx('billing-form-body')}>
                                <div className={cx('billing-form-creditcard')}>
                                    <div className={cx('billing-form-creditcard-title')}>Add a credit card</div>
                                    <div className={cx('billing-form-creditcard-item')}>
                                        <div className={cx('billing-form-creditcard-item-porperties')}>Card number &nbsp;*</div>
                                        <input type="text" className={cx('billing-form-creditcard-item-input')} />
                                    </div>
                                    <div className={cx('billing-form-creditcard-item')}>
                                        <div className={cx('billing-form-creditcard-item-porperties')}>Card number &nbsp;*</div>
                                        <input type="text" className={cx('billing-form-creditcard-item-input')} />
                                    </div>
                                    <div className={cx('billing-form-creditcard-item')}>
                                        <div className={cx('billing-form-creditcard-item-porperties')}>Card number &nbsp;*</div>
                                        <input type="text" className={cx('billing-form-creditcard-item-input')} />
                                    </div>
                                </div>
                                <div className={cx('billing-form-address')}>
                                    <div className={cx('billing-form-address-title')}>Billing address</div>
                                    <div className={cx('billing-form-address-item')}>
                                        <div className={cx('billing-form-address-item-porperties')}>Country</div>
                                        <input type="text" className={cx('billing-form-address-item-input')} />
                                    </div>
                                    <div className={cx('billing-form-address-item')}>
                                        <div className={cx('billing-form-address-item-porperties')}>Country</div>
                                        <input type="text" className={cx('billing-form-address-item-input')} />
                                    </div>
                                    <div className={cx('billing-form-address-item')}>
                                        <div className={cx('billing-form-address-item-porperties')}>Country</div>
                                        <input type="text" className={cx('billing-form-address-item-input')} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('billing-notice')}>
                            <div className={cx('billing-notice-header')}>
                                <span className={cx('billing-notice-header-text')}>Bạn sẽ không bị tính phí bây giờ.</span>
                            </div>
                            <div className={cx('billing-notice-body')}>
                                <p className={cx('billing-notice-body-content')}>
                                Chúng tôi sẽ thêm <strong >4,762₫</strong>* vào tài khoản thanh toán của bạn cho danh sách trong cửa hàng của bạn, số tiền này sẽ đến hạn vào ngày đầu tiên của tháng dương lịch tiếp theo.
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('billing-action')}>
                    <Button primary rounded large>
                        Hoàn tất
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Billing;
