import React from "react";
import { Route,Routes } from "react-router-dom";
import Contact from '../page/contact'
const Navigator=()=>{
<Routes>
<Route path="/contact" element={<><Contact/></>} />
</Routes>
}
export default Navigator