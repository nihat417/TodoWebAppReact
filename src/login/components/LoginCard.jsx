import { useState } from "react";

function LoginCard({setAuthorized,email,setEmail}) {
  const [isValid, setIsValid] = useState(false);
  return (
    <form
      action=""
      className="flex flex-col items-center w-[700px] h-[310px] shadow-md shadow-zinc-300 justify-center rounded-[13px]"
    >
      <h1 className="text-3xl font-bold mb-5">LOGIN FORM</h1>
      <div className="flex flex-col">
        <label htmlFor="">Email:</label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
            setIsValid(e.target.checkValidity());
          }}
          required
          value={email}
          type="email"
          className="border border-zinc-300 rounded-[6px] my-2"
        />
      </div>

      <button
        onClick={() => {
          isValid ? setAuthorized(true) : null;
        }}
        className={`${
          isValid
            ? "bg-yellow-500 hover:bg-yellow-700"
            : "bg-[#D7D7D7] pointer-events-none"
        } py-2 px-4 rounded-[10px]`}
        type="submit"
        disabled={!isValid}
      >
        Submit
      </button>
    </form>
  );
}

export default LoginCard;
