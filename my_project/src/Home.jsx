import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import './style.css'



function Home() {

  const nav = useNavigate();
  
  
  

  return (
<>
    <div id="body">
    <div className="container">
    <h1 className='span1'><span>Sale 60% Off</span>
    <br/>
    </h1>
    <h1 className='span2'><span>On Everything</span></h1>
    </div>
    <div className='p'>
    <p className='paragf'>Discover our exceptional product, meticulously crafted to exceed your expectations.
    Immerse yourself in unparalleled quality, functionality, and style. Elevate your experience with innovation tailored to your needs.
    Welcome to a world where every detail reflects our commitment to your satisfaction. Explore and indulge in excellence. </p>
    <div className="btn-box ">
    <a className='Shop btn btn-danger' onClick={()=> nav ("/product")} >Shop Now</a>
    </div>
    <div className="rounded float-end">
      <img src='/img_01.jpg' alt='img' className="cover"></img>
    </div>
    </div>      
     </div>

</>
    
  )

}

export default Home
