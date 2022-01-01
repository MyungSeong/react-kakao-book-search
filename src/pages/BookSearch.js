import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import BooksApi from '@api/BooksApi';
import Types from '@reduxTypes';
import BooksActions from '@redux/Books/BooksAction';
import { wait } from '@lib/index';

import BookList from '@components/BookList';
import SearchForm from '@components/SearchForm';

const $api = new BooksApi();

const BookSearch = () => {
    const { bookInfo } = useSelector((state) => state.BookInfo);
    const dispatch = useDispatch();

    const onSubmit = async (query, target) => {
        try {
            dispatch({
                type: Types.GET_BOOKS,
                payload: { nextPage: false },
            });
            await wait(1000);

            const result = await $api.getBooks(query, target);

            dispatch(
                BooksActions.getBookList({
                    query,
                    target,
                    data: result.data,
                }),
            );
        } catch (error) {
            dispatch({ type: Types.GET_BOOKS_FAILURE, error });
        }
    };

    const nextPage = async () => {
        if (bookInfo?.data?.meta.is_end) return;

        const { query, target, page } = bookInfo;

        try {
            dispatch({
                type: Types.GET_BOOKS,
                payload: { nextPage: true },
            });
            await wait(1000);

            const result = await $api.getBooks(query, target, page + 1);

            dispatch(
                BooksActions.getBookList({
                    data: result.data,
                    nextPage: true,
                }),
            );
        } catch (error) {
            dispatch({ type: Types.GET_BOOKS_FAILURE, error });
        }
    };

    return (
        <Container>
            <Wrapper>
                <SearchForm onSubmit={onSubmit} />
                <BookList state={bookInfo} nextPage={nextPage} />
            </Wrapper>
        </Container>
    );
};

export default BookSearch;

const Container = styled.div`
    min-height: 100vh;
`;

const Wrapper = styled.div`
    padding-top: 50px;
    padding-bottom: 30px;
    width: 100%;
    height: 100%;
`;
