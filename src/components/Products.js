import React from "react";
import HomeReturn from "./HomeReturn";
import products from "../utils";
import OneProduct from "./OneProduct";

const Products = () => {
  return (
    <React.Fragment>
      <div className="container my-2 py-5 border-bottom">
        <h2 className="text-center">
          <i className="bi bi-diagram-3-fill"></i>
        </h2>
        <h1 className="container text-center">List of the products</h1>
        <HomeReturn />
      </div>
      <div className="container">
        <div className="row mb-5 justify-content-center">
          {products.map((product) => (
            <OneProduct key={product.id} product={product} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Products;
