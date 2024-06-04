import React, { useState } from "react";
import { Input } from "../../../@/components/ui/input";
import { Label } from "../../../@/components/ui/label";
import hide from "../../assets/pngwing.com.png";

type InputFieldProps = {
  labelText: string;
  pswIconShow?: string;
  pswIconLock?: string;
};

const InputField: React.FC<InputFieldProps> = ({ labelText, pswIconShow, pswIconLock }) => {
  const [showPsw, setShowPsw] = useState(false);

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email" className="font-semibold text-sm">
        {labelText}
      </Label>
      <div
        className={`border-[0.5px] border-light-b flex items-center justify-center ${
          pswIconShow ? "space-x-2" : ""
        }  w-full h-[36px] rounded-[128px] px-4 focus-within:ring-4 ring-ring-light-c`}
      >
        <img src={pswIconLock} alt="" />
        <Input
          type={showPsw ? "text" : `${`${labelText}`.toLowerCase()}`}
          id={`${`${labelText}`.toLowerCase()}`}
          placeholder={`Enter your ${`${labelText}`.toLowerCase()}`}
          className="focus:outline-none"
        />
        {pswIconShow && (
          <img
            src={showPsw ? hide : pswIconShow}
            alt=""
            onClick={() => setShowPsw(!showPsw)}
            className="cursor-pointer w-[18px]"
          />
        )}
      </div>
    </div>
  );
};
export default InputField;
