import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Shipping.module.scss';

const cx = classNames.bind(styles);

function Shipping() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <form className={cx('form')}>
                    <h1 className={cx('form-tittle')}>Nhập địa chỉ giao hàng của bạn</h1>
                    <div className={cx('form-group')}>
                        <div className={cx('form-group-item')}>
                            <label className={cx('form-group-item-label')} htmlFor="">Họ và tên:</label>
                            <select className={cx('form-group-item-input')} type="text" />
                        </div>
                        <div className={cx('form-group-item')}>
                            <label className={cx('form-group-item-label')} htmlFor="">Số điện thoại:</label>
                            <input className={cx('form-group-item-input')} type="text" />
                        </div>
                        <div className={cx('form-group-item')}>
                            <label className={cx('form-group-item-label')} htmlFor="">Tỉnh/Thành phố:</label>
                            <input className={cx('form-group-item-input')} type="text" />
                        </div>
                        <div className={cx('form-group-item')}>
                            <label className={cx('form-group-item-label')} htmlFor="">Quận huyện:</label>
                            <input className={cx('form-group-item-input')} type="text" />
                        </div>
                        <div className={cx('form-group-item')}>
                            <label className={cx('form-group-item-label')} htmlFor="">Phường xã:</label>
                            <input className={cx('form-group-item-input')} type="text" />
                        </div>
                        <div className={cx('form-group-item')}>
                            <label className={cx('form-group-item-label')} htmlFor="">Địa chỉ nhận hàng:</label>
                            <input className={cx('form-group-item-input')} type="text" />
                        </div>
                        <div className={cx('form-group-item')}>
                            <label className={cx('form-group-item-label')} htmlFor="">Loại địa chỉ:</label>
                            <input className={cx('form-group-item-input')} type="text" />
                        </div>
                    </div>
                    <div className={cx('form-group-submit')}><Button primary rounded login>Tiếp tục thanh toán</Button></div>
                </form>
            </div>
        </div>
    );
}

export default Shipping;
