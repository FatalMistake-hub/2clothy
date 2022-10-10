import classNames from 'classnames/bind';
import { Carousel } from 'react-carousel-minimal';
import Button from '~/components/Button';
import { HandMade, Materials } from '~/components/Icons';
import PaginationNav from '~/components/PaginationNav/PaginationNav';
import ProductItem from '~/components/ProductItem';
import { Link, useParams } from 'react-router-dom';
import config from '~/config';
import styles from './Detail.module.scss';
import * as searchServices from '~/services/searchService';

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import addCartSlice from '../../redux/CartSlice';

const cx = classNames.bind(styles);

function Detail() {
    const { id } = useParams();
    const [detailResult, setDetailResult] = useState();

    useEffect(() => {
        const fetchApi = async () => {
            const result = await searchServices.detailProduct(id);

            setDetailResult(result[0]);
        };

        fetchApi();
    }, [id]);
    console.log(id);

    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const handleQuantity = (e) => {
        setQuantity(e.target.value);
    };
    const handleAddtoCart = () => {
        dispatch(
            addCartSlice.actions.addProductItem({
                idShop: '',
                shopName: detailResult.shopName,
                shopImage: '',
                productItem: [
                    {
                        id: detailResult.id,
                        itemName: detailResult.name,
                        size: detailResult.size,
                        productImage: '',
                        quantity: parseInt(quantity),
                        // quantity: detailResult.quantity / 100,
                        price: detailResult.price,
                    },
                ],
            }),
        );
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('image')}>
                    <div className={cx('image-wrapper')}>
                        <div>
                            <Carousel
                                data={
                                    detailResult
                                        ? [
                                              {
                                                  path: detailResult.images[0].path,
                                              },
                                          ]
                                        : [
                                              {
                                                  path: '',
                                              },
                                          ]
                                }
                                time={3000}
                                width="1000px"
                                height="700px"
                                // captionStyle={captionStyle}
                                radius="10px"
                                slideNumber={false}
                                // slideNumberStyle={slideNumberStyle}
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
                                <Link to={config.routes.shop} className={cx('follow-shop-content')}>
                                    {/* TheBeardedBee */}
                                    {detailResult ? detailResult.shopName : ''}
                                </Link>
                                <Button rounded outline small>
                                    Follow
                                </Button>
                            </div>
                            <div className={cx('rateAndsold')}>
                                <span className={cx('sold-content')}>
                                    {' '}
                                    {detailResult ? detailResult.quantity.toLocaleString('es-ES') : ''} sales
                                </span>
                                <span className={cx('septum')}>|</span>
                                <span className={cx('rate')}>
                                    <a href="" className={cx('rate-page')}>
                                        <span className={cx('rate-content')}></span>
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className={cx('product-name')}>
                            <h1 className={cx('product-name-content')}> {detailResult ? detailResult.name : ''}</h1>
                        </div>
                        <div className={cx('buybox')}>
                            <div className={cx('buybox-info')}>
                                <div className={cx('buybox-data')}>
                                    <div className={cx('buybox-data-price')}>
                                        <p className={cx('buybox-data-price-content')}>
                                            {' '}
                                            {detailResult ? detailResult.price.toLocaleString('es-ES') : ''}₫
                                        </p>
                                    </div>
                                    <div className={cx('buybox-data-caption')}>Local taxes included (where applicable)</div>
                                </div>
                            </div>
                            <div className={cx('optionbox')}>
                                <div className={cx('optionbox-item')}>
                                    <label htmlFor="selection-box" className={cx('optionbox-item-name')}>
                                        Size
                                        <span className={cx('optionbox-required')}></span>
                                    </label>
                                    <div className={cx('selection-box')}>
                                        <select defaultValue={'Default'} className={cx('selection-input')}>
                                            {/* <option value="Default">Size</option> */}
                                            <option value="">{detailResult ? detailResult.size : ''}</option>
                                        </select>
                                    </div>
                                </div>
                                <div className={cx('optionbox-item')}>
                                    <label htmlFor="selection-box" className={cx('optionbox-item-name')}>
                                        Số lượng
                                        <span className={cx('optionbox-required')}></span>
                                    </label>
                                    {/* <div className={cx('selection-box')}>
                                        <select defaultValue={'Default'} className={cx('selection-input')}>
                                            
                                            {detailResult &&
                                                [...Array(detailResult.quantity + 1).keys()].slice(1).map((result) => (
                                                    <option key={result} value="">{result}</option>
                                                ))}
                                        </select>
                                    </div> */}
                                    <div className={cx('selection-box')}>
                                        <input
                                            type="number"
                                            min="1"
                                            step="1"
                                            className={cx('selection-input')}
                                            value={quantity}
                                            onChange={handleQuantity}
                                        ></input>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('buybox-button-box')}>
                                <Button rounded login className={cx('buybox-button')}>
                                    Buy it now
                                </Button>
                            </div>
                            <div className={cx('buybox-button-box')}>
                                <Button onClick={handleAddtoCart} primary rounded login className={cx('buybox-button', 'add')}>
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
                                Highlights :<span className={cx('item-arrow')}></span>
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
                                    <div className={cx('highlight-detail-item-content')}>Materials: Cotton, Acrylic</div>
                                </li>
                            </ul>
                        </div>
                        <h2 className={cx('listing-info-item')}>
                            <button className={cx('item-button')}>
                                Description :<span className={cx('item-arrow')}></span>
                            </button>
                        </h2>
                        <div className={cx('description-detail')}>
                            <div className={cx('description-detail-box')}>
                                <p className={cx('description-detail-text')}>{detailResult ? detailResult.description : ''}</p>
                            </div>
                            {/* <div className={cx('description-button')}>
                                <button className={cx('description-button-data')}>Learn more about this item</button>
                            </div> */}
                        </div>
                        <h2 className={cx('listing-info-item')}>
                            <button className={cx('item-button')}>
                                Meet your seller :<span className={cx('item-arrow')}></span>
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
                                    <Link to={config.routes.shop} className={cx('shop-detail-owner-link')}>
                                        {detailResult ? detailResult.shopName : ''}
                                    </Link>
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
                                                It came exactly how I hoped! I asked for Charcoal And black and it came out great! It’s not
                                                cheaply made and it feels amazing!
                                            </p>
                                        </div>
                                        <div className={cx('review-item-purchase')}>
                                            <p className={cx('review-item-purchase-text')}>Purchased item: </p>
                                            <a href="" className={cx('review-item-purchase-link')}>
                                                {' '}
                                                Distressed Oversize Flannel Shirt
                                            </a>
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
                        <div className={cx('review-pagination')}>{/* <PaginationNav /> */}</div>
                    </div>
                </div>
                <div className={cx('other-info')}>
                    <div className={cx('other-info-header')}>
                        <div className={cx('other-info-header-box')}>
                            <div className={cx('other-info-header-content')}>More from this shop</div>
                            <Button rounded>Follow</Button>
                        </div>
                        <Button rounded>
                            <a href="" className={cx('other-info-more')}>
                                See More
                            </a>
                        </Button>
                    </div>
                    <div className={cx('other-info-container')}>
                        {/* <ProductItem />
                        <ProductItem />
                        <ProductItem />
                        <ProductItem /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;
