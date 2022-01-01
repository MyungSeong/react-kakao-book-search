export { default as infiniteScroll } from './InfiniteScroll';

export const formatNum = (value) => {
    return String(value)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatDate = (value) => {
    const date = new Date(value);

    return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
};

export const wait = (ms) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
};
