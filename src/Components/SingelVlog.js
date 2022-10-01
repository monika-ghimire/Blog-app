
import {useSelector } from "react-redux";
import React, { useState ,useEffect} from 'react';
import {
    SelectSinglevlogSlice
    } from "../reduxStore/reducer/vlogSlicer";


export default function SingelVlog() {
    const x = useSelector(SelectSinglevlogSlice)
    const [singleBlogs, setSingleBlogs] = useState({});
    useEffect(() => {
        setSingleBlogs(x) 
      console.log(singleBlogs)
     },[]);
     console.log("somt")
     console.log(singleBlogs )

  return (
   <>
<h1>Hwlle</h1>
<div className="row listOfBlog ms-1 ">
 
     <div className="col-6">
   <div class="card">
<h3>
  Title:{singleBlogs.href}</h3>
  <p> Date: {singleBlogs.date}</p>
  <p>Author by:{singleBlogs.name}</p>
  <div class="card-body">
  <p>Blog: {singleBlogs.Blog}</p>
 
  </div>
  </div>
     </div>
          
     </div>

   </>
  )
}
