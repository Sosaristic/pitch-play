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
      .matches(/[a-zA-Z\d]/, "Password can only contain Latin letters."),
  });

  export const editPlayerModalSchema = Yup.object({
    name: Yup.string()
    .max(8, "Must be 15 characters or less")
    .required(" name is required"),
    number: Yup.string()
    .matches(/\d+/, "only number")
    .required("number is required")
  })

  export const teamDetailsSchema = Yup.object({
    teamName: Yup.string()
    .max(17, "Must be 17 characters or less")
    .required(" name is required"),
    teamManager: Yup.string()
    .max(10, "Must be 15 characters or less")
    .required(" name is required"),
  })

export const resetPasswordSchema = Yup.object({
    email: Yup.string()
      .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "invalid email address")
      .required("no email provided"),
   
  });