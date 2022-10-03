import axios from 'axios';
//instance
const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response;
    // return response.data;
};
export const post = async (path, data = {}) => {
    const response = await httpRequest.post(path, data);
    return response;
    // return response.data;
};
export const put = async (path, options = {}) => {
    const response = await httpRequest.put(path, options);
    return response;
    // return response.data;
};
export const patch = async (path, options = {}) => {
    const response = await httpRequest.patch(path, options);
    return response;
    // return response.data;
};
export const deleted = async (path, options = {}) => {
    const response = await httpRequest.delete(path, options);
    return response;
    // return response.data;
};

export default httpRequest;
 