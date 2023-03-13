import React from "react";
import SiteWorking from "./Site";
import ProductDetail from './ProductDetail';
import {
    BrowserRouter as Router, 
    Routes, 
    Route
} from "react-router-dom";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SiteWorking />} />
                <Route path="/product/:id" element={<ProductDetail/>} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;