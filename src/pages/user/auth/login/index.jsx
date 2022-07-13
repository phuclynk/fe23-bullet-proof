import { Button, Checkbox, Form, Input } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import SimpleLoginForm from "simple-login-form";
import { loginAction } from "stores/slices/user.slice";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ReactComponent as ReactLogo } from "../../../../svg/Lias.svg";

const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const schema = yup
  .object({
    email: yup.string().required("Email is required").matches(emailRegex),
    password: yup
      .string()
      .min(8, "Password must be at least 8 character")
      .required("Password is required"),
  })
  .required();

export const LoginPage = () => {
  const userInfo = useSelector((state) => state.user.userInfoState);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();

  useEffect(() => {
    register("email", { required: true });
    register("password", { required: true });
  }, [register]);

  if (userInfo.data) {
    return <Navigate to={"/home"} />;
  }

  const loginFormStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "0px 20px",
  };

  const loginPageContainer = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
    backgroundImage:
      'url("img/hand-painted-watercolor-background-with-sky-clouds-shape.jpg")',
  };

  const loginPageBox = {
    boxShadow: "0 5px 10px 0 rgb(0 0 0 / 10%)",
    borderRadius: "10px",
    width: "390px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#DBE4EA",
    "& .ant-btn": {
      backgroundColor: "red",
    },
    padding: "0px, 20px",
  };

  const btnStyle = {
    backgroundColor: "#AFD6EA",
    borderColor: "#AFD6EA",
    color: "black",
  };

  const onLogin = (values) => {
    dispatch(loginAction(values));
  };

  return (
    <div style={loginPageContainer} className="login-page">
      <div style={loginPageBox}>
        <div>
          <ReactLogo />
        </div>
        <Form
          name="basic"
          wrapperCol={{ span: 24 }}
          onFinish={handleSubmit(onLogin, (err) => console.log(errors))}
          onFinishFailed={() => {}}
          autoComplete="off"
          style={loginFormStyle}
        >
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value, name, ref } }) => (
              <Form.Item
                validateStatus={errors.email && "error"}
                help={errors?.email?.message}
                name={name}
              >
                <Input
                  onChange={onChange}
                  value={value}
                  name={name}
                  placeholder="Email"
                  ref={ref}
                />
              </Form.Item>
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value, name, ref } }) => (
              <Form.Item
                validateStatus={errors.password && "error"}
                help={errors?.password?.message}
                name={name}
              >
                <Input.Password
                  onChange={onChange}
                  value={value}
                  name={name}
                  placeholder="Password"
                  ref={ref}
                />
              </Form.Item>
            )}
          />
          <Form.Item>
            <Button
              style={btnStyle}
              type="primary"
              htmlType="submit"
              shape="round"
              loading={userInfo.loading}
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
