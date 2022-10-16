import AuthSlice from '~/redux/AuthSlice';
import * as httpRequest from '~/utils/httpRequest';

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(AuthSlice.actions.loginStart());
    try {
        const res = await httpRequest.post('user/login', {
            Email: user.Email,
            Password: user.Password,
        });
        dispatch(AuthSlice.actions.loginSuccess(res.data));
        navigate('/');
    } catch (error) {
        console.log(error, AuthSlice.actions.loginFailed());
    }
};
export const registerUser = async (user, dispatch, navigate) => {
    dispatch(AuthSlice.actions.registerStart());
    try {
        const res = await httpRequest.post('user/register', {
            Email: user.Email,
            Password: user.Password,
            ConfirmPassword: user.ConfirmPassword,
        });
        dispatch(AuthSlice.actions.registerSuccess(res.data));
        navigate('/login');
    } catch (error) {
        console.log(AuthSlice.actions.registerFailed());
    }
};
export const logOutUser = async (dispatch,id="1", accessToken, axiosJWT) => {
    dispatch(AuthSlice.actions.logOutStart());
    try {
        // await axiosJWT.post("user/logout", {
        //   headers: { Authorization: `Bearer ${accessToken}` },
        // });
        // dispatch(AuthSlice.actions.logOutSuccess());
        // // navigate("/login")
        const res = await axiosJWT.post(
            'user/logout',
            id
            ,
            {
                headers: { Authorization: `Bearer ${accessToken}` },
            },
        );
        dispatch(AuthSlice.actions.logOutSuccess());
        console.log('logout', res.data);
        return res.data;
        // navigate("/login")
    } catch (error) {
        dispatch(AuthSlice.actions.logOutFailed())
        console.log(error, AuthSlice.actions.logOutFailed());
    }
};
