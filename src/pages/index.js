import { Suspense } from 'react';
import { Route, Router } from 'react-router-dom';
import loadable from '@loadable/component';
import Modal from 'react-modal';

import Loader from '@layout/Loader';
import ScrollToTop from '@layout/ScrollToTop';

import { history } from '@reduxConfig';

const Main = loadable(() => import('./Main'));

import '@styles/scss/style.scss';

const PagesIndex = () => {
    return (
        <>
            <Router history={history}>
                <Suspense fallback={<Loader />}>
                    <Route path='/' exact component={Main} />
                </Suspense>
            </Router>
            <ScrollToTop />
        </>
    );
};

Modal.setAppElement('#root');

export default PagesIndex;
