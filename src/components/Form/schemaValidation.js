import * as Yup from "yup";

export const signUpSchema = Yup.object({
  lastName: Yup.string().max(15, "Must be 15 characters or less").required("Last name is required"),
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("First name is required"),
  email: Yup.string()
    .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "invalid email address")
    .required("no email provided"),
  password: Yup.string()
    .required("No password provided")
    .min(4, "Password is too short - should be 4 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

export const loginSchema = Yup.object({
    email: Yup.string()
      .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "invalid email address")
      .required("no email provided"),
    password: Yup.string()
      .required("No password provided")
      .min(4, "Password is too short - should be 4 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  });
