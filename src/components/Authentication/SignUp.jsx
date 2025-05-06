import React from 'react';
import { TextField } from '../Form';
import { Button } from '../UI';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { signUpSchema } from '../Form/schemaValidation';
import { useFirebaseAuthentication } from '../../service/useFirebaseAuthentication';
import { IoMdTrophy } from 'react-icons/io';
import { FaCircleCheck, FaUserTie } from 'react-icons/fa6';

const types = [
  { id: 1, label: 'Competition Manger', type: 'competition', icon: IoMdTrophy },
  { id: 2, label: 'Team Manager', type: 'manager', icon: FaUserTie },
];

export default function SignUp() {
  const { signUp } = useFirebaseAuthentication();
  const formik = useFormik({
    initialValues: {
      lastName: '',
      firstName: '',
      email: '',
      password: '',
      type: 'competition',
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      const { email, password } = values;
      const id = signUp(email, password);
    },
  });

  return (
    <div className="w-full bg-white">
      <p className="text-center text-[1.8rem] font-bold font-jost">
        {' '}
        Hey, Welcome to Pitch Play
      </p>
      <p className="text-center font-jost text-[1.2rem] font-[500]">
        {' '}
        Create An Account
      </p>

      <form
        className="flex flex-col gap-4 md:w-[80%] mx-auto mt-8"
        onSubmit={formik.handleSubmit}
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
            type="text"
            name="lastName"
            placeholder="surname"
            label="Last Name"
            id="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMsg={formik.touched.lastName && formik.errors.lastName}
          />
        </div>
        <div>
          <TextField
            type="text"
            name="firstName"
            placeholder="Your name"
            label="First Name"
            id="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            errorMsg={formik.touched.firstName && formik.errors.firstName}
          />
        </div>
        <div>
          <TextField
            type="email"
            name="email"
            placeholder="test@email.com"
            label="Email"
            id="signUpEmail"
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
          id="signUpPassword"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errorMsg={formik.touched.password && formik.errors.password}
        />
        <div className="h-[3rem]">
          <Button
            type="submit"
            disabled={formik.errors.email || formik.errors.password}
            value="Sign Up"
          />
        </div>
        <p>
          {' '}
          Have an account?{' '}
          <Link to="/sign-in" className="text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}
