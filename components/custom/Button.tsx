import React from "react";

interface ButtonInterface {
  text: string;
  className?: string;
}

const Button = ({ className, text }: ButtonInterface) => {
  return (
    <button className={`${className} py-3 px-4 rounded-full p-bold`}>
      {text}
    </button>
  );
};

export default Button;
