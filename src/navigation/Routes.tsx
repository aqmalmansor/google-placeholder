import React, { FunctionComponent } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import { HistoryRouter as Router } from 'redux-first-history/rr6';

import HomePage from 'containers/home';

import { history } from 'redux/store';

const NavRoutes: FunctionComponent = (props) => {
    return (
        <Router history={history}>
            <Routes>
                <Route
                    path='/'
                    element={<HomePage />}
                />

                <Route
                    path='*'
                    element={<Navigate replace to='/' />}
                />

            </Routes>
        </Router>
    );
};

export default NavRoutes;
