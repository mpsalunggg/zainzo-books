import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import { getToken } from "./Utils/Common";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Routing from "./Router/Routing";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* {location && <Navbar />} */}
        <Navbar />
        {/* <h1>{currentloc}</h1> */}
        <Routing />
      </BrowserRouter>
    </>
  );
}

export default App;
