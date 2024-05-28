import createSagaMiddleware from '@redux-saga/core';
import {
    Action,
    combineReducers,
    configureStore,
    ThunkAction,
} from '@reduxjs/toolkit';
import {
    createBrowserHistory,
} from 'history';
import {
    createReduxHistoryContext,
} from 'redux-first-history';

import uiReducer from 'redux/slices/ui';
import rootSaga from 'sagas';

const sagaMiddleware = createSagaMiddleware();
const {
    createReduxHistory,
    routerMiddleware,
    routerReducer,
} = createReduxHistoryContext({
    history: createBrowserHistory(),
});

const rootReducer = combineReducers({
    ui: uiReducer.reducers,
    router: routerReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: false,
    }).concat(sagaMiddleware, routerMiddleware),
});

sagaMiddleware.run(rootSaga);

export const history = createReduxHistory(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
