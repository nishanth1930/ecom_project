
import "./style.css";
import React, { useState, useContext, useEffect } from "react";
import {ContextApi} from "./Provider";

function Product() {
  const productData = [
    {
      id:"1",
      img: "img_23.jpg",
      title: "iQOO Z9 5G (Graphene Blue, 8GB RAM, 128GB Storage) | Dimensity 7200 5G Processor | Sony IMX882 OIS Camera | 120Hz AMOLED with 1800  ",
      price: 20000,
      cart: "Add to cart",
      data: "3K+ bought in past month",
      discount: "Save ₹2,000",
      totalAmount:20000,
      quantity:1
    },
    {
      id:"2",
      img: "img_06.jpg",
      title: "Redmi Note 13 Pro+ (Fusion Purple, 8GB RAM, 256GB Storage) World's First Mediatek 7200 Ultra 5G | 200MP Hi-Res Camera  ",
      price: 30000,
      data: "4K+ bought in past month",
      discount: "Save ₹3,000",
      totalAmount: 30000,
      quantity:1
    },
    {
      id:"3",
      img: "img_07.jpg",
      title: " Redmi Note 13 Pro+ (black, 8GB RAM, 256GB Storage) World's First Mediatek 7200 Ultra 5G | 200MP Hi-Res Camera ",
      price: 23000,
      data: "3K+ bought in past month",
      discount: "Save ₹2,000",
      totalAmount:23000,
      quantity:1
    },
    {
      id:"4",
      img: "img_08.jpg",
      title: "Redmi 13C (Starshine Green, 4GB RAM, 128GB Storage) | Powered by 4G MediaTek Helio G85 | 90Hz Display | 50MP AI Triple Camera",
      price: 20000,
      data: "4K+ bought in past month",
      discount: "Save ₹2,000",
      totalAmount:20000,
      quantity:1
    },
    {
      id:"5",
      img: "img_09.jpg",
      title: "HONOR X9b 5G (Sunrise Orange, 8GB + 256GB) | India's First Ultra-Bounce Anti-Drop Curved AMOLED Display | 5800mAh Battery | 108MP Primary Camera | Without Charger",
      price:  20000,
      data: "1K+ bought in past month",
      discount: "Save ₹2,000",
      totalAmount:20000,
      quantity:1
    },
    {
      id:"6",
      img: "img_10.jpg",
      title: "iQOO Neo9 Pro 5G (Fiery Red, 12GB RAM, 256GB Storage)|Snapdragon 8 Gen 2 Processor|Supercomputing",
      price:  40000,
      data: "10K+ bought in past month",
      discount: "Save ₹2,000",
      totalAmount:40000,
      quantity:1
    },
    {
      id:"7",
      img: "img_11.jpg",
      title: " Oppo F25 Pro 5G (Ocean Blue, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
      price: 25000,
      data: "7K+ bought in past month",
      discount: "Save ₹2,000",
      totalAmount:25000,
      quantity:1
    },
    {
      id:"8",
      img: "img_12.jpg",
      title: "OnePlus Nord CE 3 5G (Aqua Surge, 8GB RAM, 128GB Storage)  Without Charger | Exchange Offers",
      price: 20000,
      data: "1K+ bought in past month",
      discount: "Save ₹2,000",
      totalAmount:20000,
      quantity:1
    },
    {
      id:"9",
      img: "img_13.jpg",
      title: "Redmi Note 13 Pro (Arctic White, 8GB RAM, 128GB Storage) | 1.5K AMOLED | 200MP Hi-Res Camera ",
      price:  25000,
      data: "5K+ bought in past month",
      discount: "Save ₹4,000",
      totalAmount:25000,
      quantity:1
    },
    {
      id:"10",
      img: "img_14.jpg",
      title: "realme GT 6T 5G (Razor Green,8GB RAM+256GB Storage) | India's 1st 7+ Gen 3 Flagship Chipset | 1.5M + AnTuTu Score | 5500mAh",
      price:  35000,
      data: "1K+ bought in past month",
      discount: "Save ₹4,000",
      totalAmount:35000,
      quantity:1
    },
    {
      id:"11",
      img: "img_15.jpg",
      title: "Vivo V30 Pro 5G Smartphone (Andaman Blue, 8GB RAM, 256GB Storage)|MediaTek Dimensity 8200 5G Processor, crafted with TSMC's industry-leading 4 nm process. With a 3.1 GHz..",
      price: 30000,
      data: "2K+ bought in past month",
      discount: "Save ₹3,000",
      totalAmount:30000,
      quantity:1
    },
    {
      id:"12",
      img: "img_16.jpg",
      title: "iQOO Neo 7 Pro 5G (Fearless Flame, 8Gb Ram, 128Gb Storage) | Snapdragon 8+ Gen 1 | Independent Gaming Chip | Flagship 50Mp Ois Camera | Premium Leather Design, Orange",
      price:  45000,
      data: "2K+ bought in past month",
      discount: "Save ₹2,000",
      totalAmount:45000,
      quantity:1
    },
    {
      id:"13",
      img: "img_18.jpg",
      title: "Samsung Galaxy M14 5G (ICY Silver,6GB,128GB) | 50MP+2MP+2MP Triple camera setup- True 50MP (F1.8) main camera + 2MP (F2.4) + 2MP (F2.4)| 13MP ",
      price:  22000,
      data: "10K+ bought in past month",
      discount: "Save ₹5,000",
      totalAmount:22000,
      quantity:1
    },
    {
      id:"14",
      img: "img_20.jpg",
      title: "Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Black, 12GB, 256GB Storage)|Meet Galaxy S24 Ultra, the ultimate form of Galaxy Ultra with a new titanium exterior and a 17.25cm |use your S Pen or finger to circle something and get Google Search... ",
      price:  120000,
      data: "5K+ bought in past month",
      discount: "Save ₹4,000",
      totalAmount:120000,
      quantity:1
    },
    {
      id:"15",
      img: "img_22.jpg",
      title: "Xiaomi 14 (White, 12GB RAM, 512GB Storage) | 50MP Leica Professional Optics | 120 Hz 1.5K LTPO AMOLED | SD 8 Gen 3 Hyper OS|The 6.36 inch 1.5K 120Hz LTPO AMOLED display with a peak  ",
      price: 30000,
      data: "5K+ bought in past month",
      discount: "Save ₹6,000",
      totalAmount:30000,
      quantity:1
    },
  ]

  const { cartCount, setCartCount, cartData, setCartData, cartId, setCartId, data, setData } = useContext(ContextApi);

  
  useEffect(() => {   
    setData(productData);
  }, []);


const Addcart = (id) => {
  if(cartCount < 0 )return false;
  setCartCount(cartCount + 1)
  const upadatedData = data.filter((i)=> i.id == id);
  setCartData(arr=> [...arr, ...upadatedData]);
  setCartId((arr)=> [...arr, id]);
};
const Removecart = (id) => {
  if(cartCount == 0 ) return false;
  setCartCount(cartCount - 1)
  setCartId(cartId.filter((cid)=> id !== cid));
  setCartData(prev => prev.filter((i)=> i.id !== id));
  console.log(id, "id")
};

  return (
    <>
      <div className="img-fluid ">
        <img src="/img_03.jpg" alt="image"></img>
      </div>
      <div className="d-flex gap-5 flex-wrap justify-content-center">   
      {/* {  console.log("cartid",cartId )} */}

          {data.map((item, index) => (
            <div key={item.id} className="card"> 
              <img src={item.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title" >{item.title}</h5>
                
                <h2 className="card-text" >{item.price}</h2>

                {
                  !cartId.includes(item.id)
                    ? <button onClick={() =>Addcart(item.id)}  className="btn btn-outline-warning">Add to Cart</button>
                    : <button onClick={() =>Removecart(item.id)} className="btn btn-danger">Remove to Cart</button>
                }
                <h6 className="card-title">{item.data}</h6>
                <p>
                  <span className="card-title_1">{item.discount}</span> with
                  coupon
                </p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Product;
