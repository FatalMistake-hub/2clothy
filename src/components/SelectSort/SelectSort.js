import styles from './SelectSort.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SelectSort({ rawItem,itemResult, setItemResult }) {
    
    const sortList = (selectEvent) => {
        const options = {
            'Lowest Price': [...itemResult].sort((a, b) => a.price - b.price),
            'Highest Price': [...itemResult].sort((a, b) => b.price - a.price),
            'Most Recent': [...itemResult].sort((a, b) => b.price - a.price),
            'All': [...rawItem],
        };
        setItemResult(options[selectEvent.target.value]);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <div className={cx('tittle')}>Sắp xếp theo :</div>
                <select onChange={sortList} className={cx('body__select')}>
                    <option className={cx('body__select-option')} value="All">Tất cả</option>
                    {/* <option className={cx('body__select-option')} value="Most Recent">Hàng mới </option> */}
                    <option className={cx('body__select-option')} value="Lowest Price">Giá thấp đến cao </option>
                    <option className={cx('body__select-option')} value="Highest Price">Giá cao đến thấp </option>
                </select>
            </div>
        </div>
    );
}

export default SelectSort;
