import React from 'react';

const MenuInsert = ({ item, description }) => {
    return(
        <div className='menu-insert'>
            <p className='menu-insert-head'>{item}</p>
            <p className='menu-insert-description'>{description}</p>
        </div>
    )

}

export default MenuInsert;
