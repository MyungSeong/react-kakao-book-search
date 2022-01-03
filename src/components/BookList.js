import styled from 'styled-components';

import { infiniteScroll } from '@lib';
import Loader from '@layout/Loader';

import BookItem from './BookItem';

const BookList = ({ state, nextPage }) => {
    const [loadingRef] = infiniteScroll(!state.loading, nextPage, {
        threshold: 0.5,
    });

    if (state.loading) return <Loader />;
    if (state.data?.error)
        return <Message>에러 발생! ({state.data.error})</Message>;
    if (!state.data) return <Message>검색어를 입력해주세요</Message>;

    return (
        /* <li className='book-list-wrapper'>
            {state.data.documents.length === 0 && (
                <div className='message'>검색 결과가 존재하지 않습니다.</div>
            )}
            {state?.data?.documents?.map((book) => (
                <dl className='book-item' key={book.isbn}>
                    <div className='book-image'>
                        <a
                            href={book.url}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img src={book.thumbnail} alt={book.thumbnail} />
                        </a>
                    </div>
                    <div className='book-contents'>
                        <div className='book-publisher'>{book.publisher}</div>
                        <div className='book-title'>{book.title}</div>
                        <div className='book-price'>
                            &#8361; {book.sale_price.toLocaleString()}
                            <strike>{book.price.toLocaleString()}</strike>{' '}
                        </div>
                    </div>
                </dl>
            ))}
            {state.loading && state.data && <Loader />}
            {!state.loading && <div className='loading-block' ref={setLbRef} />}
        </li> */
        <Container>
            <Wrapper>
                <List>
                    {state?.data?.documents?.length === 0 && (
                        <Message>검색 결과가 존재하지 않습니다.</Message>
                    )}
                    {state?.data?.documents?.length > 0 &&
                        state.data.documents.map((book) => (
                            <BookItem key={book.isbn} book={book} />
                        ))}
                </List>
                {state.loading && state.data && <Loader />}
                {!state.loading && <LoadingBlock ref={loadingRef} />}
            </Wrapper>
        </Container>
    );
};

export default BookList;

const Container = styled.section`
    width: 100%;
`;

const Wrapper = styled.div`
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
`;

const List = styled.ul``;

const Message = styled.div`
    color: #666663;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
`;

const LoadingBlock = styled.div`
    display: block;
    height: 1px;
    min-height: 1px;
    margin: 0 auto;
    text-align: center;
`;
