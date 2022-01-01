import Types from '@reduxTypes';

const BooksAction = {
    getBookList: (bookInfo) => async (dispatch) => {
        /* dispatch({
            type: Types.GET_BOOKS,
            payload: bookInfo,
        }); */

        try {
            dispatch({
                type: Types.GET_BOOKS_SUCCESS,
                payload: bookInfo,
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
