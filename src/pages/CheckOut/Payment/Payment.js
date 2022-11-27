import classNames from 'classnames/bind';
import styles from './Payment.module.scss';
import Button from '~/components/Button';
import { Card } from '~/components/Icons';

const cx = classNames.bind(styles);

function Payment() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <div className={cx('tittle')}>
                    <h2 className={cx('tittle-text')}>Hãy chọn phương thức thanh toán</h2>
                    <p className={cx('tittle-tip')}>
                        Bạn sẽ không bị tính phí cho đến khi bạn xem lại đơn đặt hàng này trên trang tiếp theo.
                    </p>
                </div>
                <form className={cx('form')}>
                    <div className={cx('form-box')}>
                        <div className={cx('form-check')}>
                            <input type="radio" id="radio" className={cx('form-check-radio')} />
                            <div className={cx('form-check-group')}>
                                <p className={cx('form-check-name')}>Thẻ ngân hàng </p>
                                <label htmlFor="radio" className={cx('form-check-iconList')}>
                                    <span className={cx('form-check-icon')}>
                                        <img
                                            src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/checkout/icon-payment-method-momo.svg"
                                            loading="lazy"
                                            className={cx('form-check-icon-data')}
                                        />
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className={cx('form-group')}>
                            <div className={cx('form-group-item')}>
                                <label className={cx('form-group-item-label')} htmlFor="">
                                    Phường xã:
                                </label>
                                <input className={cx('form-group-item-input')} type="text" />
                            </div>
                            <div className={cx('form-group-item')}>
                                <label className={cx('form-group-item-label')} htmlFor="">
                                    Tên trên thẻ
                                </label>

                                <div className={cx('form-group-item-input-append')}>
                                    <span className={cx('form-group-item-input-append-icon')}>
                                        <Card />
                                    </span>
                                </div>
                                <input className={cx('form-group-item-input')} type="text" />
                            </div>
                            <div className={cx('form-group-item')}>
                                <label className={cx('form-group-item-label')} htmlFor="">
                                    Số thẻ
                                </label>
                                <input className={cx('form-group-item-input')} type="text" />
                            </div>
                            <div className={cx('form-group-item')}>
                                <label className={cx('form-group-item-label')} htmlFor="">
                                    Ngày hết hạn
                                </label>
                                <div className={cx('form-group-item-datetime')}>
                                    <select className={cx('form-group-item-input')} ></select>
                                    <select className={cx('form-group-item-input')} ></select>
                                </div>
                            </div>
                        </div>
                        <div className={cx('form-check-default')}>
                            <input type="checkbox" className={cx('form-check-default-checkbox')} />
                            <span className={cx('form-check-default-staysigned')}>Đặt làm mặc định</span>
                        </div>
                        <div className={cx('form-group-submit')}>
                            <Button primary rounded login>
                                Kiểm tra đơn hàng
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Payment;
