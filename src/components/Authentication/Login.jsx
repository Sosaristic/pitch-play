import React, { useState } from "react";
import { TextField } from "../Form";
import { Button } from "../UI";
import { Link, useNavigate } from "react-router-dom";
import { useLoginToken } from "../../hooks/useLoginToken";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginSchema } from "../Form/schemaValidation";

export default function Login() {
  const navigate = useNavigate();
  const { setToken } = useLoginToken();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      setToken(true);
      navigate("/dashboard/overview");
      console.log(values);
    },
  });

  return (
    <div className="absolute w-[80%] bg-white login">
      <p className="text-center text-[1.8rem] font-bold font-jost"> Hello, Welcome back</p>
      <p className="text-center font-jost text-[1.2rem] font-[500]">
        {" "}
        Please Log in to ur Account{" "}
      </p>

      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4 md:w-[80%] mx-auto mt-8">
        <div>
          <TextField
            type="email"
            name="email"
            placeholder="test@email.com"
            label="Email"
            id="email"
            autoComplete={"off"}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMsg={formik.touched.email && formik.errors.email}
          />
        </div>
        <TextField
          type="password"
          name="password"
          placeholder="password"
          label="Password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMsg={formik.touched.password && formik.errors.password}
        />
        <div className="h-[3rem]">
          <Button
            type="submit"
            disabled={formik.errors.email || formik.errors.password}
            value="Log in"
          />
        </div>
        <p>
          {" "}
          Don't have an account?{" "}
          <Link to="sign-up" className="text-primary underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}
