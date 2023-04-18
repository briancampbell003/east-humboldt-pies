import React from 'react';

const MenuInsert = ({ item, description, price }) => {
    return(
        <div className='menu-insert'>
            <div className='head-and-price'>
                <p className='menu-insert-head'>{item}</p>
                <p className='menu-insert-price'>${price}</p>
            </div>
            <p className='menu-insert-description'>{description}</p>
        </div>
    )

}

export default MenuInsert;
