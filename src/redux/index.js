import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import { BookInfo } from './modules';

export const history = createBrowserHistory();

const middlewares = [thunk.withExtraArgument({ history: history })];

const reducers = combineReducers({
    BookInfo,
});

let store;

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);

    store = createStore(
        reducers,
        composeWithDevTools(applyMiddleware(...middlewares)),
    );
} else {
    store = createStore(reducers, compose(applyMiddleware(...middlewares)));
}

export default store;
