import classNames from 'classnames/bind';
import Button from '~/components/Button';
import PaginationNav from '~/components/PaginationNav/PaginationNav';
import ProductItem from '~/components/ProductItem';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('category')}>
                    <div className={cx('overflow-bg')}></div>
                    <div className={cx('pathAnddecription')}>
                        <h1 className={cx('category-father')}>Clothing & Shoes</h1>
                        <div className={cx('description')}>
                            All things wonderful and wearable for men, women, kids, and even little bitty babies
                        </div>
                        <div>
                            <ul className={cx('path')}>
                                <li className={cx('path-item')}>
                                    <a href="" className={cx('path-item-all')}>
                                        All
                                    </a>
                                </li>
                                <li className={cx('path-item')}>
                                    <span> - </span>
                                </li>
                                <li className={cx('path-item')}>
                                    <span>Clothing & Shoes</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('category-list')}>
                        <div className={cx('category-list-item')}>
                            <a href="">
                                <img
                                    className={cx('image')}
                                    src="https://i.etsystatic.com/6653808/c/1041/1041/243/0…/f0c934/1079655740/il_300x300.1079655740_ol02.jpg"
                                    alt="Men's"
                                />
                            </a>
                            <p className={cx('name')}>Men's</p>
                        </div>
                        <div className={cx('category-list-item')}>
                            <a href="">
                                <img
                                    className={cx('image')}
                                    src="https://i.etsystatic.com/6653808/c/1041/1041/243/0…/f0c934/1079655740/il_300x300.1079655740_ol02.jpg"
                                    alt="Men's"
                                />
                            </a>
                            <p className={cx('name')}>Men's</p>
                        </div>
                        <div className={cx('category-list-item')}>
                            <a href="">
                                <img
                                    className={cx('image')}
                                    src="https://i.etsystatic.com/6653808/c/1041/1041/243/0…/f0c934/1079655740/il_300x300.1079655740_ol02.jpg"
                                    alt="Men's"
                                />
                            </a>
                            <p className={cx('name')}>Men's</p>
                        </div>
                        <div className={cx('category-list-item')}>
                            <a href="">
                                <img
                                    className={cx('image')}
                                    src="https://i.etsystatic.com/6653808/c/1041/1041/243/0…/f0c934/1079655740/il_300x300.1079655740_ol02.jpg"
                                    alt="Men's"
                                />
                            </a>
                            <p className={cx('name')}>Men's</p>
                        </div>
                        <div className={cx('category-list-item')}>
                            <a href="">
                                <img
                                    className={cx('image')}
                                    src="https://i.etsystatic.com/6653808/c/1041/1041/243/0…/f0c934/1079655740/il_300x300.1079655740_ol02.jpg"
                                    alt="Men's"
                                />
                            </a>
                            <p className={cx('name')}>Men's</p>
                        </div>
                        <div className={cx('category-list-item')}>
                            <a href="">
                                <img
                                    className={cx('image')}
                                    src="https://i.etsystatic.com/6653808/c/1041/1041/243/0…/f0c934/1079655740/il_300x300.1079655740_ol02.jpg"
                                    alt="Men's"
                                />
                            </a>
                            <p className={cx('name')}>Men's</p>
                        </div>
                    </div>
                </div>
                <div className={cx('body')}>
                    <div className={cx('header')}>
                        <h2 className={cx('header-text')}>Find something you love</h2>
                    </div>
                    <div className={cx('actions')}>
                        <Button rounded>Sort by</Button>
                    </div>
                    <div className={cx('product-results')}>
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />
                    </div>
                    <div className={cx('search-pagination')}>
                        <h2 className={cx('search-pagination-text')}>There's so much more for you to discover</h2>
                        <PaginationNav />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
