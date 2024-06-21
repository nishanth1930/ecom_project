import React, { useContext, useState } from "react";
import { ContextApi } from "./Provider";

function Cart() {
  const { cartCount, setCartCount, cartData, setCartData, cartId, setCartId,  } = useContext(ContextApi);
  
  const Removecart = (id) => {
    if (cartCount == 0) return false;
    setCartCount(cartCount - 1);
    setCartId(cartId.filter((cid) => id !== cid));
    setCartData((prev) => prev.filter((i) => i.id !== id));
  };  

  const increaseHandle =(id,price) =>{
   const updatedCart = cartData.map((item) => 
    item.id == id 
   ? {...item, totalAmount : item.totalAmount + price , quantity : item.quantity + 1 } 
   : item
  )
  setCartData(updatedCart);
};

  const decreaseHandle =(id,price) =>{
    const updataedCart = cartData.map((item) =>  
      item.id == id 
      ? item.totalAmount > price && item.quantity > 1  
        ? {...item, totalAmount : item.totalAmount - price , quantity : item.quantity - 1}
        : item
      : item
  )
  setCartData(updataedCart);
  }

  const DisplayCartData = () => {
    return cartData.map((item) => (
      <div key={item.id} className="nav justify-content- border border-1 mt-5" >
        <img src={item.img} className="nav-item_cart" alt="..." />
        <div className="card-body">
          <br/>
          <h5 className="nav-item_cart">{item.title}</h5>
          <br />
          <h2 className="nav-item_cart">{item.price}</h2>
          <br/>
          <button className="btn btn-outline-warning"onClick={() => Removecart(item.id)} > Remove to Cart </button>
          <h6 className="nav-item_cart">{item.data}</h6>
          <p>
            <span className="card-title_1">{item.discount}</span> with coupon
          </p>
          <div className="Cart_butn">
            <button className="btn btn-outline-primary" onClick={() => decreaseHandle(item.id,item.price)}>
              <i className="fa fa-minus"></i>
            </button>
            <span className="mx-3">{item.quantity}</span>
            <button className="btn btn-outline-primary" onClick={() => increaseHandle(item.id,item.price)}>
              <i className="fa fa-plus"></i>
            </button>
          </div>
          <h4>totel Amont RS ₹ {item.totalAmount}</h4>
          {console.log("cartData",cartData)}
        </div>
      </div>
    ));
  };

  return (
    <div className="p-5 cart_covering">
      <div className=" gap-5 flex-wrap justify-content-center">
        {DisplayCartData()}
      </div>
      {cartId == [] ? <div className="h1 empty">empty Cart</div> : ""}
    </div>
    
      

  );
}

export default Cart;
