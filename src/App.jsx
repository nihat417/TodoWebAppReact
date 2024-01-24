import { useContext } from "react";
import Context from "./ContextWrapper";
import Mainpage from "./mainpage/Mainpage";
import Login from "./login/Login";

export default function App() {
  const { authorized } = useContext(Context);

  return authorized ? <Mainpage/> : <Login/>;
  
}
