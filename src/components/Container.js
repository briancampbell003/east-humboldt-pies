import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './pages/About';
import Order from './pages/Order';
import Logo from '../assets/east-humboldt-pies_logo.png';

export default function Container() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Order') {
            return <Order />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <img className="corner-logo" src={Logo} alt="East Humboldt Pies Logo"></img>
            < Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            < Footer />
        </div>
    );
}
