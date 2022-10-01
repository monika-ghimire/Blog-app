import React from 'react'
import SingelVlog from './SingelVlog';
import {
    BrowserRouter,
    Route,
    Routes
  } from "react-router-dom";
import App from '../App';
  
  
export default function RouterHolder() {
  
  return (
   <>
       <BrowserRouter>
    <Routes>
    <Route path="/test" element={<App/>}>
    </Route>
   <Route path='/test/blog-id' element={<SingelVlog/>}>
     
   </Route>
    </Routes>
  </BrowserRouter>
    

   </>
  )
}
