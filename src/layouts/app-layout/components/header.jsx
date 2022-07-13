import { Button, Dropdown, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "stores/slices";
import { ReactComponent as ReactLogo } from "../../../svg/Lias.svg";

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
    <Header color="red" style={headerStyle}>
      <div style={logoContainerStyle}>
        <ReactLogo />
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
