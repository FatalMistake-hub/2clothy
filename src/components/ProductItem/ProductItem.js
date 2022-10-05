import styles from './ProductItem.module.scss';
import classNames from 'classnames/bind';
import { StarIcon } from '../Icons';
import { Link } from 'react-router-dom';
import config from '~/config'
const cx = classNames.bind(styles);
function ProductItem({data}) {
    return (
        <div className={cx('container')}>
            <Link to={`/detail/${data.id}`} className={cx('image-link')}>
                <div className={cx('image-box')}>
                    <img
                        // src="https://i.etsystatic.com/8261264/c/939/746/7/307/il/caceb6/1495657007/il_340x270.1495657007_pv76.jpg"
                        src={(data.images)[0].path}
                        alt=""
                        className={cx('image-content')}
                    />
                </div>
            </Link>
            <div className={cx('card')}>
                <h2 className={cx('card-title')}>
                    {data.name}
                {/* Womens Wool Cardigan, Wrap Coat, Maxi Cardigan, Loose Cardigan, Plus Size Coat, Minimalist Coat, Elegant Coat, Hooded Coat, Long Cardigan */}
        
                </h2>
                <div className={cx('card-rateAndsold')}>
                    <span className={cx('card-rate')}>
                        <span><StarIcon/> </span>
                        <span><StarIcon/> </span>
                        <span><StarIcon/> </span>
                        <span><StarIcon/> </span>
                        <span><StarIcon/> </span>
                    </span>
                    <span className={cx('card-sold')}>
                        {/* (1,746) */}
                        ({data.quantity})
                    </span>
                </div>
                <p className={cx('card-price')}>
                    <span className={cx('currency-value')}>
                        {/* 3,423,645 */}
                        {data.price}
                        </span>
                    <span className={cx('currncy-symbol')}>₫</span>
                </p>
            </div>
            <p className={cx('shop-name')}>
                {/* Doroteyya */}
                {data.shopName}
                </p>
        </div>
    );
}

export default ProductItem;
