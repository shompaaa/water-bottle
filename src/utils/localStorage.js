/***
 * 1. To get something from local storage, you will get it as string
 * 2. Convert this string to js array/object with (JSON.stringify)
 * 3. Then parse the stringified value for using as javaScript
 */

const getCartFromLocalStorage = () => {
  const storedCartString = localStorage.getItem("cart");

  if (storedCartString) {
    const storedCart = JSON.parse(storedCartString);
    return storedCart;
  }
  return [];
};

const saveCartToLocalStorage = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem('cart', cartStringified);
};

const addItemToCartLocalStorage = (id) => {
  const cart = getCartFromLocalStorage();
  const newCart = [...cart, id];

  //Save cart to the local storage
  saveCartToLocalStorage(newCart);
};

export {
  getCartFromLocalStorage as getStoreCart,
  addItemToCartLocalStorage as addToScoreCart,
};
