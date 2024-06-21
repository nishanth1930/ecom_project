import React, {useState} from 'react'
import { createContext } from 'react'

const ContextApi = createContext();

function Provider({children}) {
    
  const [cartCount, setCartCount] = useState(0);
  const [cartData, setCartData] = useState([]);
  const [cartId, setCartId] = useState([]);
  const [data, setData] = useState([]);
    
  return (
  <ContextApi.Provider value={{cartCount, setCartCount,cartData, setCartData, cartId, setCartId, data, setData}}>
        {children}
    </ContextApi.Provider>
  )
}

export {ContextApi, Provider};