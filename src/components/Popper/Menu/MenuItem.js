import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Menu.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { authRemainingSelector, cartsRemainingSelector } from '~/redux/selector';
// import { logOutUser } from '~/services/authService';
import { createAxios } from '~/services/createInstance';
import AuthSlice from '~/redux/AuthSlice';
import { logOutUser } from '~/services/authService';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    const dispatch = useDispatch();
    const user = useSelector(authRemainingSelector);
    const navigate = useNavigate();
    const currentUser = user?.login.currentUser;
    const accessToken = currentUser?.accessToken;

    const handleLogOut = () => {
        let axiosJWT = createAxios(currentUser, dispatch, AuthSlice.actions.logOutSuccess);
        logOutUser(dispatch, navigate, '1', accessToken, axiosJWT);
    };
    return (
        <>
            {data.title == 'Đăng xuất' ? (
                <Button className={classes} leftIcon={data.icon} to={data.to} onClick={handleLogOut}>
                    {data.title}
                </Button>
            ) : (
                <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
                    {data.title}
                </Button>
            )}
        </>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
