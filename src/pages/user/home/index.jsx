import { Pagination } from "antd";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductAction, PRODUCT_LIMIT } from "stores/slices/product.slice";
import { LoadingOutlined } from "@ant-design/icons";

export function HomePage() {
  const productState = useSelector((state) => state.product.productState);
  const dispatch = useDispatch();

  const page = productState.pagination.page;
  const total = productState.pagination.total;
  const loading = productState.loading;

  useEffect(() => {
    // Dispatch action gọi product từ server => Slice => action
    // Nếu có saga đang theo dõi action này thì hàm tương ứng trong saga sẽ chạy => fetchProduct
    dispatch(fetchProductAction(1));
  }, []);

  const onPaginationChange = (page, pageSize) => {
    dispatch(fetchProductAction(page));
  };

  return (
    <div className="home-page">
      <h1>Products Listing</h1>
      {loading && (
        <div>
          <LoadingOutlined />
        </div>
      )}
      {productState.data.map((item) => (
        <div className="product-item">{item.name}</div>
      ))}
      <Pagination
        onChange={onPaginationChange}
        pageSize={20}
        current={page}
        total={total}
      />
    </div>
  );
}
