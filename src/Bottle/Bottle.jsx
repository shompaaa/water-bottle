import React from 'react';
import './Bottle.css'

const Bottle = ({bottle,handleAddToCart}) => {
    const {img, name,price,stock} = bottle;

    return (
        <div className='bottle'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <p>Price: ${price}</p>
            <p>{stock} Remaining</p>
            <button onClick={()=>handleAddToCart(bottle)}>Add to Cart</button>
        </div>
    );
};

export default Bottle;