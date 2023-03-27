import React, { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Home from './pages/Home';
import About from './pages/About';
import Order from './pages/Order';

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
        <div className="page-contain">
            {renderPage()}
            < Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            < Footer />
        </div>
    );
}
