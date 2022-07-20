import { AdminLayout } from "layouts";
import React from "react";
import { useLocation } from "react-router-dom";
import { Table } from "antd";
import { ProductManagement } from "./components";

function AdminPage() {
  const location = useLocation();

  const renderContent = () => {
    switch (location.pathname) {
      case "/admin":
        return <h1>HOME</h1>;
      case "/admin/category":
        return <h1>Category</h1>;
      case "/admin/order":
        return <h1>Order</h1>;
      case "/admin/product":
        return <ProductManagement />;
      default:
        return <h1>HOME</h1>;
    }
  };

  return <AdminLayout>{renderContent()}</AdminLayout>;
}

export default AdminPage;
