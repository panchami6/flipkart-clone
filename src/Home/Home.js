import React from 'react'
import { Products } from '../Products/Products';
import { SideBar } from '../Components/SideBar/SideBar';
import "./home.css"

export const Home = () => {
    return (
        <div>
            {/* <NavBar /> */}
            <div className = "sidebar-products">
                <SideBar />
                <Products />
            </div>
        </div>
    )
}

