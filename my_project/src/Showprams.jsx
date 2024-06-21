// import React, { useState } from 'react'
// import { useParams } from 'react-router-dom'


// function Showprams() {

//     const {name} = useParams();
   
//     const [datas , setDatas] = useState([
//       {
//         img :"img_05.jpg",
//         title :"OnePlus 12R (Iron Gray, 8GB RAM, 128GB Storage)",
//         price : "₹ 20,000",
//         data: "3K+ bought in past month",
//       discount: "Save ₹2,000", 
//       },
//     ]);

//   return (
//     <>
//      <div>{name}</div>
//      <div className='card card_1'>
//       {datas.map((item,index)=> (
//         <div key={index} className='row g-0 '>
//           <div className="col-md-3">
//           <img src={item.img} className="img-fluid rounded-start" alt="..."/>
//           </div>
//           <div className="col-md-9">
//       <div className="card-body">
//         <h5 className="card-title">{item.title}</h5>
//         <p className="card-text">{item.price}</p>
//         <p><span className='card-title_1'>{item.discount}</span> with coupon </p>
//       </div>
//     </div>
//   </div>

//       ) )}
     
//       </div>
    
      
//     </>
//   )
// }

// export default Showprams