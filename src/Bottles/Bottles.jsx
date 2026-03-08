import React, { use, useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { addToScoreCart, getStoreCart } from "../utils/localStorage";

const Bottles = ({ bottlesPromise }) => {
  
  const [cart, setCart] = useState([]);
  
  const bottles = use(bottlesPromise);


    //Use Effect

  useEffect(() => {
    const storedCartIds = getStoreCart();
    // console.log(storedCartIds,bottles);
    const storedCart = [];
    for (const id of storedCartIds) {
      const cartBottle = bottles.find(bottle => bottle.id === id)
      if(cartBottle){
        storedCart.push(cartBottle);
      }
    }

    setCart(storedCart);

  }, [bottles]);

  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);

    //Save the bottle id in the storage
    addToScoreCart(bottle.id);
  };

  return (
    <div>
      <h4>Added to Cart: {cart.length}</h4>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
