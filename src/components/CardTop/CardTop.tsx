import symbol from "../../assets/Symbol.png";
type CardTopProps = {};

const CardTop: React.FC<CardTopProps> = () => {
  return (
    <div className="flex flex-col items-center space-y-5">
      <img src={symbol} alt="" className="mt-3" />
      <div className="text-center">
        <h2 className="font-semibold text-xl text-primary-c">Welcome back</h2>
        <p className="text-sm font-inter text-gray-c mt-1">
          Sign in to access to your dashboard, <br /> settings and projects
        </p>
      </div>
    </div>
  );
};
export default CardTop;
