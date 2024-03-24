import logo from "../../public/logo.png";
import LoginForm from "../components/LoginForm";

export default function Home() {
  return (
    <div className="flex justify-center h-screen items-center roboto-thin">
      <div className="bg-gray-200 w-[33%] h-[30%] flex flex-col items-center rounded-md relative">
        <img
          src={logo.src}
          height={500}
          width={500}
          className="absolute bottom-16 right-[22.5rem]"
        />
        <LoginForm />
      </div>
    </div>
  );
}
