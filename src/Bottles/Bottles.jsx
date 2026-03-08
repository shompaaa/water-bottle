import React, { use, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";

const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);

  const [cart, setCart] = useState([]);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
  };

  return (
 <div>
    <h4>Added to Cart: {cart.length}</h4>
       <div className="bottles-container">
      {bottles.map((bottle) => (
        <Bottle key={bottle.id} 
        bottle={bottle}
        handleAddToCart={handleAddToCart}
        ></Bottle>
      ))}
    </div>
 </div>
  );
};

export default Bottles;
