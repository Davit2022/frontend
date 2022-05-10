import React from "react";
import "./Login.css";
import * as yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import Form from "../common/Form";
import Input from "../common/Input";
import Button from "../common/Button";

const UserSchema = yup.object().shape({
  email: yup.string().email().required("Email is incorrect"),
  password: yup.string().min(4).max(15).required("Password is incorrect"),
});

function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: UserSchema,
    onSubmit: () => { },
  });

  const {
    handleSubmit, handleChange, values, errors, touched,
  } = formik;

  return (
    <div className="Login">
      <div className="controlers">
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
          <div className="fild" htmlFor="email">
            <span>
              <i
                className="fa fa-envelope icon"
                aria-hidden="true"
                style={{
                  color: errors.email && touched.email
                    ? "#fd7c73"
                    : touched.email ? "green" : "#999",
                }}
              />
            </span>
            <Input
              className="fild1"
              name="email"
              type="text"
              placeholder="Email Address"
              onChange={handleChange}
              value={values.email}
              autoComplete="on"
              style={{
                borderColor: errors.email && touched.email
                  ? "#fd7c73"
                  : touched.email ? "green" : "#999",
              }}
            />
          </div>
          {errors.email && touched.email ? <div className="error">{errors.email}</div> : null}
          <div className="fild" htmlFor="password">
            <span>
              <i
                className="fa fa-unlock-alt icon"
                aria-hidden="true"
                style={{
                  color: errors.password && touched.password
                    ? "#fd7c73"
                    : touched.password ? "green" : "#999",
                }}
              />
            </span>
            <Input
              className="fild1"
              name="password"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              value={values.password}
              autoComplete="on"
              style={{
                borderColor: errors.password && touched.password
                  ? "#fd7c73"
                  : touched.password ? "green" : "#999",
              }}
            />
          </div>

          {errors.password && touched.password ? <div className="error">{errors.password}</div> : null}
          <Button id="login" isSubmit title="Submit" />
          <h2 className="tutor-name">
            <Link to="/register" className="tutor">Create new account.</Link>
          </h2>
        </Form>
      </div>
    </div>
  );
}

export default Login;
