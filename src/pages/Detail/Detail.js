import classNames from 'classnames/bind';
import { Carousel } from 'react-carousel-minimal';
import Button from '~/components/Button';
import { HandMade, Materials } from '~/components/Icons';
import PaginationNav from '~/components/PaginationNav/PaginationNav';
import ProductItem from '~/components/ProductItem';
import { Link, useParams } from 'react-router-dom';
import config from '~/config';
import styles from './Detail.module.scss';
import * as searchServices from '~/services/apiService';

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CartSlice from '../../redux/CartSlice';

const cx = classNames.bind(styles);

function Detail() {
    const { id } = useParams();
    const [detailResult, setDetailResult] = useState();
    const [shopResult, setShopResult] = useState();
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    useEffect(() => {
        const fetchApi = async () => {
            const result = await searchServices.detailProduct(id);
            setDetailResult(result[0]);
        };

        fetchApi();
    }, [id]);
    useEffect(() => {
        const fetchApi = async () => {
            const resultShop = await searchServices.allShopProducts(detailResult?.shopId);
            setShopResult(shuffleArray(resultShop[0].items).slice(0, 4));
        };

        fetchApi();
    }, [detailResult]);

    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const handleQuantity = (e) => {
        setQuantity(e.target.value);
    };
    const handleAddtoCart = () => {
        dispatch(
            CartSlice.actions.addProductItem({
                shopId: detailResult.shopId,
                shopName: detailResult.shopName,
                shopImage: '',
                orderDetails: [
                    {
                        itemId: detailResult.id,
                        itemName: detailResult.name,
                        size: detailResult.size,
                        itemImg: detailResult.images[0].path,
                        quantity: parseInt(quantity),
                        // quantity: detailResult.quantity / 100,
                        price: detailResult.price,
                    },
                ],
            }),
        );
    };
    // console.log(detailResult?.images)
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('image')}>
                    <div className={cx('image-wrapper')}>
                        <div>
                            <Carousel
                                data={
                                    detailResult
                                        ? detailResult?.images
                                        : [
                                              {
                                                  path: '',
                                              },
                                          ]
                                }
                                time={3000}
                                width="900px"
                                height="600px"
                                radius="10px"
                                slideNumber={true}
                                slideNumberStyle={{ fontSize: '10px', fontWeight: 'bold', color: 'black' }}
                                captionPosition="bottom"
                                automatic={true}
                                dots={true}
                                pauseIconColor="white"
                                pauseIconSize="40px"
                                slideBackgroundColor="rgba(170, 170, 170, 0.034)"
                                slideImageFit="contain"
                                thumbnails={true}
                                thumbnailWidth="100px"
                                style={{
                                    // top: '0',
                                    // left: '0',
                                    overflow: 'hidden',
                                    zindex: '-1',
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className={cx('odercard')}>
                    <div className={cx('ordercard-listing')}>
                        <div className={cx('odercard-listing-header')}>
                            <div className={cx('follow-shop')}>
                                <Link to={`/shop/${detailResult?.shopId}`} className={cx('follow-shop-content')}>
                                    {detailResult ? detailResult.shopName : ''}
                                </Link>
                                <Button rounded outline small>
                                    Theo dõi
                                </Button>
                            </div>
                            <div className={cx('rateAndsold')}>
                                <span className={cx('sold-content')}>
                                    Đã Bán {detailResult ? detailResult.quantity.toLocaleString('es-ES') : ''}
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
                                            {detailResult ? detailResult.price.toLocaleString('es-ES') : ''}₫
                                        </p>
                                    </div>
                                    <div className={cx('buybox-data-caption')}>Đã bao gồm thuế địa phương (nếu có)</div>
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
                                    Mua Ngay
                                </Button>
                            </div>
                            <div className={cx('buybox-button-box')}>
                                <Button onClick={handleAddtoCart} primary rounded login className={cx('buybox-button', 'add')}>
                                    Thêm Vào Giỏ Hàng
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('listing-info')}>
                    <div className={cx('listing-info-container')}>
                        {/* <h2 className={cx('listing-info-item')}>
                            <button aria-expanded="true" className={cx('item-button')}>
                                Điểm nổi bật :<span className={cx('item-arrow')}></span>
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
                        </div> */}
                        <h2 className={cx('listing-info-item')}>
                            <button className={cx('item-button')}>
                                Mô tả :<span className={cx('item-arrow')}></span>
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
                                Cửa hàng :<span className={cx('item-arrow')}></span>
                            </button>
                        </h2>
                        <div className={cx('shop-detail')}>
                            <div className={cx('shop-detail-image')}>
                                <img
                                    src="	https://i.etsystatic.com/isla/0d943f/24592470/isla_75x75.24592470_8hq0chzw.jpg?version=0"
                                    loading="lazy"
                                    className={cx('shop-detail-image-content')}
                                />
                            </div>
                            <div className={cx('shop-detail-info')}>
                                <p className={cx('shop-detail-name')}>Sara</p>
                                <p className={cx('shop-detail-owner')}>
                                    Chủ sở hữu{' '}
                                    <Link to={`/shop/${detailResult?.shopId}`} className={cx('shop-detail-owner-link')}>
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
                            <h2 className={cx('review-count')}>7,970 đánh giá</h2>
                            <span className={cx('review-rate')}></span>
                        </div>

                        <div className={cx('review-listing')}>
                            <div className={cx('review-listing-nav')}>
                                <button className={cx('review-listing-nav-button')}>
                                    Đánh giá của sản phẩm
                                    <span className={cx('review-listing-nav-button-content')}>1,051</span>
                                </button>
                                <button className={cx('review-listing-nav-button')}>
                                    Đánh giá của cửa hàng
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
                                                loading="lazy"
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
                                                loading="lazy"
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
                            <div className={cx('other-info-header-content')}>Các sản phẩm khác của shop</div>
                            <Button rounded>Theo dõi</Button>
                        </div>
                        <Button rounded>
                            <Link to={`/shop/${detailResult?.shopId}`} className={cx('other-info-more')}>
                                Xem thêm
                            </Link>
                        </Button>
                    </div>
                    <div className={cx('other-info-container')}>
                        {shopResult?.map((result) => (
                            <ProductItem key={result.id} data={result} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;
