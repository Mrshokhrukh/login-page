import AuthCard from "./components/AuthCard/AuthCard";
import "./style.css";
type Props = {};

export default function App({}: Props) {
  return (
    <div className="bg-gray-200 h-[100vh] w-full flex items-center justify-center">
      <AuthCard />
    </div> 
  );
}
