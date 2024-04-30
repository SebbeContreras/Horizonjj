function shoppingCart() {
  let shoppingCart;

  try {
    shoppingCart = localStorage.getItem("cart");
  } catch (error) {}

  return <span>{shoppingCart}</span>;
}
