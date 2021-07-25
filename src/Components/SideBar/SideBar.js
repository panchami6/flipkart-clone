import React from 'react';
import { useProducts } from '../../Products/products-context';
import "./sidebar.css";
import axios from "axios";

export const SideBar = () => {
    async function getData(){
        const response = await axios.get('data.json');
        dispatch({type: "GET_DATA", payload:response.data}
        )
    }


    const {state, dispatch} = useProducts();
    const {data, sortBy, size, gender, brand} = state;
    return (
        <div className = "sidebar">
            <div>
                <fieldset>
                    <legend>Sort By</legend>
                    <div>
                        <label>
                        <input type="radio" 
                            onChange={() =>
                            dispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
                            }
                            checked={sortBy === "PRICE_LOW_TO_HIGH"}
                         />Low To High </label>
                    </div>
                    <div>
                        <label>
                        <input type = "radio"
                            onChange={() =>
                            dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
                            }
                            checked={sortBy === "PRICE_HIGH_TO_LOW"}
                        />High To Low
                        </label>
                    </div>
                </fieldset>
            </div>
            <div>
                <fieldset>
                    <legend>Filters</legend>
                    <div>
                        <div>Size</div>
                        <div>
                            <label>
                            <input type="radio"
                                onChange={() =>
                                dispatch({ type: "SIZE", payload: {size: "S", data: data}}) }
                                checked={size === "S"}
                            />S</label>
                        </div>
                        <div>
                            <label>
                            <input type = "radio"
                                onChange={() =>
                                    dispatch({ type: "SIZE", payload: {size: "M", data: data}}) }
                                checked={size === "M"}
                            />M
                            </label>
                        </div>
                        <div>
                            <label>
                            <input type = "radio"
                                onChange={() =>
                                    dispatch({ type: "SIZE", payload: {size: "L", data: data}}) }
                                checked={size === "L"}
                             />L
                            </label>
                        </div>
                    </div>
                    <div>
                        <div>Ideal for</div>
                        <div>
                            <label>
                            <input type="radio"
                                onChange={() =>
                                dispatch({ type: "IDEAL_FOR", payload:{gender: "Men", data: data}})}
                                checked={gender === "Men"}
                                 />Men</label>
                        </div>
                        <div>
                            <label>
                            <input type = "radio" 
                                onChange={() =>
                                dispatch({ type: "IDEAL_FOR", payload:{gender: "Women", data: data} })}  
                                checked={gender === "Women"}
                            />Women
                            </label>
                        </div>
                        <div>
                            <label>
                            <input type = "radio"
                                onChange={() =>
                                dispatch({ type: "IDEAL_FOR", payload:{gender: "Kids", data: data} })}
                                checked={gender === "Kids"}
                            />Kids
                            </label>
                        </div>
                    </div>
                    <div>
                        <div>Brand</div>
                        <div>
                            <label>
                            <input type="radio"
                                onChange={() =>
                                dispatch({ type: "BRAND", payload: {brand:"LEVI'S", data: data}})} 
                                checked = {brand === "LEVI'S"}
                            />LEVI'S</label>
                        </div>
                        <div>
                            <label>
                            <input type = "radio" 
                                onChange={() =>
                                dispatch({ type: "BRAND", payload: {brand:"DARZI", data: data} })}
                                checked = {brand === "DARZI"}
                            />DARZI
                            </label>
                        </div>
                        <div>
                            <label>
                            <input type = "radio" 
                                onChange={() =>
                                dispatch({ type: "BRAND", payload: {brand:"Pepe Jeans", data: data}  })}
                                checked = {brand === "Pepe Jeans"}
                            />Pepe Jeans
                            </label>
                        </div>
                    </div>
                </fieldset>
             <button onClick = {getData}>Clear Filters</button>
            </div>
        </div>
    )
}
