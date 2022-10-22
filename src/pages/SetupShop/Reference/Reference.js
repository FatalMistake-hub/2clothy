import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import { Cỉrcle } from '~/components/Icons';
import config from '~/config';

import styles from './Reference.module.scss';

const cx = classNames.bind(styles);


function Reference() {
    return ( <div className={cx('wrapper')}>
        <div className={cx('reference')}>
            <div className={cx('reference-title')}>
                <h1 className={cx('reference-title-text')}>Name your shop</h1>
            </div>
            <div className={cx('reference-content')}>
                <div className={cx('reference-content-box')}>
                    <div className={cx('reference-help')}>Don’t sweat it! You can just draft a name now and change it later. We find sellers often draw inspiration from what they sell, their style, pretty much anything goes.</div>
                    <div className={cx('reference-inputGroup')}>
                        <input type="text"  placeholder="Enter your shop name" className={cx('reference-input')}/>
                    </div>
                    <div className={cx('reference-notice')}>
                        <div className={cx('reference-notice-item')}>
                            <span className={cx('reference-notice-item-icon')}>
                                <Cỉrcle/>
                            </span>
                            <div className={cx('reference-notice-item-text')}>Between 4-20 characters</div>
                        </div>
                        <div className={cx('reference-notice-item')}>
                            <span className={cx('reference-notice-item-icon')}>
                                <Cỉrcle/>
                            </span>
                            <div className={cx('reference-notice-item-text')}>No special characters, spaces, or accented letters</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('reference-action')}>
                <Link to ={config.routes.listings}><Button primary rounded large> Save and continue</Button></Link>
            </div>
        </div>
    </div> );
}

export default Reference;