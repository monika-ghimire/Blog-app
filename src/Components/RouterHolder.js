import React from "react";
import SingelVlog from "./SingelVlog";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Home from "../Page/Home";

export default function RouterHolder() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}>  
            <Route path="blog" element={<App/>}>
              <Route path=":blogId" element={<SingelVlog />} />
            </Route>
            </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
{
  /* <Route path="/app" element={<App/>}>
    </Route> */
}
{
  /*    
   <Route path='/app/blog-id' element={<SingelVlog/>}></Route> */
}
