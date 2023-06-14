import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from '../Pages/aboutUs';
import HomePage from '../Pages/home';

function Wireframe() {
    return (
        <Router basename="/">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path={`/login`} element={<AboutUs />} />
            </Routes>
        </Router>
    );
}

export default Wireframe;
