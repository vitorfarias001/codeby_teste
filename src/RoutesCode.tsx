import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cart from "./pages/Cart";

export default function RouterCodeComponent(): JSX.Element {
    return (
        <BrowserRouter >
            <Routes > 
                <Route path="/" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    );
}