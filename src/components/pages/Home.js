import React from 'react';
import TopLeft from '../../assets/pictures/nav-bg-1.png';
import BtmLeft from '../../assets/pictures/cake2.png';
import BtmRight from '../../assets/pictures/cake1.png';

const Home = () => {
    return (
        <div className="home-contain">
        <div className="home-top-contain">
            <div className="home-top-left">
                {/* <img src={TopLeft} alt="Pies on a table" /> */}
            </div>
            <div className="home-top-right">
                <h3>From My Home To Yours</h3>
                <p>East Humboldt Pies is a pandemic-born business that grew out of a small apartment kitchen in the East Humboldt Park neighborhood of Chicago in 2020. What began as a small-scale Thanksgiving pie operation blossomed into a micro bakery serving customers in the Chicago area year-round. EHP hosts periodic seasonal bake sales for various holidays and offers custom orders anytime in a variety of baking formats. While pie remains a specialty, we also offer cakes, cookies, pastries, breads and more. Check out our menu for inspiration and feel free to inquire about specific requests.</p>
            </div>
        </div>
        <div className="home-btm-contain">
            <div className="home-btm-left">
                <img src={BtmLeft} alt="Chocolate cake" />
            </div>
            <div className="home-btm-middle">
                <h3>About the Owner</h3>
                <p>Sarah Wilson started baking while finishing a PhD in medieval literature. She takes inspiration from historical recipes and baking methods and enjoys exploring her culinary roots through her British-Texan lineage.</p>
                <br></br>
                <p>She can be reached at swilson821@gmail.com</p>
            </div>
            <div className="home-btm-right">
                <img src={BtmRight} alt="Lemon meringue pie" />
            </div>
        </div>
        </div>
    );
}

export default Home;
