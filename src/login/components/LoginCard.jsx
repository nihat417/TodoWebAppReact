import { useContext, useEffect, useRef, useState } from "react";
import Context from "../../ContextWrapper";
import { Navigate, useNavigate } from "react-router-dom";

function LoginCard() {
  const {setAuthorized,email,setEmail} = useContext(Context);
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (isValid) {
      setAuthorized(true);
      navigate("/mainpage");
    } else {
      navigate("/login");
    }
  };
  

  return (
    <form className="flex flex-col items-center px-[100px] py-[50px] sm:px-[200px] py-[100px] md:px-[250px] py-[150px] shadow-md shadow-zinc-300 justify-center rounded-[13px]">
      <h1 className="text-3xl font-bold mb-5">LOGIN FORM</h1>
      <div className="flex flex-col">
        <label className="font-bold text-white">Email:</label>
        <input 
          onChange={(e) => {setEmail(e.target.value);setIsValid(e.target.checkValidity());}}
          required
          value={email}
          type="email"
          className={`border border-zinc-300 p-[5px] rounded-[6px] my-2 ${email.length > 0 ? (isValid ? "bg-green-500" : "bg-red-500") : "border-zinc-300"}`}
        />
      </div>

      <button
        onClick={handleClick}
        className={`${
          isValid
            ? "bg-yellow-500 hover:bg-yellow-700"
            : "bg-[#D7D7D7] pointer-events-none"} py-2 px-4 rounded-[10px]`}
        type="submit"
        disabled={!isValid}
      >
        Submit
      </button>
    </form>
  );
}

export default LoginCard;
