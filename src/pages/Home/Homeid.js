import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '~/components/Button';
import PaginationNav from '~/components/PaginationNav/PaginationNav';
import ProductItem from '~/components/ProductItem';
import config from '~/config';
import { useDebounce } from '~/hooks';
import * as searchServices from '~/services/searchService';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);
function Home() {
    const { id } = useParams();

    const [itemResult, setItemResult] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await searchServices.getAllItem();

            setItemResult(result);
        };

        fetchApi();
    }, []);
    const [allCategoriesResult, setallCategoriesResult] = useState([]);
    const [categoriesResult, setCategoriesResult] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await searchServices.categoriesById(id);
            const resultAllCategories = await searchServices.allCategories();

            setallCategoriesResult(resultAllCategories.find((result) => result.id == id));
            setCategoriesResult(result);
        };

        fetchApi();
    }, [id]);
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(48);

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = itemResult.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(itemResult.length / recordsPerPage);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('category')}>
                    <div className={cx('overflow-bg')}></div>
                    <div className={cx('pathAnddecription')}>
                        <h1 className={cx('category-father')}>{allCategoriesResult.name}</h1>
                        <div className={cx('description')}>{allCategoriesResult.description}</div>
                        <div>
                            <ul className={cx('path')}>
                                <li className={cx('path-item')}>
                                    <Link to={config.routes.home} className={cx('path-item-all')}>
                                        All
                                    </Link>
                                </li>
                                <li className={cx('path-item')}>
                                    <span> - </span>
                                </li>
                                <li className={cx('path-item')}>
                                    <span>{allCategoriesResult.name}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('category-list')}>
                        {categoriesResult.map((result) => (
                            <div key={result.id} className={cx('category-list-item')}>
                                <Link to={`/${id}`}>
                                    <img
                                        className={cx('image')}
                                        src="https://i.etsystatic.com/6653808/c/1041/1041/243/0…/f0c934/1079655740/il_300x300.1079655740_ol02.jpg"
                                        alt="Men's"
                                    />
                                </Link>
                                <p className={cx('name')}>{result.name}</p>
                            </div>
                        ))}
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
                        {currentRecords.map((result) => (
                            <ProductItem key={result.id} data={result} />
                        ))}
                    </div>
                    <div className={cx('search-pagination')}>
                        <h2 className={cx('search-pagination-text')}>There's so much more for you to discover</h2>
                        {nPages && currentPage && (
                            <PaginationNav nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
