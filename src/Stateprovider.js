import React,{createContext,useContext,useReducer} from "react";

export const Statecontext = createContext()

export const stateprovider = ({reducer,initialstate,children}) =>(
    <Statecontext.Provider value={useReducer(reducer,initialstate)}>
        {children}
    </Statecontext.Provider>
);

export const useStateValue= ()=> useContext(Statecontext)