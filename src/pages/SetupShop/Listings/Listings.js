import classNames from 'classnames/bind';
import Button from '~/components/Button';

import styles from './Listings.module.scss';

const cx = classNames.bind(styles);

function Listings() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('billing')}>
                <div className={cx('billing-title')}>
                    <h1 className={cx('billing-title-text')}>Set up billing</h1>
                    <div className={cx('billing-help')}>Let us know how you'd like to pay your Etsy bill.</div>
                </div>
                <div className={cx('billing-container')}>
                    <div className={cx('billing-container-box')}>
                        <div className={cx('billing-form')}>
                            <div className={cx('billing-form-body')}>
                                <div className={cx('billing-form-creditcard')}>
                                    <div className={cx('billing-form-creditcard-title')}>Add a credit card</div>
                                    <div className={cx('billing-form-creditcard-item')}>
                                        <div className={cx('billing-form-creditcard-item-porperties')}>Card number &nbsp;*</div>
                                        <input type="text" className={cx('billing-form-creditcard-item-input')} />
                                    </div>
                                    <div className={cx('billing-form-creditcard-item')}>
                                        <div className={cx('billing-form-creditcard-item-porperties')}>Card number &nbsp;*</div>
                                        <input type="text" className={cx('billing-form-creditcard-item-input')} />
                                    </div>
                                    <div className={cx('billing-form-creditcard-item')}>
                                        <div className={cx('billing-form-creditcard-item-porperties')}>Card number &nbsp;*</div>
                                        <input type="text" className={cx('billing-form-creditcard-item-input')} />
                                    </div>
                                </div>
                                <div className={cx('billing-form-address')}>
                                    <div className={cx('billing-form-address-title')}>Listings address</div>
                                    <div className={cx('billing-form-address-item')}>
                                        <div className={cx('billing-form-address-item-porperties')}>Country</div>
                                        <input type="text" className={cx('billing-form-address-item-input')} />
                                    </div>
                                    <div className={cx('billing-form-address-item')}>
                                        <div className={cx('billing-form-address-item-porperties')}>Country</div>
                                        <input type="text" className={cx('billing-form-address-item-input')} />
                                    </div>
                                    <div className={cx('billing-form-address-item')}>
                                        <div className={cx('billing-form-address-item-porperties')}>Country</div>
                                        <input type="text" className={cx('billing-form-address-item-input')} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('billing-notice')}>
                            <div className={cx('billing-notice-header')}>
                                <span className={cx('billing-notice-header-text')}>You won't be charged now.</span>
                            </div>
                            <div className={cx('billing-notice-body')}>
                                <p className={cx('billing-notice-body-content')}>
                                    We will add <strong >4,762₫</strong>* to your Payment account for the listing in your
                                    shop, which will be due on the first day of the next calendar month.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('billing-action')}>
                    <Button primary rounded large>
                        
                        Save and continue
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Listings;
