import React, { useRef, useState, useEffect } from "react";

export default function TextField({ type, label, value, regex, errorMsg, id, placeholder, name, onChange,}) {
  const [displayError, setDisplayError] = useState(false);
  const [reValidateInput, setReValidateInput] = useState(false);

  
  function onBlurValidation() {
    validate();
  }
  function validate() {
    if (regex.test(value)) {
      setDisplayError(false);
    } else {
      setReValidateInput(true);
      setDisplayError(true);
    }
  }
  const onChangeValidation = (e) => {
    if (reValidateInput) {
      validate();
    }
  };

  return (
    <div className=" relative  w-full input">
      <label htmlFor="name" className=" bg-white left-4 text-md px-1 text-gray-500">
        {label}
      </label>
      <div className="">
        <input
        
          type={type || "text"}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onKeyUp={onChangeValidation}
          onBlur={onBlurValidation}
          placeholder={placeholder}
          className={`text-[1rem] caret-primary text-black pl-2 outline-none h-[3rem] w-full ${
            displayError ? "focus:border-red-500" : "focus:border-primary"
          }  border  rounded-md`}
        />
        {displayError && <p className="text-red-500 text-sm font-inter">{errorMsg}</p>}
      </div>
    </div>
  );
}
