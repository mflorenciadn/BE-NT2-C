import React, { useState, useEffect } from "react";
import CupcakeCard from "../CupcakeCard/CupcakeCard";
import FilterButton from "../FilterButton/FilterButton";
import "./CupcakesList.css";

const CupcakesList = ({ products }) => {
  const [productsToShow, setProductsToShow] = useState(products);
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    updateProductsToShow();
  }, [showAll]);

  const handleAddCart = (cupcakeId) => {
    let cupcakeFlavorIndex = productsToShow.findIndex(
      (cupcake) => cupcake.id === cupcakeId
    );

    let newStock = productsToShow[cupcakeFlavorIndex].stock - 1;

    productsToShow[cupcakeFlavorIndex].stock = newStock;

    setProductsToShow([...productsToShow]);

    alert(
      productsToShow[cupcakeFlavorIndex].stock > 0
        ? `¡Producto añadido! Productos disponibles: ${productsToShow[cupcakeFlavorIndex].stock}`
        : "¡Producto añadido!"
    );
  };

  const getProductsWithStock = () => {
    return products.filter((cupcake) => cupcake.stock > 0);
  };

  const updateProductsToShow = () => {
    showAll
      ? setProductsToShow(products)
      : setProductsToShow(getProductsWithStock);
  };

  const handleFilter = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="CupcakesList-Container">
      <div className="CupcakesList-Header">
        <h2 className="CupcakesList-Title">
          ¿Con qué sabor te vas a deleitar hoy?
        </h2>
        <div>
          <FilterButton showAll={showAll} handleFilter={handleFilter} />
        </div>
      </div>
      <div className="CupcakesList-Grid">
        {productsToShow.map((product) => (
          <CupcakeCard
            key={product.id}
            cupcake={product}
            handleAddCart={handleAddCart}
          />
        ))}
      </div>
    </div>
  );
};

export default CupcakesList;
