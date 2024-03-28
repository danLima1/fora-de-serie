import React from "react";
import { Link } from "react-router-dom";
//components
import ResetLocation from "../../helpers/ResetLocation";

const EmptyCart = () => {
  return (
    <React.Fragment>
      <h3>Ops! seu carrinho está vazio</h3>
      <p>Parece que você não adicionou nada no seu carrinho ainda!</p>
      <Link to="/menu" className="active-button-style" onClick={ResetLocation}>
        Explorar cardápio
      </Link>
    </React.Fragment>
  );
}

export default EmptyCart;
