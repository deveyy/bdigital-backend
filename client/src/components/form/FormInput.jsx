import React from "react";

export default function FormInput({ name, label, type, placeholder, ...rest }) {
  return (
    <div className="flex flex-col-reverse">
      <input
        id={name}
        name={name}
        type= {type}
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700
        bg-white bg-clip-padding border border-solid border-gray-300 rounded transition
        ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder={placeholder}
        {...rest}
      />
      <label
        className="form-label inline-block mb-2 text-start"
        htmlFor={name}>
        {label}
      </label>
    </div>
  );
}
