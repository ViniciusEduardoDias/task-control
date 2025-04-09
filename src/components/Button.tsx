import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ className, ...rest }: ButtonProps) => {
  return (
    <button
      className={`bg-slate-300 p-2 rounded-sm hover:bg-slate-800 hover:text-white transition duration-500 ease-in-out ${
        className ?? ""
      }`}
      {...rest}
    />
  );
};

export default Button;
