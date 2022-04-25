import * as React from "react";
import Card from "../Card/Card";

export default function CupcakeCard({ cupcake, handleAddCart }) {
  const withoutStock = cupcake.stock === 0;

  const handleClick = () => {
    handleAddCart(cupcake.id);
  };

  return (
    <Card
      image={cupcake.image}
      title={cupcake.title}
      subtitle={cupcake.description}
      text={cupcake.price}
      buttonLabel="Añadir al carrito"
      buttonOnClick={handleClick}
      buttonDisabled={withoutStock}
    />
  );
}
