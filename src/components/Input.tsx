import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

function Input(props: InputProps) {
  return (
    <input
      className="px-2 py-1 rounded-sm shadow-md outline-slate-300"
      {...props}
    />
  );
}

export default Input;
