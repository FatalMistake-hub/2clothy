import * as httpRequest from '~/utils/httpRequest';

export const search = async (keyword) => {
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
