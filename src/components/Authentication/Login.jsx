import React, { useState } from 'react';
import { RadioButton, TextField } from '../Form';
import { Button } from '../UI';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { useFirebaseAuthentication } from '../../service/useFirebaseAuthentication';
import { loginSchema } from '../Form/schemaValidation';

import { IoMdTrophy } from 'react-icons/io';
import { FaCircleCheck, FaUserTie } from 'react-icons/fa6';

const types = [
  { id: 1, label: 'Competition Manger', type: 'competition', icon: IoMdTrophy },
  { id: 2, label: 'Team Manager', type: 'manager', icon: FaUserTie },
];

export default function Login() {
  const [rememberMe, setRemeberMe] = useState(false);
  const { signUserInWithSession, signIn } = useFirebaseAuthentication();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      type: 'competition',
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      const { email, password } = values;
      if (rememberMe) {
        signIn(email, password);
      } else {
        signUserInWithSession(email, password);
      }
    },
  });

  console.log(formik.values);

  return (
    <div className="w-full bg-white ">
      <p className="text-center text-[1.8rem] font-bold font-jost">
        {' '}
        Hello, Welcome back
      </p>
      <p className="text-center font-jost text-[1.2rem] font-[500]">
        {' '}
        Please Log in to ur Account{' '}
      </p>

      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-4 md:w-[80%] mx-auto mt-8"
      >
        <div className="flex gap-6 ">
          {types.map((type) => {
            return (
              <button
                key={type.id}
                className={`flex flex-col relative ${
                  formik.values.type === type.type
                    ? 'bg-primary text-white'
                    : 'bg-transparent text-primary'
                } items-center justify-center w-1/2 py-2 border rounded-md text-primary border-primary`}
                onClick={() => formik.setFieldValue('type', type.type)}
              >
                <span className="text-primary">
                  <type.icon
                    size={50}
                    color={
                      formik.values.type === type.type ? 'white' : '#c74aae'
                    }
                  />
                </span>
                <p>{type.label}</p>

                {formik.values.type === type.type && (
                  <span className="absolute top-2 right-4">
                    <FaCircleCheck size={26} />
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div>
          <TextField
            type="email"
            name="email"
            placeholder="test@email.com"
            label="Email"
            id="email"
            autoComplete={'off'}
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
        <Link
          to={'/reset-password'}
          className="ml-auto text-sm text-primary hover:underline"
        >
          Forgot Password?
        </Link>

        <div className="h-[3rem]">
          <Button
            type="submit"
            disabled={formik.errors.email || formik.errors.password}
            value="Log in"
          />
        </div>
        <div className="flex gap-2">
          <RadioButton
            name={'remember'}
            isChecked={rememberMe}
            onChange={() => setRemeberMe((prev) => !prev)}
          />{' '}
          <p>Remember me?</p>{' '}
        </div>

        <p>
          Don't have an account?{' '}
          <Link to="sign-up" className="underline text-primary">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}
