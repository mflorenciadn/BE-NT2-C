import React from "react";
import CupcakeCard from "../CupcakeCard/CupcakeCard";
import "./CupcakesList.css";

const CupcakesList = ({ products }) => (
  <div className="CupcakesList-Container">
    <h2 className="CupcakesList-Title">
      ¿Con qué sabor te vas a deleitar hoy?
    </h2>
    <div className="CupcakesList-Grid">
      {products.map((product) => (
        <CupcakeCard key={product.id} cupcake={product} />
      ))}
    </div>
  </div>
);

export default CupcakesList;
