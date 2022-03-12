import React from 'react' ;
import {useNavigate} from 'react-router-dom' ;
import '../App.css' ;

const HomeReturn = () => {
    const navigate=useNavigate() ;
    const returnHome =()=>{
      navigate('/') ;
    }
  return (
    <button className='btn btn-primary  ret' onClick={returnHome}><i className="bi bi-house-door"></i></button>
  )
}

export default HomeReturn