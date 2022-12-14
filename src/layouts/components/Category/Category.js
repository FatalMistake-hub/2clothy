import classNames from 'classnames/bind';
import styles from './Category.module.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import * as searchServices from '~/services/apiService';
import CategoryMenu from './CategoryMenu';
import { Link } from 'react-router-dom';

import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);
function Category() {
    const [categoriesResult, setCategoriesResult] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await searchServices.allCategories();

            setCategoriesResult(result);
        };

        fetchApi();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('bar')}>
                {categoriesResult?.map((result) => (
                    <div key={result.id}>
                        <HeadlessTippy
                            // key={result.id}
                            interactive
                            offset={[-8, 2.5]}
                            placement="bottom-start"
                            // visible={showResult && searchResult.length > 0}
                            render={(attrs) => (
                                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        <CategoryMenu id={result.id} />
                                    </PopperWrapper>
                                </div>
                            )}
                            // onClickOutside={handleHideResult}
                        >
                            <li key={result.id} className={cx('item')}>
                                <Link to={`/${result.id}`}>
                                    <span className={cx('content')}>{result.name}</span>
                                </Link>
                            </li>
                        </HeadlessTippy>
                    </div>
                    
                ))}
            </ul>
            
        </div>
    );
}

export default Category;
