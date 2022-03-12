import React,{useEffect,useState} from "react";
import { useParams,useNavigate } from "react-router-dom";
import products from "../utils" ;

const Sheet = () => {
  const navigate=useNavigate() ;
  const params = useParams();
  const [selected,setSelected]=useState({}) ;
  const id=params.id ;
 const selectProduct=()=>{
     setSelected((products.find(item=>item.id==id))) ;
 }
 useEffect(()=>{
    selectProduct() ;
 },[])

  return (
    <div className="container py-5">
      <div className="card mb-3 mx-auto my-5" style={{maxWidth:"550px"}}>
        <div className="row g-0">
          <div className="col-md-6">
            <img src={selected.thumbnail} className="img-fluid" alt="..." style={{height:"100%"}} />
          </div>
          <div className="col-md-6">
            <div className="card-body bg-secondary text-light">
              <h5 className="card-title">{selected.title}</h5>
              <h6>Brand:    <span className="text-light">{selected.brand}</span></h6>
              <p className="card-text">
               {selected.description}
              </p>
              <h6>Price    <span className="text-light">{selected.price}</span></h6>
              <h6>Discount Percentage:    <span className="text-light">{selected.discountPercentage}</span></h6>
              <h6>Stock <span className="text-light">{selected.stock}</span></h6>
              <p className="card-text">
                <small className="text-light">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 text-center">
        <button className="btn btn-danger" onClick={()=>navigate('/products')}>Back to products</button>
      </div>
    </div>
  );
};

export default Sheet;
