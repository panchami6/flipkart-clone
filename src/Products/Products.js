import React, {useEffect, useState} from 'react';
import axios from "axios";
import "./products.css";
import { useProducts } from './products-context';

export const Products = () => {
    const  { state, dispatch } = useProducts();
    const {data, sortBy} = state;

    useEffect(() => {
        (async function (){
            const response = await axios.get('data.json');
            dispatch({type: "GET_DATA", payload:response.data}
            )
        })()
    }, [])

    const getSortedData = (data, sortBy ) => {
        if ( sortBy === "PRICE_LOW_TO_HIGH") {
            return data.sort((a,b) => a["price"] - b["price"] )
        }
        if ( sortBy === "PRICE_HIGH_TO_LOW") {
            return data.sort((a,b) => b["price"] - a["price"] )
        }
        
        return data;
    }

    const sortedData = getSortedData(data, sortBy);

    return (
        <div className = "product-listing">
            {
                data && data.map(product => {
                    return(
                        <div className = "product-card">
                            <img src={product.image} />
                            <div className = "product-details">
                                <div className = "product-brand">{product.brand}</div>
                                <div>{product.name}</div>
                                <div className = "product-price">₹ {product.price}</div>
                                <div>size: {product.size}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}


