import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PaginationNav from '~/components/PaginationNav/PaginationNav';
import ProductItem from '~/components/ProductItem';
import SelectSort from '~/components/SelectSort';
import config from '~/config';
import * as searchServices from '~/services/apiService';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);
function Home() {
    const { id } = useParams();

    const [itemResult, setItemResult] = useState([]);
    const [categoriesResult, setCategoriesResult] = useState([]);
    const [breadcrumb, setBreadcrumb] = useState([]);

    useEffect(() => {
        const fetchApiCategory = async (id) => {
            const dataCategory = await searchServices.categoriesById(id);
            const itemCategory = await searchServices.productByCategory(id);
            setItemResult(itemCategory.items);
            setRawResult(itemCategory.items)
            setCategoriesResult(dataCategory);
            setBreadcrumb([itemCategory]);
            // console.log(breadcrumb);
        };
        fetchApiCategory(id);
    }, [id]);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await searchServices.getAllItem();
            setItemResult(result);
            setRawResult(result);
            const resultCategory = await searchServices.allCategories();
            setCategoriesResult(resultCategory);
        };
        fetchApi();
    }, []);

    const fetchApi = async () => {
        const result = await searchServices.allCategories();
        const resultItem = await searchServices.getAllItem();
        setItemResult(resultItem);
        setRawResult(resultItem)
        setCategoriesResult(result);
        setBreadcrumb([]);
    };
    const fetchApiCategory = async (category) => {
        const dataCategory = await searchServices.categoriesById(category.id);
        const itemCategory = await searchServices.productByCategory(category.id);
        setItemResult(itemCategory.items);
        setRawResult(itemCategory.items)
        setCategoriesResult(dataCategory);
        breadcrumb.push(category);
    };
    const fetchApiCategoryBreadcrumb = async (category) => {
        const dataCategory = await searchServices.categoriesById(category.id);
        const itemCategory = await searchServices.productByCategory(category.id);
        setItemResult(itemCategory.items);
        setRawResult(itemCategory.items)
        setCategoriesResult(dataCategory);
        const a = breadcrumb.slice(0, breadcrumb.indexOf(category) + 1);
        setBreadcrumb(a);
    };

    // Pagination
    const [rawItem, setRawResult] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(48);

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = itemResult?.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(itemResult?.length / recordsPerPage);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('category')}>
                    <div className={cx('overflow-bg')}></div>
                    <div className={cx('pathAnddecription')}>
                        {breadcrumb[breadcrumb.length - 1] ? (
                            <>
                                <h1 className={cx('category-father')}>{breadcrumb[breadcrumb.length - 1]?.name}</h1>
                                <div className={cx('description')}>{breadcrumb[breadcrumb.length - 1]?.description}</div>
                            </>
                        ) : (
                            <>
                                <h1 className={cx('category-father')}>Tất cả danh mục</h1>
                                <div className={cx('description')}>
                                    Những bộ quần áo dành cho nam giới, phụ nữ, trẻ em và cho cả trẻ sơ sinh
                                </div>
                            </>
                        )}
                        <div>
                            <ul className={cx('path')}>
                                <li className={cx('path-item')} onClick={() => fetchApi()}>
                                    Trang chủ
                                </li>

                                {breadcrumb?.map((breadcrumb) => (
                                    <>
                                        <li className={cx('path-breadcrumb')}>
                                            <span> - </span>
                                        </li>
                                        <li className={cx('path-item')}>
                                            <span className={cx('path-item-text')} onClick={() => fetchApiCategoryBreadcrumb(breadcrumb)}>
                                                {breadcrumb?.name}
                                            </span>
                                        </li>
                                    </>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={cx('category-list')}>
                        {categoriesResult?.map((result) => (
                            <div key={result.id} className={cx('category-list-item')}>
                                <img className={cx('image')} src={result.imagePath} alt="Men's" onClick={() => fetchApiCategory(result)} />

                                <p className={cx('name')}>{result.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={cx('body')}>
                    <div className={cx('header')}>
                        <h2 className={cx('header-text')}>Tìm thứ gì đó bạn yêu thích</h2>
                    </div>
                    <div className={cx('actions')}>
                        <SelectSort rawItem={rawItem} itemResult={itemResult} setItemResult={setItemResult} />
                    </div>
                    <div className={cx('product-results')}>
                        {currentRecords?.map((result) => (
                            <ProductItem key={result.id} data={result} />
                        ))}
                    </div>
                    <div className={cx('search-pagination')}>
                        <h2 className={cx('search-pagination-text')}>Còn rất nhiều điều để bạn khám phá</h2>
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
