import React,{useState,createContext} from "react";
import FChildContext from "./FChildContext";
export const Context = createContext();
function FParentContext(){
    const [name, ChangeName] = useState("Vamsi");
    return (
        <Context.Provider value = {name}>
            <h1>Parent - {name}</h1>
            <FChildContext/>
        </Context.Provider>
    )
}
export default FParentContext;