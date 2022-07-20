import PropTypes from "prop-types";
import React from "react";
import { AppHeader } from "./components/Header";
import "./app-layout.css";

AppLayout.propTypes = {
  children: PropTypes.element,
};

export function AppLayout(props) {
  const { children } = props;
  return (
    <div className="app-layout">
      <AppHeader />
      {children}
    </div>
  );
}
