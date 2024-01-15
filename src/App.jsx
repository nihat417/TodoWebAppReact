import { useState } from "react";
import Mainpage from "./mainpage/Mainpage";
import Login from "./login/Login";

export default function App() {
  const [authorized, setAuthorized] = useState(false);
  const [email, setEmail] = useState("");

  return authorized ? <Mainpage setAuthorized={setAuthorized} email={email} /> : <Login setAuthorized={setAuthorized} email={email} setEmail={setEmail} />;
}
