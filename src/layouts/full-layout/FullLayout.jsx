import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';

FullLayout.propTypes = {
    path: PropTypes.string,
    element: PropTypes.element,
};

export function FullLayout(props) {
    return (
        <Route {...props}/>
    );
}