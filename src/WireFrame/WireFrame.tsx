import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from '../Pages/aboutUs';
import Home from '../Pages/HomePage/home';

function Wireframe() {
    return (
        <Router basename="/">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path={`/aboutUs`} element={<AboutUs />} />
            </Routes>
        </Router>
    );
}

export default Wireframe;
