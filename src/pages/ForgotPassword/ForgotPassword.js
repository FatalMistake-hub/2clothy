import { useState } from 'react';
import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './ForgotPassword.module.scss';
import * as searchServices from '~/services/apiService';

const cx = classNames.bind(styles);

function ForgotPassword() {
    const [checkSubmit, setcheckSubmit] = useState(true);
    const [gmail, setGmail] = useState();
    const handleGmail = (e) => {
        setGmail(e)
    };
    const changeForm = () => {
        setcheckSubmit(!checkSubmit);
        const fetchApi = async () => {
            const res= await searchServices.ForgotPassword(gmail)
            console.log(res)
        }
        fetchApi();
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('form-container')}>
                    {checkSubmit ? (
                        <div className={cx('form-container-inner')}>
                            <div className={cx('heading')}>
                                <h1 className={cx('heading-content')}>Đặt lại mật khẩu của bạn</h1>
                            </div>
                            <div className={cx('pane')}>
                                <div className={cx('input-group')}>
                                    <span className={cx('input-heading')}>
                                        Nhập địa chỉ email của bạn và chúng tôi sẽ gửi cho bạn một liên kết để đặt lại mật khẩu của bạn.
                                    </span>
                                    <input
                                        type="text"
                                        value={gmail}
                                        onChange={(e) => handleGmail(e.target.value)}
                                        className={cx('input-email')}
                                    />
                                </div>
                                <div className={cx('button')}>
                                    <Button primary onClick={()=>changeForm()}>
                                        Xác nhận
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className={cx('form-container-inner')}>
                            <div className={cx('heading')}>
                                <h1 className={cx('heading-content')}>Được rồi!</h1>
                            </div>
                            <div className={cx('pane')}>
                                <span className={cx('pane-content')}>
                                    Nếu tài khoản {gmail} tồn tại, một email xác nhận đã được gửi. Nó sẽ có một liên kết
                                    để đặt lại mật khẩu của bạn.
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
