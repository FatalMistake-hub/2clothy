import styles from './PaginationNav.module.scss';
import classNames from 'classnames/bind';
import { AngleLeft, AngleRight } from '../Icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function PaginationNav({ nPages, currentPage, setCurrentPage }) {
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
    const nextPage = () => {
        if (currentPage !== nPages) setCurrentPage(currentPage + 1);
    };
    const prevPage = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1);
    };
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('pagination-nav')}>
                <li className={cx('pagination-item')}>
                    <Link to="#" className={cx('pagination-item__link')} onClick={prevPage}>
                        <AngleLeft />
                    </Link>
                </li>
                {pageNumbers.map((pgNumber) => (
                    <li key={pgNumber} className={cx('pagination-item',`${currentPage === pgNumber ? 'active' : ''}`)}>
                        <Link to="#" className={cx('pagination-item__link')} onClick={()=>setCurrentPage(pgNumber)}>
                            <span className={cx('pagination-item__content')}>{pgNumber}</span>
                        </Link>
                    </li>
                ))}

                <li className={cx('pagination-item')}>
                    <Link to="#" className={cx('pagination-item__link')} >
                        <span className={cx('pagination-item__content')}>...</span>
                    </Link>
                </li>
                <li className={cx('pagination-item')}>
                    <Link to="#" className={cx('pagination-item__link')} onClick={nextPage}>
                        <AngleRight />
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default PaginationNav;
