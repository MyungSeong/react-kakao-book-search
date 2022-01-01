import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const infiniteScroll = (target, run, options) => {
    const [ref, inView, entry] = useInView(options);

    useEffect(() => {
        if (inView && target) {
            run();
        }
    }, [inView]);

    return [ref];
};

export default infiniteScroll;
