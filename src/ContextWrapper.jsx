import { createContext, useState } from "react";

const Context = createContext();
export default Context;

export const ContextWrapper = ({children}) => {
    const [authorized, setAuthorized] = useState(false);
    const [email, setEmail] = useState("");

    const contextData = {
        email: email,
        setEmail: setEmail,
        authorized: authorized,
        setAuthorized: setAuthorized,
      };

      return <Context.Provider value={contextData}>{children}</Context.Provider>
}