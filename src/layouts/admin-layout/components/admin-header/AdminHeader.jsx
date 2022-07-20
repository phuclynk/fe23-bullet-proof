//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./AdminHeader.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const adminRouter = {
  home: { name: "Home", url: "/admin", icon: <FiHome /> },
  catogory: { name: "Category", url: "/admin/category", icon: <FaList /> },
  product: { name: "Product", url: "/admin/product", icon: <FaList /> },
  order: { name: "Order", url: "/admin/order", icon: <FaList /> },
};

export const AdminHeader = () => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false);
  const location = useLocation();

  console.log(location);
  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>LOGO</p>
              <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
                {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              {/* {Object.entries(adminRouter).map(([key, item]) => (
                <MenuItem
                  key={key}
                  // active={location.pathname === item.url}
                  icon={item.icon}
                >
                  <Link to={item.url}>{item.name}</Link>
                </MenuItem>
              ))} */}
              {Object.entries(adminRouter).map(([key, value]) => {
                return (
                  <MenuItem
                    active={location.pathname === value.url}
                    key={key}
                    icon={value.icon}
                  >
                    <Link to={value.url}>{value.name}</Link>
                  </MenuItem>
                );
              })}
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};
