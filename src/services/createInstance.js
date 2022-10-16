import axios from 'axios';
import jwt_decode from 'jwt-decode';
import httpRequest from '../utils/httpRequest';

const refreshToken = async (token) => {
    try {
        const res = await httpRequest.post('user/refresh-token', {
            // withCredentials: true,
            Token: token,
        });
        console.log('Refresh');
        return res.data;
    } catch (err) {
        console.log(err);
    }
};

export const createAxios = (user, dispatch, stateSuccess) => {
    const newInstance = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });
    newInstance.interceptors.request.use(
        async (config) => {
            let date = new Date();
            console.log('user in create', user);
            console.log('accesstoken in create', user.accessToken);
            console.log('refreshToken in create', user.refreshToken);
            const decodedToken = jwt_decode(user?.accessToken);
            if (decodedToken.exp < date.getTime() / 1000) {
                const data = await refreshToken(user?.refreshToken);
                console.log('data', data);

                const refreshUser = {
                    ...user,
                    accessToken: data.accessToken,
                    refreshToken: data.refreshToken,
                };
                dispatch(stateSuccess(refreshUser));
                config.headers['Authorization'] = 'Bearer ' + data.accessToken;
            }
            return config;
        },
        (err) => {
            return Promise.reject(err);
        },
    );
    return newInstance;
};
