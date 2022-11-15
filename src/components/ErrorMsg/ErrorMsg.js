import styles from './ErrorMsg.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function ErrorMsg({data,status}) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('errorBox')}>
                <p className={cx('errorMsg',{status})}>* {data} </p>
            </div>
        </div>
    );
}

export default ErrorMsg;
