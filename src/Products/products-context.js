import { createContext, useReducer, useContext } from "react";
import { ProductsReducer } from "./products-reducer";

export const ProductsContext = createContext();

const initialState = {
    data: [],
    sortBy: null,
    size: null,
    gender: null,
    brand: null,
}

export const ProductsProvider = ({children}) => {
    const [state, dispatch] = useReducer(ProductsReducer, initialState)
    return(
        <ProductsContext.Provider value = {{state, dispatch}}>{children}</ProductsContext.Provider>
    )
}

export const useProducts = () =>{
    return useContext(ProductsContext);
}
