import axios from 'axios';
//instance
const authorizeRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});


export const get = async (path, options = {}) => {
    const response = await authorizeRequest.get(path, options);
    return response;
};
export const post = async (path, data = {}) => {
    const response = await authorizeRequest.post(path, data);
    return response;
};
export const put = async (path, options = {}) => {
    const response = await authorizeRequest.put(path, options);
    return response;
};
export const patch = async (path, options = {}) => {
    const response = await authorizeRequest.patch(path, options);
    return response;
};
export const deleted = async (path, options = {}) => {
    const response = await authorizeRequest.delete(path, options);
    return response;
};

export default authorizeRequest;