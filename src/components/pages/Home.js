import React from 'react';
import TopLeft from '../../assets/pictures/nav-bg-1.png';
import BtmLeft from '../../assets/pictures/cake2.png';
import BtmRight from '../../assets/pictures/cake1.png';

const Home = () => {
    return (
        <div className="home-contain">
        <div className="home-top-contain">
            <div className="home-top-left">
                <img src={TopLeft} alt="Pies on a table" />
            </div>
            <div className="home-top-right">
                <p>From My Home To Yours</p>
            </div>
        </div>
        <div className="home-btm-contain">
            <div className="home-btm-left">
                <img src={BtmLeft} alt="Chocolate cake" />
            </div>
            <div className="home-btm-middle">
                <p>Diverse and Delicious Options</p>
            </div>
            <div className="home-btm-right">
                <img src={BtmRight} alt="Lemon meringue pie" />
            </div>
        </div>
        </div>
    );
}

export default Home;
