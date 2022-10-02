import React, { useState ,useEffect} from 'react';
import '../App.css';
import pig from '../Page/pig.png'
import BlogContaent from './BlogContaent';
import { Link } from "react-router-dom";
import {useSelector } from "react-redux";
import {
  SelectvlogSlice
  } from "../reduxStore/reducer/vlogSlicer";
  
export default function BlogHome() {
    const vlogSlice = useSelector(SelectvlogSlice);
   
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
      setBlogs(vlogSlice) 
      console.log("hihihi")

      console.log(vlogSlice);
     },[]);
 
  return (
<>
<div className="container">
<div className='BlogForm'>
   <BlogContaent/>
   </div>
   <h2 > See world daily blog</h2> 
   
 <div className="row listOfBlog ms-1 ">
 {vlogSlice.map((x)=>{
     return (
     <div className="col-4">
   <div class="card">
<h3>
<img src={pig} class="card-img-top" alt="..."/>
  <Link to={x.href}>Title:{x.href}</Link></h3>
  <p> Date: {x.date}</p>
  <p>Author by:{x.name}</p>
  <div class="card-body">
  <p>Blog: {x.Blog}</p>
 
  </div>
  </div>
     </div>
          );
        })}
     </div>

   

 

</div>


</> 
 )
}
