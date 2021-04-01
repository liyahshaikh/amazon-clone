import React, {createContext, useContext, useReducer} from 'react'
//Prepares the data layer so that all components can access it no matter how deeply nested
export const StateContext = createContext()

export const StateProvider = ({reducer, initialState, children}) =>(
     <StateContext.Provider value={useReducer(reducer,initialState)}>
         {children}
     </StateContext.Provider>
)

// Pull the data from the data layer

export const useStateValue = () => useContext(StateContext)
