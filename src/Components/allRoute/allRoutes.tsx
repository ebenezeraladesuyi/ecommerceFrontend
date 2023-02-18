import React from "react";
import { useRoutes } from "react-router-dom";
import Cart from "../cart/CartFile/Cart/Cart";
import HomeComp from "../Home/homeComp";
import Register from "../register/Register";


export const AllRoute = () => {

    const element = useRoutes([
        {
            path: "/",
            element: <HomeComp /> 
        },
        {
            path: "/cart",
            element: <Cart /> 
        },
        {
            path: "/register",
            element: <Register /> 
        },
    ])

    return element
} 