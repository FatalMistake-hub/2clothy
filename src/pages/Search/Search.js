import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '~/components/Button';
import PaginationNav from '~/components/PaginationNav/PaginationNav';
import ProductItem from '~/components/ProductItem';

import * as searchServices from '~/services/searchService';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);
function Search() {
    const { id } = useParams();
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await searchServices.searchProduct(id);

            setSearchResult(result);
        };

        fetchApi();
    }, [id]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('body')}>
                    <div className={cx('header')}>
                        <h2 className={cx('header-text')}>Find something you love</h2>
                    </div>
                    <div className={cx('actions')}>
                        <Button rounded>Sort by</Button>
                    </div>
                    <div className={cx('product-results')}>
                        {searchResult.map((result) => (
                            <ProductItem key={result.id} data={result} />
                        ))}
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

export default Search;
