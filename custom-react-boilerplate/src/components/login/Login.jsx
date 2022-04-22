import React from "react";
import "./Login.css";
import * as yup from "yup";
import { useFormik } from "formik";
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
    onSubmit: () => {},
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
              />
            </span>
            <Input
              className="fild1"
              name="email"
              type="text"
              placeholder="Enter your email address"
              onChange={handleChange}
              value={values.email}
              autoComplete="on"
            />
          </div>
          {errors.email && touched.email ? <div className="error">{errors.email}</div> : null}
          <div className="fild" htmlFor="password">
            <span>
              <i
                className="fa fa-unlock-alt icon"
                aria-hidden="true"
              />
            </span>
            <Input
              className="fild1"
              name="password"
              type="password"
              placeholder="Enter your password"
              onChange={handleChange}
              value={values.password}
              autoComplete="on"
            />
          </div>
          {errors.password && touched.password ? <div className="error">{errors.password}</div> : null}
          <Button id="login" isSubmit title="Submit" />
        </Form>
      </div>
    </div>
  );
}

export default Login;
