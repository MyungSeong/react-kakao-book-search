import BooksApi from '@api/BooksApi';
import Types from '@reduxTypes';
import { wait } from '@lib';

const $api = new BooksApi();

const BooksAction = {
    getBookList:
        (query, target, nextPage = false, page) =>
        async (dispatch, getState) => {
            dispatch({ type: Types.GET_BOOKS });

            await wait(Math.random() * 1000 + 500);

            try {
                const params = nextPage
                    ? { query, target, page: page + 1 }
                    : { query, target };

                const result = await $api.getBooks(params);

                dispatch({
                    type: Types.GET_BOOKS_SUCCESS,
                    payload: {
                        query,
                        target,
                        data: result.data,
                        nextPage,
                    },
                });
            } catch (error) {
                dispatch({
                    type: Types.GET_BOOKS_FAILURE,
                    payload: error,
                });
            }
        },
};

export default BooksAction;
