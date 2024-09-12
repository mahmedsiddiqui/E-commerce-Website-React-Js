import React from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css'
import logo from './LOGO2.png'
const Products = () => {
  return (
    <>
    <h1>Product Page</h1>
    <nav>
    <div>
    <img src={logo} alt="" />
      
    </div>
    <div>
        <ul>

            <li><Link style={{textDecoration:"none",color:"black",fontSize:"20px",fontWeight:"bolder"}}  to="/" >Home</Link></li>
            <li><Link style={{textDecoration:"none",color:"black",fontSize:"20px",fontWeight:"bolder"}}  to="/About" >About Page</Link></li>
            <li><Link style={{textDecoration:"none",color:"black",fontSize:"20px",fontWeight:"bolder"}} to="/Products" >Products</Link></li>
            
           
        </ul>
    </div>
    <div>
        <button>Sign up</button>

        </div>
  </nav>
    </>
  )
}

export default Products
