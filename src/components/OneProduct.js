import React from "react";
import "../App.css" ;
import {Link} from "react-router-dom" ;

const OneProduct = ( {product}) => {
  return (
    <React.Fragment>
      <div className="col col-lg-3 col-md-4 col-sm-6 col-xs-12 p-3 mx-auto">
      <div className="card" style={{width:"15rem"}}>
        <img src={product.images[0]} className="img-fluid card-image" style={{height:"200px"}} alt="my-pic" />
        <div className="card-body bg-dark text-light">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">
           {product.description.substring(0,45)} ...
          </p>
          <Link to={`/products/${product.id}`} className="btn btn-secondary">
           Check
          </Link>
        </div>
      </div>
    </div>
   
    </React.Fragment>
    
  );
};

export default OneProduct;
