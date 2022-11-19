import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import { Cỉrcle } from '~/components/Icons';
import config from '~/config';

import styles from './Reference.module.scss';

const cx = classNames.bind(styles);


function Reference() {
    return ( <div className={cx('wrapper')}>
        <div className={cx('reference')}>
            <div className={cx('reference-title')}>
                <h1 className={cx('reference-title-text')}>Đặt tên cho shop của bạn</h1>
            </div>
            <div className={cx('reference-content')}>
                <div className={cx('reference-content-box')}>
                    <div className={cx('reference-help')}>Đừng quá bận tâm! Bạn có thể đặt tên ngay bây giờ và thay đổi sau. Chúng tôi nhận thấy những người bán hàng thường lấy cảm hứng từ những gì họ bán, phong cách của họ, hầu hết mọi thứ.</div>
                    <div className={cx('reference-inputGroup')}>
                        <input type="text"  placeholder="Nhập tên shop của bạn" className={cx('reference-input')}/>
                    </div>
                    <div className={cx('reference-notice')}>
                        <div className={cx('reference-notice-item')}>
                            <span className={cx('reference-notice-item-icon')}>
                                <Cỉrcle/>
                            </span>
                            <div className={cx('reference-notice-item-text')}>Between 4-20 characters</div>
                        </div>
                        <div className={cx('reference-notice-item')}>
                            <span className={cx('reference-notice-item-icon')}>
                                <Cỉrcle/>
                            </span>
                            <div className={cx('reference-notice-item-text')}>No special characters, spaces, or accented letters</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('reference-action')}>
                <Link to ={config.routes.listings}><Button primary rounded large> Lưu và tiếp tục</Button></Link>
            </div>
        </div>
    </div> );
}

export default Reference;