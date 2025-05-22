import { createContext, useReducer } from "react"
import { DarkModeReducer } from "./DarkModeReducer";

const initalState = {
    darkMode: false,
}

export const DarkModeContext = createContext(initalState);

export const DarkModeContextProvider = ({children})=> {

    const [state,   dispatch] = useReducer(DarkModeReducer, initalState);

    return (
        <DarkModeContext.Provider value={{darkMode: state.darkMode, dispatch}}>
            {children}
        </DarkModeContext.Provider>
    )

}