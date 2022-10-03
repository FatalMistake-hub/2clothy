import * as httpRequest from '~/utils/httpRequest';

export const searchProduct = async (keyword) => {
    try {
        const res = await httpRequest.get('search', {
            params: {
                keyword,
                
            },
        });
        // console.log(res.data);
        return res.data;
        // return res;
    } catch (error) {
        console.log(error);
    }
};
export const post = async (keyword,data={}) => {
    try {
        const res = await httpRequest.post('post', {
            firstname: data.firstname,
            lastName: data.lastName,
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const put = async (keyword,data={}) => {
    try {
        const res = await httpRequest.put('put', {
            firstname: data.firstname,
            lastName: data.lastName,
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const patch = async (keyword,data={}) => {
    try {
        const res = await httpRequest.patch('patch', {
            firstname: data.firstname,
            lastName: data.lastName,
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};


export const deleted = async (keyword,data={}) => {
    try {
        const res = await httpRequest.deleted('deleted', {
            id: data.id,
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
