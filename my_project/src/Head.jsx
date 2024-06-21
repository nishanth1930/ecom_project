import React, { useContext, useState } from 'react'
import {Link, useNavigate} from "react-router-dom";
import {ContextApi} from "./Provider";
import './style.css'


export default function Head() {

  const { cartCount, setCartCount } = useContext(ContextApi);
  const navigate = useNavigate();


  return (
    <>
     <div className="navbar navbar-expand-lg mt-0 header"> 
  <div className="container-fluid border">
  <img src='images.png' className='image'></img>
  <h1>     
            <font color="#0000CD">𝐒</font>
            <font color="#008080">𝐰</font>
            <font color="#FA8072">𝐢</font>
            <font color="#FFD523">𝐟</font>
            <font color="#71EFA3">𝐭</font>
            <font color="#2F4F4F">𝐂</font>
            <font color="#5F9EA0">𝐚</font>
            <font color="#87CEEB">𝐫</font>
            <font color="#00C1D4">𝐭</font>
        </h1> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
     <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <button  className="nav-link btn btn-outline-primary"  onClick={()=> navigate ("/")} >HOME</button>
        </li>
        <li className="nav-item dropdown">
          <button className="nav-link dropdown-toggle btn btn-outline-primary" role="button"   data-bs-toggle="dropdown" aria-expanded="false" onClick={() => navigate("/product")} >PRODUCT</button>
          {/* <ul className="dropdown-menu">
            <li><button className="dropdown-item" onClick={() => navigate("/menDress")}>Men Dress</button></li>
            <li><button className="dropdown-item" onClick={() => navigate("/Electronices")}>Electronices</button></li>
            <li><button className="dropdown-item" onClick={() => navigate("/Bags")}>Bags</button></li>
          </ul> */}
        </li>
        <li className="nav-item">
          <button className="nav-link btn btn-outline-primary" onClick={()=> navigate ("/About")} >ABOUT ME</button>
        </li>
        <li className="nav-item">
          <button className="nav-link btn btn-outline-primary " onClick={()=>navigate ("/Contact")} >CONCACT </button>
          </li>
      </ul> 
    </div>
      <div className="item_I"> 
      <ul className="navbar-nav">
        <li className="nav-item_I">
          <button className="btn btn-outline-primary" aria-current="page" type="button" onClick={()=> navigate ("/Cart")}> CART {cartCount} </button>
        </li>
        </ul>
      </div>

  </div>
</div>
 
    
    
    
    
    </>
  )
}

