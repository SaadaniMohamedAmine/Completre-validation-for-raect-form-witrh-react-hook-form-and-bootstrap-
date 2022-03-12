import React,{useContext} from 'react' ;
import {Navigate} from 'react-router-dom' ;
import AuthContext from '../hooks/authContext';
import Profile from '../components/Profile';

const PrivateRoute = () => {
    const authContext=useContext(AuthContext)  ;
 return authContext.status? <Profile />:<Navigate to="/login" /> ;
}

export default PrivateRoute ;