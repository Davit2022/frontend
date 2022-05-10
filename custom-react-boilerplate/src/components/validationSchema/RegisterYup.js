import * as yup from "yup";

const phoneRegex = /^(([+374]{4}|[0]{1}))?([1-9]{2})(\d{6})$/;

const registerSchema = yup.object().shape({
  firstName: yup.string().max(15).min(3).required("First Name should be required please"),
  lastName: yup.string().max(15).min(5).required(),
  email: yup.string().email().required("email is requaired"),
  phoneNumber: yup.string().matches(phoneRegex, "Invalid phone number").required(),
  password: yup.string().min(4).max(15).required("Passwords do not match"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]).required("Passwords do not match"),
});
export default registerSchema;
