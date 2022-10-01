import React from 'react'
import '../App.css';
import BlogContaent from './BlogContaent';
import {useSelector } from "react-redux";
import {
  SelectvlogSlice
  } from "../reduxStore/reducer/vlogSlicer";
  
export default function BlogHome() {
    const vlogSlice = useSelector(SelectvlogSlice);
    console.log(vlogSlice +" this is selector")
  return (
<>
<div className="container">
<div className='BlogForm'>
   <BlogContaent/>
   </div>
   <h2 > See world daily blog</h2> 
   {vlogSlice.map((x)=>{
 <div className="row listOfBlog ms-1 ">
   
     <div className="col">
        <h3>Title:{x.title}</h3>
        <p>Authorised:{x.name}</p>
        <p> Date: {x.date}</p>
        <p>Blog: {x.Blog}</p>
     
     </div>
     </div>
 
  })}
   

 

</div>


</> 
 )
}
