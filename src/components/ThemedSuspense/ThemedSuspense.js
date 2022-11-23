import styles from './ThemedSuspense.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ThemedSuspense() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('lds-ripple')}>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default ThemedSuspense;
