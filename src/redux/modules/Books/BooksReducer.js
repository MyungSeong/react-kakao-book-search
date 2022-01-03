import Types from '@reduxTypes';

const initialState = {
    bookInfo: {
        loading: false,
        query: '',
        target: '',
        sort: '',
        // size: 10,
        data: null,
        page: 1,
    },
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Types.GET_BOOKS:
            return {
                ...state,
                bookInfo: {
                    ...state.bookInfo,
                    loading: true,
                },
            };

        case Types.GET_BOOKS_SUCCESS:
            return {
                ...state,
                bookInfo: {
                    ...state.bookInfo,
                    loading: false,
                    query: payload.query,
                    target: payload.target,
                    sort: payload.sort,
                    data: payload.nextPage
                        ? {
                              ...state.bookInfo.data,
                              documents: [
                                  ...state.bookInfo.data.documents,
                                  ...payload.data.documents,
                              ],
                              meta: payload.data.meta,
                          }
                        : payload.data,
                    page: state.bookInfo.page + 1,
                },
            };

        case Types.GET_BOOKS_FAILURE:
            return {
                ...state,
                bookInfo: {
                    ...state.bookInfo,
                    loading: false,
                    data: {
                        error: payload,
                    },
                },
            };

        default:
            return { ...state };
    }
};

export default reducer;
