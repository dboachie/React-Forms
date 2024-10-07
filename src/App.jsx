import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Authenticate from "./components/authenticate";
import SignUpForm from "./components/signupform";

export default function App() {
  const [count, setCount] = useState(0);
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm token={token} setToken={setToken} />

      <Authenticate token={token} setToken={setToken} />
    </>
  );
}
