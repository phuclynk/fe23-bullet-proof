import { Button, Dropdown, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "stores/slices";
import { ReactComponent as ReactLogo } from "../../../svg/Lias.svg";
// import { ReactComponent as TextLogo } from "../../../svg/text-logo.pngs";

import "./header.css";

export const AppHeader = () => {
  const userInfo = useSelector((state) => state.user.userInfoState);
  const dispatch = useDispatch();

  const logoContainerStyle = {
    height: "100%",
    width: "50px",
  };

  const headerStyle = {
    padding: "0px",
    display: "flex",
    justifyContent: "space-between",
  };

  const onClick = ({ key }) => {
    switch (key) {
      case "1":
        dispatch(logoutAction());
        break;

      default:
        dispatch(logoutAction());
        break;
    }
  };

  const menu = (
    <Menu
      onClick={onClick}
      items={[
        {
          label: "Logout",
          key: "1",
        },
      ]}
    />
  );

  return (
    <Header className="app-header" color="red" style={headerStyle}>
      <div style={logoContainerStyle}>{/* <ReactLogo /> */}</div>
      <div className="app-header-title">
        <a href="https://www.fontspace.com/category/tall">
          <img
            height={40}
            src="https://see.fontimg.com/api/renderfont4/1G8zM/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiIzAwMDAwMCIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/TGlhcw/mufteya-regular.png"
            alt="Tall fonts"
          />
        </a>
      </div>
      <div>
        <Dropdown overlay={menu}>
          <Button className="header-menu-button" type="text">
            Hello {userInfo.data.email}
          </Button>
        </Dropdown>
      </div>
    </Header>
  );
};
