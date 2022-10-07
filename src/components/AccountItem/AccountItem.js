import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return (
        <div 
        // to={`/@${data.nickname}`} 
        className={cx('wrapper')}>
            {/* <Image className={cx('avatar')} src={data.avatar} alt={data.name} /> */}
            <Link to={`/detail/${data.id}`}>
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span className={cx('name-text')}>{data.name}</span>
                        {/* {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />} */}
                    </h4>
                    {/* <span className={cx('username')}>{data.nickname}</span> */}
                </div>
            </Link>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountItem;
