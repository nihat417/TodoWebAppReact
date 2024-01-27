import { useContext } from "react";
import { Route,Routes,Navigate } from "react-router-dom";
import Context from "./ContextWrapper";
import Mainpage from "./mainpage/Mainpage";
import Login from "./login/Login";
import NotFound from "./ErrorPages/NotFound";

export default function App() {
  const { authorized } = useContext(Context);

  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/login"} replace/>}></Route>
      {
        authorized ? (<Route path="/mainpage" element={<Mainpage/>}/>) : (<Route path="/login" element={<Login/>}/>)
      }

      <Route path='*' element={<NotFound/>}/>

    </Routes>
  )
}
