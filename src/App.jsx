import { useContext } from "react";
import Context from "./ContextWrapper";
import Mainpage from "./mainpage/Mainpage";
import Login from "./login/Login";
import NotFound from "./ErrorPages/NotFound";
import Details from "./mainpage/Details";
import { Navigate, Route, Routes } from "react-router-dom";

export default function App() {
  const { authorized } = useContext(Context);

  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/login"} replace/>}></Route>
      {
        authorized ? (<Route path="/mainpage" element={<Mainpage/>}/>) : (<Route path="/login" element={<Login/>}/>)
      }

      <Route path="/Details/:message" element={<Details/>}/>
      <Route path='*' element={<NotFound/>}/>

    </Routes>
  )
}
