import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'; 
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import {auth} from '../../firebase-config'; 
const Navbar = ({setIsAuth, isAuth}) => {
    const navigate = useNavigate(); 

    const signUserOut = () => {
        signOut(auth).then(()=> {
          localStorage.clear(); 
          setIsAuth(false); 
          navigate("/login");
        })
      }
  return (
    <nav>
      <Link to="/">Home</Link>
     {!isAuth ? <Link to="/login">Login</Link> : <button className="logoutbtn" onClick={signUserOut}>Logout</button>}
      <Link to="/createPost">Create Post</Link>
    </nav>
  );
};

export default Navbar;
