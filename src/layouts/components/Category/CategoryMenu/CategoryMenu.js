import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import styles from './CategoryMenu.module.scss';
import * as searchServices from '~/services/searchService';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function CategoryMenu({ id }) {
    const [categoriesResult, setCategoriesResult] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await searchServices.categoriesById(id);

            setCategoriesResult(result);
        };

        fetchApi();
    }, [id]);
    return (
        <div className={cx('wrapper')}>
            {categoriesResult.map((result) => (
                <div key={result.id} className={cx('menu-item')}>
                    {/* <Link to={`/${id}`}></Link> */}
                    <Link to={`/`}>
                        <p className={cx('menu-item-content')}>&#62; {result.name}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default CategoryMenu;
