import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import BooksActions from '@redux/Books/BooksAction';

import BookList from '@components/BookList';
import SearchForm from '@components/SearchForm';

const BookSearch = () => {
    const { bookInfo } = useSelector((state) => state.BookInfo);
    const dispatch = useDispatch();

    const onSubmit = async (query, target) => {
        dispatch(BooksActions.getBookList(query, target));
    };

    const nextPage = async () => {
        if (bookInfo?.data?.meta.is_end) return;

        const { query, target, page } = bookInfo;

        dispatch(BooksActions.getBookList(query, target, true, page));
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
