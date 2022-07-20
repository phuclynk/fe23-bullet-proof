import { Pagination } from "antd";
import React, { useMemo } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductAction, PRODUCT_LIMIT } from "stores/slices/product.slice";
import { LoadingOutlined } from "@ant-design/icons";
import { HomeCarousel } from "./components";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { getParamValue, paramValueToUrlParam } from "utils";

export const HomePage = React.memo(function _HomePage() {
  const productState = useSelector((state) => state.product.productState);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [searchParams, set] = useSearchParams()

  const paramValue = useMemo(
    () => getParamValue(params.params),
    [params.params]
  );

  const pageParams = +(paramValue?.page ?? 1);
  const limitParams = +(paramValue?.limit ?? PRODUCT_LIMIT);

  console.log(paramValue);

  const total = productState.pagination.total;
  const loading = productState.loading;

  useEffect(() => {
    try {
      dispatch(fetchProductAction({ page: pageParams, limit: limitParams }));
    } catch (error) {
      dispatch(fetchProductAction({ page: 1, limit: PRODUCT_LIMIT }));
    }
  }, [dispatch, limitParams, pageParams]);

  const onPaginationChange = (page, limit) => {
    try {
      const urlParam = paramValueToUrlParam({ page, limit });
      navigate(`/home/${urlParam}`, { replace: true });
    } catch (error) {}
  };

  return (
    <div className="home-page">
      <HomeCarousel />
      <h1>Products Listing</h1>
      {loading && (
        <div>
          <LoadingOutlined />
        </div>
      )}
      {productState.data.map((item) => (
        <div key={item.id} className="product-item">
          {item.name}
        </div>
      ))}
      <Pagination
        onChange={onPaginationChange}
        pageSize={+limitParams}
        current={+pageParams}
        total={total}
      />
    </div>
  );
});
