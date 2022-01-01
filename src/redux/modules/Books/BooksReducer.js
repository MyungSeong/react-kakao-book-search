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
                    loading: true,
                    query: payload.nextPage ? state.bookInfo.query : '',
                    target: payload.nextPage ? state.bookInfo.target : '',
                    sort: payload.nextPage ? state.bookInfo.sort : '',
                    data: payload.nextPage ? state.bookInfo.data : null,
                    page: payload.nextPage ? state.bookInfo.page : 1,
                },
            };

        case Types.GET_BOOKS_SUCCESS:
            return {
                ...state,
                bookInfo: {
                    loading: false,
                    query: payload.nextPage
                        ? state.bookInfo.query
                        : payload.query,
                    target: payload.nextPage
                        ? state.bookInfo.target
                        : payload.target,
                    sort: payload.nextPage ? state.bookInfo.sort : payload.sort,
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
                bookInfo: { error: payload },
            };

        default:
            return { ...state };
    }
};

export default reducer;
