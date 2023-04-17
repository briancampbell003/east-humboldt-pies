import React, { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Menu from './pages/Menu';

export default function Container() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'Gallery') {
            return <Gallery />;
        }
        if (currentPage === 'Menu') {
            return <Menu />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <div className="page-contain">
                {renderPage()}
                < Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>
            < Footer />
        </div>
    );
}
