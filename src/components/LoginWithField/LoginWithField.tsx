import React from "react";

type LoginWithFieldProps = {
  thumb: string;
  text: string;
};

const LoginWithField: React.FC<LoginWithFieldProps> = ({ text, thumb }) => {
  return (
    <button className="border-[0.5px] border-light-b flex items-center justify-center space-x-1.5 w-full h-[36px] rounded-[128px] hover:border-x-btn-c bg-white hover:text-cyan-600">
      <img src={thumb} alt="" />
      <h2 className="text-sm font-semibold">{text}</h2>
    </button>
  );
};
export default LoginWithField;
