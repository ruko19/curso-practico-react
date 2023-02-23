import { useContext } from "react";
import { appContext } from "../context/AppContext"

export const useInitialState = () => {
    return (
        useContext(appContext)
    )
}