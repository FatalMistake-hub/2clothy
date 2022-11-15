import styles from './ErrorBox.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function ErrorBox({ data, status }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('errorResponse-box',`${status}`)}>
                <p className={cx('errorResponse-alert',`${status}`)}>{data}</p>
            </div>
        </div>
    );
}

export default ErrorBox;
