import "./register.css";
import React from "react";
import { useFormik } from "formik";
import registerSchema from "../validationSchema/RegisterYup";
import Form from "../common/Form";
import Input from "../common/Input";
import Button from "../common/Button";

function Register() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: () => {
    },
    validationSchema: registerSchema,

  });
  const {
    handleSubmit, handleChange,
    values, errors, touched,
  } = formik;
  return (
    <div className="Register">
      <div className="controlers">
        <h1>Register</h1>
        <Form onSubmit={handleSubmit}>
          <div className="fild" htmlFor="firstName">
            <span className="icon-firstname">
              {" "}
              <i
                className="fa fa-user-circle-o icon"
                aria-hidden="true"
                style={{
                  color: errors.firstName && touched.firstName
                    ? "#fd7c73"
                    : touched.firstName ? "green" : "#999",
                }}
              />
            </span>
            <Input
              className="fild1"
              name="firstName"
              type="text"
              placeholder="First Name"
              onChange={handleChange}
              value={values.firstName}
              autoComplete="on"
              style={{
                borderColor: errors.firstName && touched.firstName
                  ? "#fd7c73"
                  : touched.firstName ? "green" : "#999",
              }}
            />
            {errors.firstName && touched.firstName ? (
              <div
                className="error"
              >
                {errors.firstName}
              </div>
            ) : null}
          </div>

          <div autoComplete="off" className="fild" htmlFor="lastName">
            <span className="icon-lastname">
              <i
                className="fa fa-user-circle-o icon"
                aria-hidden="true"
                style={{
                  color: errors.lastName && touched.lastName
                    ? "#fd7c73"
                    : touched.lastName ? "green" : "#999",
                }}
              />
            </span>

            <Input
              className="fild1"
              name="lastName"
              type="text"
              placeholder="Last Name"
              onChange={handleChange}
              value={values.lastName}
              autoComplete="on"
              style={{
                borderColor: errors.lastName && touched.lastName
                  ? "#fd7c73"
                  : touched.lastName ? "green" : "#999",
              }}
            />
            {errors.lastName && touched.lastName ? (
              <div
                className="error"
              >
                {errors.lastName}
              </div>
            ) : null}
          </div>

          <div className="fild" htmlFor="email">
            <span className="icon-email">

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
            {errors.email && touched.email
              ? (
                <div className="error">
                  {errors.email}
                </div>
              ) : null}
          </div>

          <div className="fild" htmlFor="phoneNumber">
            <span className="icon-number">
              <i
                className="fa fa-phone icon"
                aria-hidden="true"
                style={{
                  color: errors.phoneNumber && touched.phoneNumber
                    ? "#fd7c73"
                    : touched.phoneNumber ? "green" : "#999",
                }}
              />
            </span>

            <Input
              className="fild1"
              name="phoneNumber"
              type="text"
              placeholder="phoneNumber"
              onChange={handleChange}
              value={values.phoneNumber}
              autoComplete="on"
              style={{
                borderColor: errors.phoneNumber && touched.phoneNumber
                  ? "#fd7c73"
                  : touched.phoneNumber ? "green" : "#999",
              }}
            />
            {errors.phoneNumber && touched.phoneNumber ? (
              <div
                className="error"
              >
                {errors.phoneNumber}
              </div>
            ) : null}
          </div>

          <div className="fild" htmlFor="password">
            <span className="icon-password">
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
            {errors.password && touched.password ? (
              <div
                className="error"
              >
                {errors.password}
              </div>
            ) : null}
          </div>

          <div className="fild" htmlFor="confirmPassword">
            <span className="icon-confirmPassword">
              <i
                className="fa fa-unlock-alt icon"
                aria-hidden="true"
                style={{
                  color: errors.confirmPassword && touched.confirmPassword
                    ? "#fd7c73"
                    : touched.confirmPassword ? "green" : "#999",
                }}
              />
            </span>
            <Input
              className="fild1"
              name="confirmPassword"
              type="password"
              placeholder="ConfirmPassword"
              onChange={handleChange}
              value={values.confirmPassword}
              autoComplete="on"
              style={{
                borderColor: errors.confirmPassword && touched.confirmPassword
                  ? "#fd7c73"
                  : touched.confirmPassword ? "green" : "#999",
              }}

            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <div
                className="error"
              >
                {errors.confirmPassword}
              </div>
            ) : null}
          </div>
          <Button
            id="singup"
            title="Submit"
            isSubmit
          />
        </Form>
      </div>
    </div>
  );
}
export default Register;
