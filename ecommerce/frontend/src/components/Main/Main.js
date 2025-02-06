import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import ProductDetail from "../ProductDetail";
import Cart from "../Cart";

function Main (){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<ProductDetail />} />
            <Route path="/Cart" element={<Cart />} />
        </Routes>
    );
}

export default Main;