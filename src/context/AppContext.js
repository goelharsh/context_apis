import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppContextProvider({children}){

    const [state, setState] = useState(0)

    function increment(){
        setState(state+1)
    }
    function decrement(){
        setState(state-1)
    }

    const value ={
        state, setState, increment, decrement
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

