import classNames from 'classnames/bind';
import moment from 'moment/moment';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthSlice from '~/redux/AuthSlice';
import { authRemainingSelector } from '~/redux/selector';
import { getUser } from '~/services/authService';
import { createAxios } from '~/services/createInstance';
import styles from './Account.module.scss';

const cx = classNames.bind(styles);
function Account() {
    const user = useSelector(authRemainingSelector);
    const currentUser = user?.login.currentUser;
    const accessToken = currentUser?.accessToken;
    const dispatch = useDispatch()
    const [dataUser, setDataUser] = useState();
    useEffect(() => {
        const fetchApi = async () => {
            let axiosJWT = createAxios(currentUser, dispatch, AuthSlice.actions.loginSuccess);

            const result = await getUser(accessToken, axiosJWT);
            setDataUser(result);
        };
        fetchApi();
    },[]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('account')}>
                <div className={cx('account_form')}>
                    <h2 className={cx('account_form-title')}>Thông tin tài khoản</h2>
                    <div className={cx('account_form-body')}>
                        <div className={cx('account_form-infoGroup')}>
                            <h6>Tên</h6>
                            <p>{dataUser?.name}</p>
                        </div>
                        <div className={cx('account_form-infoGroup')}>
                            <h6>Ngày tạo tài khoản</h6>
                            <p>{moment(dataUser?.dateCreated).format('MMMM Do YYYY')}</p>
                        </div>
                    </div>
                </div>
                <div className={cx('account_form')}>
                    <h2 className={cx('account_form-title')}>Mật khẩu</h2>
                    <div className={cx('account_form-body')}>
                        <div className={cx('account_form-inputGroup')}>
                            <div className={cx('account_form-inputGroup-box')}>
                                <label htmlFor="current-password" className={cx('account_form-inputtitle')}>
                                    Mật khẩu hiện tại
                                </label>
                                <input type="password" id="current-password" className={cx('account_form-input')} />
                            </div>
                        </div>
                        <div className={cx('account_form-inputGroup')}>
                            <div className={cx('account_form-inputGroup-box')}>
                                <label htmlFor="password" className={cx('account_form-inputtitle')}>
                                    Mật khẩu mới
                                </label>
                                <input type="password" id="password" className={cx('account_form-input')} />
                            </div>
                        </div>
                        <div className={cx('account_form-inputGroup')}>
                            <div className={cx('account_form-inputGroup-box')}>
                                <label htmlFor="confirm-password" className={cx('account_form-inputtitle')}>
                                    Nhập lại mật khẩu mới
                                </label>
                                <input type="password" id="confirm-password" className={cx('account_form-input')} />
                            </div>
                        </div>

                        <div className={cx('account_form-submit')}>
                            <input type="submit" value="Thay đổi mật khẩu" className={cx('account_form-submit-input')} />
                        </div>
                    </div>
                </div>
                <div className={cx('account_help')}>
                    <a href="" className={cx('account_help-link')}>
                        Apps
                    </a>
                    <a href="" className={cx('account_help-link')}>
                        Prototypes
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Account;
