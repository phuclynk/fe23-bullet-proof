import React, { useMemo } from "react";
import {
  Button,
  Input,
  Modal,
  Pagination,
  Popconfirm,
  Table,
  Typography,
} from "antd";

import "./ProductManagement.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductAction, PRODUCT_LIMIT } from "stores/slices/product.slice";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

export function ProductManagement() {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product.productState);
  const [showAddModal, setShowAddModal] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();

  const defaultPage = 1;

  const _page = searchParams.get("page") ?? `${defaultPage}`;
  const _limit = searchParams.get("limit") ?? `${PRODUCT_LIMIT}`;

  const loading = productState?.loading;
  const data = productState?.data;
  const total = productState.pagination.total;

  useEffect(() => {
    dispatch(fetchProductAction({ page: _page, limit: _limit }));
  }, [dispatch, _page, _limit]);

  const onPaginationChange = (page, limit) => {
    setSearchParams({ page, limit });
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) => {
        // const editable = isEditing(record);
        return true ? (
          <span>
            <Typography.Link
              onClick={() => setShowAddModal(true)}
              style={{
                marginRight: 8,
              }}
            >
              Edit
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={() => {}}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link onClick={() => {}}>Edit</Typography.Link>
        );
      },
    },
  ];

  return (
    <div className="product-mangement-page">
      <h1>Product Management</h1>
      <Button onClick={() => setShowAddModal(true)}>+ Add Product</Button>
      <Modal
        title="Add Product Form"
        visible={showAddModal}
        onOk={() => {}}
        onCancel={() => setShowAddModal(false)}
        okText={"submit"}
      >
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
      </Modal>
      <Table
        pagination={false}
        loading={loading}
        columns={columns}
        dataSource={data}
      />
      <Pagination
        onChange={onPaginationChange}
        pageSize={+_limit}
        current={+_page}
        total={total}
      />
    </div>
  );
}
