import React from 'react'
import { Link,Outlet } from "react-router-dom";
import App from '../App';
import '../App.css';
import pig from './pig.png'

export default function Home() {
  return (
    <>
    <div class="container homecontainer">
        
        <img src={pig}  alt="pig" />
        <h1 class="heading">See World Blog</h1>

        <div class="nextStep">
    <Link to='blog'>➡</Link>
    </div>
    </div>
   
    
  <Outlet/>
     
    </>
    
  )
}
