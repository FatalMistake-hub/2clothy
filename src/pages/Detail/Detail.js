import classNames from 'classnames/bind';
import { Carousel } from 'react-carousel-minimal';
import Button from '~/components/Button';
import { HandMade, Materials } from '~/components/Icons';
import PaginationNav from '~/components/PaginationNav/PaginationNav';
import ProductItem from '~/components/ProductItem';

import styles from './Detail.module.scss';
const cx = classNames.bind(styles);
const dataImage = [
    {
        image: 'https://i.etsystatic.com/6087155/r/il/a23943/840997306/il_794xN.840997306_4pn0.jpg',
    },
    {
        image: 'https://i.etsystatic.com/6087155/r/il/72563a/840783023/il_794xN.840783023_e1ex.jpg',
    },
    {
        image: 'https://i.etsystatic.com/6087155/c/1500/1191/0/33/il/f55f8d/840970050/il_794xN.840970050_aabq.jpg',
    },
    {
        image: 'https://i.etsystatic.com/6087155/r/il/ef8d7a/840988070/il_794xN.840988070_mcar.jpg',
    },
    {
        image: 'https://i.etsystatic.com/6087155/r/il/1453d1/2735501475/il_794xN.2735501475_350q.jpg',
    },
];

const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
};
const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
};
function Detail() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('image')}>
                    <div className={cx('image-wrapper')}>
                        <div
                        
                        >
                            <Carousel
                                data={dataImage}
                                time={3000}
                                width="1000px"
                                height="700px"
                                captionStyle={captionStyle}
                                radius="10px"
                                slideNumber={false}
                                slideNumberStyle={slideNumberStyle}
                                captionPosition="bottom"
                                automatic={true}
                                dots={false}
                                pauseIconColor="white"
                                pauseIconSize="40px"
                                slideBackgroundColor="darkgrey"
                                slideImageFit="cover"
                                thumbnails={true}
                                thumbnailWidth="100px"
                                style={{
                                    top: '0',
                                    left: '0',
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className={cx('odercard')}>
                    <div className={cx('ordercard-listing')}>
                        <div className={cx('odercard-listing-header')}>
                            <div className={cx('follow-shop')}>
                                <a href="/shop" className={cx('follow-shop-content')}>TheBeardedBee</a>
                                <Button rounded outline small>
                                    Follow
                                </Button>
                            </div>

                            <div className={cx('rateAndsold')}>
                                <span className={cx('sold-content')}>51,592 sales</span>
                                <span className={cx('septum')}>|</span>
                                <span className={cx('rate')}>
                                    <a href="" className={cx('rate-page')}>
                                        <span className={cx('rate-content')}></span>
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className={cx('product-name')}>
                            <h1 className={cx('product-name-content')}>Distressed Oversize Flannel Shirt</h1>
                        </div>
                        <div className={cx('buybox')}>
                            <div className={cx('buybox-info')}>
                                <div className={cx('buybox-data')}>
                                    <div className={cx('buybox-data-price')}>
                                        <p className={cx('buybox-data-price-content')}>665,025₫</p>
                                    </div>
                                    <div className={cx('buybox-data-caption')}>
                                        Local taxes included (where applicable)
                                    </div>
                                </div>
                            </div>
                            <div className={cx('optionbox')}>
                                <div className={cx('optionbox-item')}>
                                    <label htmlFor="selection-box" className={cx('optionbox-item-name')}>
                                        Size
                                        <span className={cx('optionbox-required')}></span>
                                    </label>
                                    <div className={cx('selection-box')}>
                                        <select name="" id="" className={cx('selection-input')}>
                                            <option value="" selected>
                                                Select an option
                                            </option>
                                            <option value="">XS US letter</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('buybox-button-box')}>
                                <Button  rounded login className={cx('buybox-button')}>
                                    Buy it now
                                </Button>
                            </div>
                            <div className={cx('buybox-button-box')}>
                                <Button primary rounded login className={cx('buybox-button', 'add')}>
                                    Add to cart
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('listing-info')}>
                    <div className={cx('listing-info-container')}>
                        <h2 className={cx('listing-info-item')}>
                            <button aria-expanded="true" className={cx('item-button')}>
                                Highlights
                                <span className={cx('item-arrow')}></span>
                            </button>
                        </h2>
                        <div className={cx('highlight-detail')}>
                            <ul className={cx('highlight-detail-ul')}>
                                <li className={cx('highlight-detail-item')}>
                                    <div className={cx('highlight-detail-item-icon')}>
                                        <HandMade />
                                    </div>
                                    <div className={cx('highlight-detail-item-content')}>HandMade</div>
                                </li>
                                <li className={cx('highlight-detail-item')}>
                                    <div className={cx('highlight-detail-item-icon')}>
                                        <Materials />
                                    </div>
                                    <div className={cx('highlight-detail-item-content')}>
                                        Materials: Cotton, Acrylic
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <h2 className={cx('listing-info-item')}>
                            <button className={cx('item-button')}>
                                Description
                                <span className={cx('item-arrow')}></span>
                            </button>
                        </h2>
                        <div className={cx('description-detail')}>
                            <div className={cx('description-detail-box')}>
                                <p className={cx('description-detail-text')}>
                                    These repurposed flannel shirts are made to order & undergo a special distressing
                                    process to create the perfect worn-in look. To add character to your shirt, you can
                                    select the level of distress that you would prefer from the drop-down menu. With
                                    each purchase, you will receive ONE flannel shirt with the level of wear you select.
                                    DISTRESS OPTIONS: 1. Plain/no damage- these shirts have light wear without any
                                    significant or noticeable damage. 2. A few small holes - these shirts include
                                    several small frayed holes. The distress adds character but is minimal. 3. Lots of
                                    paint/holes - these shirts undergo heavy wear & have many paint splatters and holes
                                    all over. These are the ultimate grunge shirts! SIZING: The shirts come in unisex
                                    men's sizes and can be worn by both men & women. Ordering your normal t-shirt size
                                    is recommended for a regular fit. Going 1 size up works best for an oversized fit.
                                    Do not go down a size because it will be too small. COLORS: The sample shirts in the
                                    photos have already sold and simply serve as a representation of the wide variety of
                                    colors that we have available. Each flannel is going to be different from the next,
                                    so you cannot request a specific one. We carry all colors of the rainbow and our
                                    inventory changes daily. If you are looking for specific color combinations, please
                                    do NOT buy these because we cannot guarantee that you will receive what you are
                                    looking for. If you happen to have general (non-specific) color preferences, you are
                                    welcome to leave a list of a few of your favorite colors in the comment box during
                                    checkout and we will do our very best to send you one. Keep in mind that orders with
                                    color requests can sometimes take longer to fill. Colors are subject to
                                    availability, which changes on a daily basis. Providing backup color options is
                                    recommended just in case the first is unavailable. If no color requests are made,
                                    you will receive one at random. FABRIC: All shirts are made of cotton, a cotton
                                    blend, or acrylic. Thickness varies by shirt. Let us know if you are allergic to any
                                    materials or fabrics when you place your order. If you would prefer a thinner or
                                    thicker shirt, you can let us know in the comment box during checkout. SHIPPING:
                                    These shirts are made to order and normally take 3-7 business days to process.
                                    Shipping typically takes 2-5 business days within the US & 1-4 weeks
                                    internationally. Please be advised that there could be minor delays due to the
                                    holidays and COVID19. [COVID19 UPDATE: International orders outside of the US are
                                    experiencing shipping delays and will likely take a minimum of 4 weeks to arrive. I
                                    apologize for any inconvenience this may cause. The transit times will only improve
                                    as the pandemic situation gets better.] Thanks for stopping by The Bearded Bee! Be
                                    sure to check out our shop for other unique vintage items!
                                    www.etsy.com/shop/thebeardedbee ©2015 Photography is the intellectual property of
                                    The Bearded Bee © and may not be used without express written permission from The
                                    Bearded Bee.
                                </p>
                            </div>
                            <div className={cx('description-button')}>
                                <button className={cx('description-button-data')}>Learn more about this item</button>
                            </div>
                        </div>
                        <h2 className={cx('listing-info-item')}>
                            <button className={cx('item-button')}>
                                Meet your seller
                                <span className={cx('item-arrow')}></span>
                            </button>
                        </h2>
                        <div className={cx('shop-detail')}>
                            <div className={cx('shop-detail-image')}>
                                <img
                                    src="	https://i.etsystatic.com/isla/0d943f/24592470/isla_75x75.24592470_8hq0chzw.jpg?version=0"
                                    alt=""
                                    className={cx('shop-detail-image-content')}
                                />
                            </div>
                            <div className={cx('shop-detail-info')}>
                                <p className={cx('shop-detail-name')}>Sara</p>
                                <p className={cx('shop-detail-owner')}>
                                    Owner of{' '}
                                    <a href="/shop" className={cx('shop-detail-owner-link')}>
                                        theBeardedBee
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('review')}>
                    <div className={cx('review-container')}>
                        <div className={cx('review-header')}>
                            <h2 className={cx('review-count')}>7,970 reviews</h2>
                            <span className={cx('review-rate')}></span>
                        </div>

                        <div className={cx('review-listing')}>
                            <div className={cx('review-listing-nav')}>
                                <button className={cx('review-listing-nav-button')}>
                                    Review for this item
                                    <span className={cx('review-listing-nav-button-content')}>1,051</span>
                                </button>
                                <button className={cx('review-listing-nav-button')}>
                                    Review for this shop
                                    <span className={cx('review-listing-nav-button-content')}>7,973</span>
                                </button>

                                <div className={cx('review-listing-nav-underline')}></div>
                            </div>
                            <div className={cx('review-listing-container')}>
                                <div className={cx('review-item')}>
                                    <div className={cx('review-item-data')}>
                                        <div className={cx('review-item-data-content')}>
                                            <div className={cx('review-item-rate')}></div>
                                            <p className={cx('review-item-text')}>
                                                It came exactly how I hoped! I asked for Charcoal And black and it came
                                                out great! It’s not cheaply made and it feels amazing!
                                            </p>
                                        </div>
                                        <div className={cx('review-item-purchase')}>
                                            <p className={cx('review-item-purchase-text')}>Purchased item: </p>
                                            <a href="" className={cx('review-item-purchase-link')}> Distressed Oversize Flannel Shirt</a>
                                        </div>
                                        <div className={cx('review-item-account')}>
                                            <img
                                                src="https://i.etsystatic.com/iusa/603882/95556902/iusa_75x75.95556902_dfi7.jpg?version=0"
                                                alt=""
                                                className={cx('review-item-account-image')}
                                            />
                                            <p className={cx('review-item-account-name')}>
                                                <a href="" className={cx('review-item-account-link')}>
                                                    Emily
                                                </a>
                                                Aug 29, 2022
                                            </p>
                                        </div>
                                    </div>
                                    <div className={cx('review-item-image')}>
                                        <button className={cx('review-item-image-button')}>
                                            <img
                                                src="https://i.etsystatic.com/iap/ae7c2f/4165938259/iap_300x300.4165938259_cdpll1pf.jpg?version=0"
                                                alt=""
                                                className={cx('review-item-image-data')}
                                            />
                                        </button>
                                    </div>
                                </div>
                                <div className={cx('review-item')}>
                                    <div className={cx('review-item-data')}>
                                        <div className={cx('review-item-data-content')}>
                                            <div className={cx('review-item-rate')}></div>
                                            <p className={cx('review-item-text')}>
                                                It came exactly how I hoped! I asked for Charcoal And black and it came
                                                out great! It’s not cheaply made and it feels amazing!
                                            </p>
                                        </div>
                                        <div className={cx('review-item-purchase')}>
                                            <p className={cx('review-item-purchase-text')}>Purchased item: </p>
                                            <a href="" className={cx('review-item-purchase-link')}> Distressed Oversize Flannel Shirt</a>
                                        </div>
                                        <div className={cx('review-item-account')}>
                                            <img
                                                src="https://i.etsystatic.com/iusa/603882/95556902/iusa_75x75.95556902_dfi7.jpg?version=0"
                                                alt=""
                                                className={cx('review-item-account-image')}
                                            />
                                            <p className={cx('review-item-account-name')}>
                                                <a href="" className={cx('review-item-account-link')}>
                                                    Emily
                                                </a>
                                                Aug 29, 2022
                                            </p>
                                        </div>
                                    </div>
                                    <div className={cx('review-item-image')}>
                                        <button className={cx('review-item-image-button')}>
                                            <img
                                                src="https://i.etsystatic.com/iap/ae7c2f/4165938259/iap_300x300.4165938259_cdpll1pf.jpg?version=0"
                                                alt=""
                                                className={cx('review-item-image-data')}
                                            />
                                        </button>
                                    </div>
                                </div>
                                <div className={cx('review-item')}>
                                    <div className={cx('review-item-data')}>
                                        <div className={cx('review-item-data-content')}>
                                            <div className={cx('review-item-rate')}></div>
                                            <p className={cx('review-item-text')}>
                                                It came exactly how I hoped! I asked for Charcoal And black and it came
                                                out great! It’s not cheaply made and it feels amazing!
                                            </p>
                                        </div>
                                        <div className={cx('review-item-purchase')}>
                                            <p className={cx('review-item-purchase-text')}>Purchased item: </p>
                                            <a href="" className={cx('review-item-purchase-link')}> Distressed Oversize Flannel Shirt</a>
                                        </div>
                                        <div className={cx('review-item-account')}>
                                            <img
                                                src="https://i.etsystatic.com/iusa/603882/95556902/iusa_75x75.95556902_dfi7.jpg?version=0"
                                                alt=""
                                                className={cx('review-item-account-image')}
                                            />
                                            <p className={cx('review-item-account-name')}>
                                                <a href="" className={cx('review-item-account-link')}>
                                                    Emily
                                                </a>
                                                Aug 29, 2022
                                            </p>
                                        </div>
                                    </div>
                                    <div className={cx('review-item-image')}>
                                        <button className={cx('review-item-image-button')}>
                                            <img
                                                src="https://i.etsystatic.com/iap/ae7c2f/4165938259/iap_300x300.4165938259_cdpll1pf.jpg?version=0"
                                                alt=""
                                                className={cx('review-item-image-data')}
                                            />
                                        </button>
                                    </div>
                                </div>
                                <div className={cx('review-item')}>
                                    <div className={cx('review-item-data')}>
                                        <div className={cx('review-item-data-content')}>
                                            <div className={cx('review-item-rate')}></div>
                                            <p className={cx('review-item-text')}>
                                                It came exactly how I hoped! I asked for Charcoal And black and it came
                                                out great! It’s not cheaply made and it feels amazing!
                                            </p>
                                        </div>
                                        <div className={cx('review-item-purchase')}>
                                            <p className={cx('review-item-purchase-text')}>Purchased item: </p>
                                            <a href="" className={cx('review-item-purchase-link')}> Distressed Oversize Flannel Shirt</a>
                                        </div>
                                        <div className={cx('review-item-account')}>
                                            <img
                                                src="https://i.etsystatic.com/iusa/603882/95556902/iusa_75x75.95556902_dfi7.jpg?version=0"
                                                alt=""
                                                className={cx('review-item-account-image')}
                                            />
                                            <p className={cx('review-item-account-name')}>
                                                <a href="" className={cx('review-item-account-link')}>
                                                    Emily
                                                </a>
                                                Aug 29, 2022
                                            </p>
                                        </div>
                                    </div>
                                    <div className={cx('review-item-image')}>
                                        <button className={cx('review-item-image-button')}>
                                            <img
                                                src="https://i.etsystatic.com/iap/ae7c2f/4165938259/iap_300x300.4165938259_cdpll1pf.jpg?version=0"
                                                alt=""
                                                className={cx('review-item-image-data')}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className={cx('review-pagination')}>
                        <PaginationNav />
                    </div>
                    </div>
                </div>
            <div className={cx('other-info')}>
                <div className={cx('other-info-header')}>
                    <div className={cx('other-info-header-box')}>
                        <div className={cx('other-info-header-content')}>More from this shop</div>
                        <Button  rounded>Follow</Button>
                    </div>
                    <Button rounded>
                        <a href="" className={cx('other-info-more')}>
                            See More
                        </a>
                    </Button>
                </div>
                <div className={cx('other-info-container')}>
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </div>
            </div>
            </div>
        </div>
    );
}

export default Detail;
