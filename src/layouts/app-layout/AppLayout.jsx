import PropTypes from "prop-types";
import React from "react";
import { AppFooter } from "./components/Footer";
import { AppHeader } from "./components/Header";

AppLayout.propTypes = {
  children: PropTypes.element,
};

export function AppLayout(props) {
  const { children } = props;
  return (
    <div>
      <AppHeader />
      {children}
      {/* <AppFooter /> */}
    </div>
  );
}
