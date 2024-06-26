import React, { FunctionComponent } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import { HistoryRouter as Router } from 'redux-first-history/rr6';

import DeleteAccountScreen from 'containers/deleteAccount';
import HomePage from 'containers/home';
import PrivacyPolicyScreen from 'containers/privacy';
import TermsOfUse from 'containers/TermsOfUse';

import { history } from 'redux/store';

const NavRoutes: FunctionComponent = () => {
    return (
        <Router history={history}>
            <Routes>
                <Route
                    path='/'
                    element={<HomePage />}
                />

                <Route
                    path='/privacy'
                    element={<PrivacyPolicyScreen />}
                />

                <Route
                    path='/delete-account'
                    element={<DeleteAccountScreen />}
                />

                <Route
                    path='/terms-of-use'
                    element={<TermsOfUse />}
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
