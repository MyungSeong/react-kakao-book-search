import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const targetInfo = {
    title: '제목',
    person: '저자',
    publisher: '출판사',
    isbn: 'ISBN',
};

const SearchForm = ({ onSubmit }) => {
    const [query, setQuery] = useState('');
    const [target, setTarget] = useState('title');

    const onQueryChange = useCallback(
        (e) => {
            setQuery(e.target.value);
        },
        [query],
    );

    const onTargetChange = useCallback(
        (e) => {
            setTarget(e.target.value);
        },
        [target],
    );

    const SearchButtonClick = useCallback(() => {
        if (!query) {
            toast.error('검색어를 입력해주세요.', {
                position: 'top-right',
                autoClose: 2000,
                theme: 'colored',
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });

            return;
        }

        onSubmit(query, target);
        setQuery('');
    }, [onSubmit, query, target]);

    const EnterKeyPress = useCallback(
        (e) => {
            if (e.key === 'Enter') {
                if (!query) {
                    toast.error('검색어를 입력해주세요.', {
                        position: 'top-right',
                        autoClose: 2000,
                        theme: 'colored',
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    });

                    return;
                }

                onSubmit(query, target);
                setQuery('');
            }
        },
        [onSubmit, query, target],
    );

    return (
        <>
            <Container>
                <TargetWrapper>
                    <FormControl size='small' sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel>{target}</InputLabel>
                        <Select
                            value={target}
                            label='검색 필드'
                            onChange={onTargetChange}
                        >
                            {Object.entries(targetInfo).map(([key, value]) => (
                                <MenuItem key={key} value={key}>
                                    {value}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </TargetWrapper>
                <InputWrapper>
                    <ArrowRightIcon style={{ color: 'skyblue' }} />
                    <SearchInput
                        onChange={onQueryChange}
                        onKeyDown={EnterKeyPress}
                        value={query}
                    />
                </InputWrapper>
                <IconButton
                    style={{ color: 'action' }}
                    aria-label='search'
                    components='span'
                    onClick={SearchButtonClick}
                >
                    <SearchIcon />
                </IconButton>
            </Container>
            <ToastContainer
                position='top-right'
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
};

export default SearchForm;

const Container = styled.div`
    margin: 0 auto;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
`;

const TargetWrapper = styled.div`
    display: flex;
    width: 80px;
    height: 40px;
    align-items: center;
    justify-content: center;
    margin-right: 30px;
    cursor: pointer;
    position: relative;
`;

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    border: 2px solid skyblue;
    max-width: 600px;
    width: 100%;
    padding: 0px 15px;
    margin-right: 5px;
`;

const SearchInput = styled.input`
    display: block;
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    color: grey;
`;
