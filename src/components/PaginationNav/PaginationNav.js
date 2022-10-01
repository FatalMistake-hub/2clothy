import styles from './PaginationNav.module.scss';
import classNames from 'classnames/bind';
import { AngleLeft, AngleRight } from '../Icons';

const cx = classNames.bind(styles);

function PaginationNav() {
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('pagination-nav')}>
                <li className={cx('pagination-item')}>
                    <a href="" className={cx('pagination-item__link')}>
                        <AngleLeft />
                    </a>
                </li>
                <li className={cx('pagination-item')}>
                    <a href="" className={cx('pagination-item__link')}>
                        <span className={cx('pagination-item__content')}>1</span>
                    </a>
                </li>
                <li className={cx('pagination-item')}>
                    <a href="" className={cx('pagination-item__link')}>
                        <span className={cx('pagination-item__content')}>2</span>
                    </a>
                </li>
                <li className={cx('pagination-item')}>
                    <a href="" className={cx('pagination-item__link')}>
                        <span className={cx('pagination-item__content')}>3</span>
                    </a>
                </li>
                <li className={cx('pagination-item')}>
                    <a href="" className={cx('pagination-item__link')}>
                        <span className={cx('pagination-item__content')}>4</span>
                    </a>
                </li>
                <li className={cx('pagination-item')}>
                    <a href="" className={cx('pagination-item__link')}>
                        <span className={cx('pagination-item__content')}>5</span>
                    </a>
                </li>
                <li className={cx('pagination-item')}>
                    <a href="" className={cx('pagination-item__link')}>
                        <span className={cx('pagination-item__content')}>6</span>
                    </a>
                </li>
                <li className={cx('pagination-item')}>
                    <a href="" className={cx('pagination-item__link')}>
                        <span className={cx('pagination-item__content')}>7</span>
                    </a>
                </li>
                <li className={cx('pagination-item')}>
                    <a href="" className={cx('pagination-item__link')}>
                        <span className={cx('pagination-item__content')}>8</span>
                    </a>
                </li>
                <li className={cx('pagination-item')}>
                    <a href="" className={cx('pagination-item__link')}>
                        <span className={cx('pagination-item__content')}>...</span>
                    </a>
                </li>
                <li className={cx('pagination-item')}>
                    <a href="" className={cx('pagination-item__link')}>
                        <AngleRight />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default PaginationNav;
