import React from 'react';

const MenuInsert = ({ item, description, price }) => {
    return(
        <div className='menu-insert'>
            <p className='menu-insert-head'>{item}</p>
            <p className='menu-insert-description'>{description}</p>
            <p className='menu-insert-price'>$$${price}</p>
        </div>
    )

}

export default MenuInsert;
