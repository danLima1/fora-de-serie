import React, { useEffect } from "react";
//components
import ScrollBtn from "../../helpers/ScrollBtn";
import EmptyCart from "./EmptyCart";

const Cart = ({ cartItems, CartItem }) => {
  useEffect(() => {
    document.title = "Carrinha | Fora de série";
  }, []);
  return (
    <main className="cart">
      <h2>Seus favoritos</h2>
      <article className="cart-content">
        {cartItems.length === 0 ? <EmptyCart /> : CartItem}
      </article>
      <ScrollBtn />
    </main>
  );
}

export default Cart;
