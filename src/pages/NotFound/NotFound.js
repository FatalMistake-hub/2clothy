import classNames from 'classnames/bind';

import styles from './NotFound.module.scss';

const cx = classNames.bind(styles);

function NotFound() {
    return (
            <body className={cx('body')}>
                <section id="not-found">
                    <div className={cx('title')}></div>
                    <div className={cx('circles')}>
                        <p className={cx('ptag')}>
                            404
                            <br />
                            <small className={cx('smalltag')}>PAGE NOT FOUND</small>
                        </p>
                        <span className={cx('circle', 'big')}></span>
                        <span className={cx('circle', 'med')}></span>
                        <span className={cx('circle', 'small')}></span>
                    </div>
                </section>
            </body>
            
    );
}

export default NotFound;
