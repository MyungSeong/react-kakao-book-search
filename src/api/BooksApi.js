import axios from 'axios';

import { KAKAO_API_URL, KAKAO_API_KEY } from '@constants/Config';

const URL = `${KAKAO_API_URL}/v3/search/book`;
const headers = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    Authorization: `KakaoAK ${KAKAO_API_KEY}`,
};

export default class BooksApi {
    getBooks({ query, target = 'title', page, sort = 'accuracy', size = 10 }) {
        return axios.get(URL, {
            headers,
            params: {
                query,
                target,
                page,
                sort,
                size,
            },
        });
    }
}
