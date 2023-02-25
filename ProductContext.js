import React, { useState } from "react";

const ProductContext = React.createContext();


export default ProductContext ;



const INITIAL_PRODUCTS = [{
    productName:"product 1",
    productCompany:"Company 1",
    type:"Mobile",
    price:"32080"
},
{
    productName:"product 2",
    productCompany:"Company 2",
    type:"Laptop",
    price:"32080"
}
]
export const ProductProvider = ({children})=>{
    const [products,setProducts]= useState(INITIAL_PRODUCTS)

    return (
        <ProductContext.Provider value={{products,setProducts}}></ProductContext.Provider>
    )
}