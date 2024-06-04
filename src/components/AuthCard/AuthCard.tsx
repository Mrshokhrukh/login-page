import CardCenter from "../CardCenter/CardCenter";
import CardTop from "../CardTop/CardTop";

type Props = {};

function AuthCard({}: Props) {
  return (
    <div className="h-[610px] w-[344px] bg-white rounded-[12px] p-4 pt-4.5 flex flex-col gap-[20px]">
      <CardTop />
      <CardCenter />
    </div>
  );
}

export default AuthCard;
