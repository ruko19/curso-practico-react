import React, { createContext, useState } from 'react'

export const appContext = createContext();


export const AppProvider = ({ children }) => {

    const initialState = {
        cart: []
    }
    const [state, setState] = useState(initialState)


    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }

    return (
        <appContext.Provider value={{ state, addToCart }}>
            {children}

        </appContext.Provider>
    )

}