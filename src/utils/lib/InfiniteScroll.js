import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const InfiniteScroll = (target, run, options) => {
    const [ref, inView, entry] = useInView(options);

    useEffect(() => {
        if (inView && target) {
            run();
        }
    }, [inView]);

    return [ref];
};

export default InfiniteScroll;
