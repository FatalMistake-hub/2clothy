import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import Button from '~/components/Button';
import { Cỉrcle } from '~/components/Icons';
import config from '~/config';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Reference.module.scss';
import SetupShopSlice from '~/redux/SetupShopSlice';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { setupShopRemainingSelector } from '~/redux/selector';
import ErrorMsg from '~/components/ErrorMsg';

const cx = classNames.bind(styles);

function Reference() {
    const dispatch = useDispatch();
    const shopInfo = useSelector(setupShopRemainingSelector);
    const navigate = useNavigate();
    const NameShop = useFormik({
        initialValues: {
            name: shopInfo.reference.name,
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Bắt buộc!')
                .matches(/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi, 'Không sử dụng kí tự đặc biệt.')
                .matches(/^([a-zA-Z0-9_-]){4,20}$/gms, 'Nhập tên từ 4-20 kí tự.'),
        }),
        onSubmit: (values) => {
            console.log(values.name);
            dispatch(SetupShopSlice.actions.handleReference({ name: values.name }));
            navigate('/listings');
        },
    });
    return (
        <div className={cx('wrapper')}>
            <form onSubmit={NameShop.handleSubmit}>
                <div className={cx('reference')}>
                    <div className={cx('reference-title')}>
                        <h1 className={cx('reference-title-text')}>Đặt tên cho shop của bạn</h1>
                    </div>
                    <div className={cx('reference-content')}>
                        <div className={cx('reference-content-box')}>
                            <div className={cx('reference-help')}>
                                Đừng quá bận tâm! Bạn có thể đặt tên ngay bây giờ và thay đổi sau. Chúng tôi nhận thấy những người bán hàng
                                thường lấy cảm hứng từ những gì họ bán, phong cách của họ, hầu hết mọi thứ.
                            </div>
                            <div className={cx('reference-inputGroup')}>
                                <input
                                    id="name"
                                    name="name"
                                    value={NameShop.values.name}
                                    onChange={NameShop.handleChange}
                                    className={cx('reference-input')}
                                    type="text"
                                    placeholder="Nhập tên shop của bạn"
                                />
                            </div>
                            <div className={cx('reference-notice')}>
                                {NameShop.errors.name && <ErrorMsg data={NameShop.errors.name} />}
                                <div className={cx('reference-notice-item')}>
                                    <span className={cx('reference-notice-item-icon')}>
                                        <Cỉrcle />
                                    </span>
                                    <div className={cx('reference-notice-item-text')}>Từ 4-20 ký tự</div>
                                </div>
                                <div className={cx('reference-notice-item')}>
                                    <span className={cx('reference-notice-item-icon')}>
                                        <Cỉrcle />
                                    </span>
                                    <div className={cx('reference-notice-item-text')}>
                                    Không có ký tự đặc biệt hoặc chữ cái có dấu
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('reference-action')}>
                        <Button type="submit" primary rounded large>
                            {' '}
                            Lưu và tiếp tục
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Reference;
