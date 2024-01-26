import { createContext, useState } from "react";

const Context = createContext();
export default Context;


export const ContextWrapper = ({children}) => {
    const [authorized, setAuthorized] = useState(false);
    const [email, setEmail] = useState("");
    const [cards, setCards] = useState([]);

    const getcards = async ()=>{
      try {
        const request = await fetch(`http://localhost:3000/cards/${email}`);
        const response = await request.json();
        setCards(response);  
      } catch (error) {
        console.log(error);
      }
    }

    const contextData = {
        email: email,
        setEmail: setEmail,
        authorized: authorized,
        setAuthorized: setAuthorized,
        setCards:setCards,
        cards:cards,
        getcards: getcards,
      };

      return <Context.Provider value={contextData}>{children}</Context.Provider>
}