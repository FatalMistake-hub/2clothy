import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless'
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountsItem({ label }) {
    return (
        <>
            <Tippy
                interactive
                delay={[1000,0]}
                placement="bottom"
                render={()=> <h1>Account Item Preview</h1>}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1662004800&x-signature=NMhTOtyE4h8%2FLohAuNT%2F%2F7sNYSE%3D"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>QMN</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>QuachsMinhNhat</p>
                    </div>
                </div>
            </Tippy>
        </>
    );
}

AccountsItem.propTypes = {
    label: PropTypes.string.isRequired,
};
export default AccountsItem;
