import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';
import { AppFooter } from './components/footer';
import { AppHeader } from './components/header';

AppLayout.propTypes = {
    exact: PropTypes.bool,
    path: PropTypes.string,
    component: PropTypes.func,
};

AppLayout.defaultProps = {
    exact: false,
    path: null,
    component: null,
};

export function AppLayout(props) {
    const { exact, path, component: Component } = props;
    return (
        <Route exact={exact} path={path}>
            <AppHeader/>
            <Component />
            <AppFooter/>
        </Route>
    );
}