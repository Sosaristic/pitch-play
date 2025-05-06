import React, { useRef, useState, useEffect } from 'react';

export default function TextField({
  type,
  label,
  value,
  errorMsg,
  id,
  placeholder,
  name,
  onChange,
  onBlur,
  autoComplete,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full input">
      <div className="flex">
        <label
          htmlFor="name"
          className=" left-4 text-md px-1 text-gray-500 font-poppins font-[900]"
        >
          {label}
        </label>
        {type === 'password' && (
          <div className="ml-auto">
            <button
              onClick={() => setShowPassword(!showPassword)}
              type="button"
              className="text-sm text-primary"
            >
              {showPassword ? 'Hide Password' : 'Show Password'}
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <input
          type={showPassword ? 'text' : type}
          id={id}
          name={name}
          value={value}
          autoComplete={autoComplete}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={`text-[1rem] caret-primary font-poppins text-black pl-2 outline-none h-[3rem] w-full ${
            errorMsg ? 'focus:border-red-500' : 'focus:border-primary'
          }  border  rounded-md`}
        />
        <p
          className={`text-red-500 min-h-4 text-sm font-inter ${
            errorMsg ? 'visible' : 'invisible'
          } `}
        >
          {errorMsg}
        </p>
      </div>
    </div>
  );
}
