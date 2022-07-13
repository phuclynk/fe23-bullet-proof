import PropTypes from "prop-types";
import React from "react";
import { Route } from "react-router-dom";
import { AppFooter } from "./components/Footer";
import { AppHeader } from "./components/Header";

AppLayout.propTypes = {
  path: PropTypes.string,
  element: PropTypes.element,
};

AppLayout.defaultProps = {
  exact: false,
  path: null,
  component: null,
};

export function AppLayout(props) {
  const { path, element } = props;
  return (
    <Route path={path}>
      <AppHeader />
      {element}
      <AppFooter />
    </Route>
  );
}
