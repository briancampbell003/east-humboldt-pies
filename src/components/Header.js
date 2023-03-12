import React from 'react';
import Navigation from './Navigation';

function Header({ currentPage, handlePageChange }) {
    return (
        <div>
            <div className="header">
                {/* BANNER IMAGE COLLAGE HERE */}

                <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>
        </div>
    );
}

export default Header;
