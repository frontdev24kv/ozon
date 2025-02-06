const cart = () => {
  const cartOpenBtn = document.getElementById("cart");
  const cart = document.querySelector(".cart");
  const cartCloseBtn = cart.querySelector(".cart-close");

  const showCart = () => {
    cart.style.display = "flex";
  };

  const hideCart = () => {
    cart.style.display = "";
  };

  cartOpenBtn.addEventListener("click", showCart);
  cartCloseBtn.addEventListener("click", hideCart);
};

export default cart;
