import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { Edit, Remove } from '~/components/Icons';
import styles from './Addresses.module.scss';

const cx = classNames.bind(styles);
function Addresses() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('addresses')}>
                <div className={cx('addresses_add')}>
                    <div className={cx('addresses_add-tittle')}>
                        <h2 className={cx('addresses_add-tittle-text')}>Địa chỉ giao hàng của bạn</h2>
                    </div>
                    <div className={cx('addresses_add-button')}>
                        <Button large primary rounded>
                            {' '}
                            Thêm địa chỉ mới
                        </Button>
                    </div>
                </div>
                <div className={cx('addresses_content')}>
                    <div className={cx('addresses_content-item')}>
                        <span className={cx('addresses_content-item-default')}>Mặc định</span>
                        <div className={cx('addresses_content-item-address')}>
                            <span className={cx('addresses_content-item-address-name')}>Quach Nhat</span>
                            <br></br>
                            <span  className={cx('addresses_content-item-address-info')}>
                                64 ong ich khiem
                            </span>
                            <br></br>
                            <span  className={cx('addresses_content-item-address-info')}>
                                HCM
                            </span>
                            <br></br>
                            <span  className={cx('addresses_content-item-address-info')}>
                                Da Nang
                            </span>
                            <span  className={cx('addresses_content-item-address-info')}>
                                550000
                            </span>
                            <br></br>
                            <span  className={cx('addresses_content-item-address-info')}>
                                Vietnam
                            </span>
                            <br></br>
                            <span  className={cx('addresses_content-item-address-info')}>
                                0123456
                            </span>
                        </div>
                        <div className={cx('addresses_content-item-action')}>
                            <button className={cx('addresses_content-item-button')}>
                                <span className={cx('addresses_content-item-button-icon')}>
                                    <Edit/>
                                </span>
                                Cập nhật
                            </button>
                            <button className={cx('addresses_content-item-button')}>
                                <span className={cx('addresses_content-item-button-icon')}>
                                    <Remove/>

                                </span>
                                Xoá
                            </button>
                        </div>
                    </div>
                    <div className={cx('addresses_content-item')}>
                        <div className={cx('addresses_content-item-address')}>
                            <span className={cx('addresses_content-item-address-name')}>Quach Nhat</span>
                            <br></br>
                            <span  className={cx('addresses_content-item-address-info')}>
                                64 ong ich khiem
                            </span>
                            <br></br>
                            <span  className={cx('addresses_content-item-address-info')}>
                                HCM
                            </span>
                            <br></br>
                            <span  className={cx('addresses_content-item-address-info')}>
                                Da Nang
                            </span>
                            <span  className={cx('addresses_content-item-address-info')}>
                                550000
                            </span>
                            <br></br>
                            <span  className={cx('addresses_content-item-address-info')}>
                                Vietnam
                            </span>
                            <br></br>
                            <span  className={cx('addresses_content-item-address-info')}>
                                0123456
                            </span>
                        </div>
                        <div className={cx('addresses_content-item-action')}>
                            <button className={cx('addresses_content-item-button')}>
                                <span className={cx('addresses_content-item-button-icon')}>
                                    <Edit/>
                                </span>
                                Edit
                            </button>
                            <button className={cx('addresses_content-item-button')}>
                                <span className={cx('addresses_content-item-button-icon')}>
                                    <Remove/>

                                </span>
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Addresses;
