import React from "react";
import lock from "../../assets/Vector.png";
import show from "../../assets/Vector (2).png";
import rt from "../../assets/Vector (1).png";
import { Button } from "../../../@/components/ui/button";
import LoginWithField from "../LoginWithField/LoginWithField";
import InputField from "../InputFields/InputField";
type CardCenterProps = {};

const CardCenter: React.FC<CardCenterProps> = () => {
  return (
    <section className="flex flex-col gap-[16px]">
      <div className="space-y-2">
        <LoginWithField thumb={lock} text={"Connect with Facebook"} />
        <LoginWithField thumb={lock} text={"Connect with Twitter"} />
      </div>
      <div className="w-full flex gap-3 items-center">
        <span className="h-[0.5px] flex-1 bg-light-b"></span>
        <p className="text-sm text-gray-c">or sign in with email</p>
        <span className="h-[0.5px] flex-1 bg-light-b"></span>
      </div>
      <div className="flex flex-col gap-3">
        <InputField labelText="Email" />
        <InputField labelText="Password" pswIconLock={lock} pswIconShow={show} />
      </div>
      <div className="flex items-center space-x-2">
        <input type="checkbox" id="remember" className={``} />
        <label htmlFor="remember" className="text-sm">
          Remember for 30 days
        </label>
      </div>
      <Button
        className="text-white text-sm 
      font-semibold border-[0.5px] border-btn-c
       flex items-center justify-center gap-2 w-full 
       h-[36px] rounded-[128px] transition-all
        bg-btn-c hover:border-cyan-500
         hover:bg-black hover:text-cyan-500"
      >
        Sign in
        <img src={rt} alt="" />
      </Button>
      <div className="text-sm flex justify-center items-center mt-2 gap-2">
        <p>No account ?</p>
        <a href={""} className="text-btn-c">
          Create an account
        </a>
      </div>
    </section>
  );
};
export default CardCenter;
