import React from 'react';
import styled from 'styled-components';

import { formatDate, formatNum } from '@lib';

import defaultImage from '@assets/no-picture.jpg';

const BookItem = ({ book }) => {
    const {
        title,
        authors,
        price,
        sale_price,
        datetime,
        publisher,
        thumbnail,
        status,
        url,
    } = book;

    return (
        <Container>
            <a href={url} target='_blank' rel='noopener noreferrer'>
                <ImagePadding>
                    <ImageWrapper>
                        <Image src={thumbnail ? thumbnail : defaultImage} />
                    </ImageWrapper>
                </ImagePadding>
            </a>
            <InfoContainer>
                {status === '정상판매' && sale_price > 0 && (
                    <OnSale>On Sale</OnSale>
                )}
                <Title>{title}</Title>
                <Writers>{authors.map((author) => author).join(' / ')}</Writers>
                <DateWithPublisher>
                    {formatDate(datetime)} {publisher && '/ ' + publisher}
                </DateWithPublisher>
                <Price>
                    &#8361;{' '}
                    {status === '정상판매' && sale_price > 0
                        ? formatNum(sale_price)
                        : formatNum(price)}
                    원
                </Price>
            </InfoContainer>
        </Container>
    );
};

export default BookItem;

const Container = styled.li`
    width: 25%;
    display: inline-block;
    padding: 0 20px;
    margin-bottom: 25px;
`;

const ImagePadding = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 100%;
    box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.15);
`;

const ImageWrapper = styled.div`
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
`;

const Image = styled.img`
    object-fit: scale-down;
    width: 100%;
    height: 100%;
`;

const InfoContainer = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
    list-style: none;

    & li {
        word-break: break-all;
    }
`;

const OnSale = styled.li`
    border: 2px solid #1dc4e9;
    color: #1dc4e9;
    font-size: 11px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.4px;
    padding: 0 30px;
    margin-bottom: 15px;
`;

const Title = styled.li`
    line-height: 22px;
    font-size: 16px;
    font-weight: 700;
    color: #444442;
    margin-bottom: 15px;
`;

const Writers = styled.li`
    line-height: 18px;
    font-size: 13px;
    color: #666663;
    margin-bottom: 5px;
`;

const DateWithPublisher = styled.li`
    line-height: 18px;
    font-size: 13px;
    color: #666663;
    margin-bottom: 5px;
`;

const Price = styled.li`
    line-height: 22px;
    font-size: 14px;
    font-weight: 700;
    color: #444442;
`;
