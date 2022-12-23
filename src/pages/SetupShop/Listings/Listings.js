import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import Button from '~/components/Button';
import UploadImage from '~/services/imageService';
import SetupShopSlice from '~/redux/SetupShopSlice';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { setupShopRemainingSelector } from '~/redux/selector';
import styles from './Listings.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Listings() {
    const shopInfo = useSelector(setupShopRemainingSelector);
    const [images, setImages] = useState([]);
    const [imageURLS, setImageURLs] = useState(shopInfo.info.Paths);
    const [pathURLS, setPathURLs] = useState([]);
    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrls = [];

        // AddProductForm.values.Paths = images;

        images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
        setImageURLs(newImageUrls);
    }, [images]);
    const isValidFileUploaded = (file) => {
        const validExtensions = ['png', 'jpeg', 'jpg'];
        const fileExtension = file.type.split('/')[1];

        return validExtensions.includes(fileExtension);
    };
    function onImageChange(e) {
        const files = e.target.files;
        console.log(files);
        UploadImage(files, setPathURLs);

        let check;
        for (let i = 0; i < e.target.files.length; i++) {
            if (isValidFileUploaded(files[i])) {
                check = true;
            } else {
                check = false;
                break;
            }
        }
        if (files.length < 9 && check) {
            if (images.concat([...e.target.files]).length <= 9) {
                const data = images.concat([...e.target.files]);
                setImages(data);
            } else {
                alert('Over the allowed file amount');
            }
        } else {
            alert('File invalid');
        }
    }
    const inputFile = useRef(null);
    const onDivClick = () => {
        inputFile.current.click();
    };
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const infoShop = useFormik({
        initialValues: {
            phone: shopInfo.info.PhoneNumber,
            address: shopInfo.info.Address,
            description: shopInfo.info.Description,
            // name: shopInfo.reference.name,
        },
        validationSchema: Yup.object({
            phone: Yup.string().required('Bắt buộc!'),
            address: Yup.string().required('Bắt buộc!'),
            description: Yup.string().required('Bắt buộc!'),
            // path: Yup.string().required('Bắt buộc!'),
        }),
        onSubmit: (values) => {
            console.log({ Address: values.address, PhoneNumber: values.phone, Description: values.description, Paths: pathURLS });
            dispatch(
                SetupShopSlice.actions.handleInfo({
                    Address: values.address,
                    PhoneNumber: values.phone,
                    Description: values.description,
                    Paths: pathURLS,
                }),
            );
            navigate('/billing');
        },
    });
    return (
        <div className={cx('wrapper')}>
            <div className={cx('listing')}>
                <div className={cx('listing-title')}>
                    <h1 className={cx('listing-title-text')}>Thiết lập thông tin cửa hàng</h1>
                    <div className={cx('listing-help')}>Hãy cho chúng tôi biết một số thông tin về shop của bạn.</div>
                </div>
                <form onSubmit={infoShop.handleSubmit}>
                    <div className={cx('listing-container')}>
                        <div className={cx('listing-container-box')}>
                            <div className={cx('listing-form')}>
                                <div className={cx('listing-form-body')}>
                                    <div className={cx('listing-form-creditcard')}>
                                        <div className={cx('listing-form-creditcard-title')}>Thông tin cho shop </div>
                                        <div className={cx('listing-form-creditcard-item')}>
                                            <div className={cx('listing-form-creditcard-item-porperties')}>Số điện thoại &nbsp;*</div>
                                            <input
                                                id="phone"
                                                name="phone"
                                                value={infoShop.values.phone}
                                                onChange={infoShop.handleChange}
                                                type="text"
                                                className={cx('listing-form-creditcard-item-input')}
                                            />
                                        </div>
                                        <div className={cx('listing-form-creditcard-item')}>
                                            <div className={cx('listing-form-creditcard-item-porperties')}>Địa chỉ &nbsp;*</div>
                                            <textarea
                                                id="address"
                                                name="address"
                                                value={infoShop.values.address}
                                                onChange={infoShop.handleChange}
                                                rows="5"
                                                cols="33"
                                                className={cx('listing-form-creditcard-item-area')}
                                            />
                                        </div>
                                        <div className={cx('listing-form-creditcard-item')}>
                                            <div className={cx('listing-form-creditcard-item-porperties')}>Mô tả &nbsp;*</div>
                                            <textarea
                                                id="description"
                                                name="description"
                                                value={infoShop.values.description}
                                                onChange={infoShop.handleChange}
                                                rows="5"
                                                cols="33"
                                                className={cx('listing-form-creditcard-item-area')}
                                            />
                                        </div>
                                    </div>
                                    <div className={cx('listing-form-bannel')}>
                                        <div className={cx('listing-form-bannel-title')}>Ảnh bìa của shop</div>
                                        {/* <div className={cx('listing-form-bannel-item')}>
                                        <div className={cx('listing-form-bannel-item-porperties')}>Country</div>
                                        <input type="text" className={cx('listing-form-bannel-item-input')} />
                                    </div> */}
                                        <div className={cx('listing-form-bannel-content')}>
                                            {imageURLS?.map((imageSrc, i) => (
                                                <div key={i} className={cx('listing-form-bannel-image')}>
                                                    <div className={cx('listing-form-bannel-image-box')}>
                                                        <img
                                                            src={imageSrc}
                                                            alt="not fount"
                                                            className={cx('listing-form-bannel-image-data')}
                                                        />
                                                    </div>
                                                </div>
                                            ))}

                                            <div className={cx('listing-form-bannel-path')}>
                                                <div onClick={onDivClick} className={cx('listing-form-bannel-path-box')}>
                                                    <input
                                                        id="path"
                                                        name="path"
                                                        value={infoShop.values.path}
                                                        onChange={onImageChange}
                                                        type="file"
                                                        multiple={true}
                                                        className={cx('listing-form-bannel-path-input')}
                                                        ref={inputFile}
                                                    />
                                                    <div className={cx('listing-form-bannel-icon')}>
                                                        <div className={cx('listing-form-bannel-icon-box')}>
                                                            <i className={cx('listing-form-bannel-icon-data')}>
                                                                <svg viewBox="0 0 23 21" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M18.5 0A1.5 1.5 0 0 1 20 1.5V12c-.49-.07-1.01-.07-1.5 0V1.5H2v12.65l3.395-3.408a.75.75 0 0 1 .958-.087l.104.087L7.89 12.18l3.687-5.21a.75.75 0 0 1 .96-.086l.103.087 3.391 3.405c.81.813.433 2.28-.398 3.07A5.235 5.235 0 0 0 14.053 18H2a1.5 1.5 0 0 1-1.5-1.5v-15A1.5 1.5 0 0 1 2 0h16.5z"></path>
                                                                    <path d="M6.5 4.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM18.5 14.25a.75.75 0 0 1 1.5 0v2.25h2.25a.75.75 0 0 1 0 1.5H20v2.25a.75.75 0 0 1-1.5 0V18h-2.25a.75.75 0 0 1 0-1.5h2.25v-2.25z"></path>
                                                                </svg>
                                                            </i>
                                                        </div>
                                                        <div className={cx('listing-form-bannel-text')}>
                                                            Thêm hình ảnh ({imageURLS.length}/9)
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('listing-action')}>
                        <Button primary rounded large type="submit">
                            Lưu và tiếp tục
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Listings;
