import React from 'react';
import TopLeft from '../../assets/pictures/nav-bg-1.png';

const Home = () => {
    return (
        <div className="home-contain">
            <div className="home-top-left">
                <img src={TopLeft} alt="Pies on a table" />
            </div>
            <div className="home-top-right">
                <p>Sarah's Yummy Baked Goods</p>
            </div>
        </div>
    );
}

export default Home;
