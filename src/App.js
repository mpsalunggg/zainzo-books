import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import { getToken } from "./Utils/Common";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Routing from "./Router/Routing";
import NavbarLayout from "./layout/NavbarLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen min-w-screen bg-white dark:bg-soft-dark  ">
          <NavbarLayout>
            <div className="overflow-auto dark:text-white">
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tempore commodi numquam nisi ipsam nulla consequatur nemo voluptas totam ad excepturi repudiandae inventore nesciunt ut odit labore velit, est eum, cum nam.
              Doloremque voluptas maiores, impedit ipsam quae sapiente dolorum veritatis cupiditate ea provident, ipsa numquam? Sit nihil veritatis consequuntur veniam nulla velit adipisci debitis odio eos quod maxime repellendus, facere,
              harum reprehenderit totam, sunt ea necessitatibus placeat. Minima molestiae mollitia, tempora, similique animi, architecto perspiciatis ab quasi sequi temporibus voluptate tempore pariatur quisquam! Delectus, veritatis vitae
              quo voluptates eveniet quidem, natus perspiciatis quis unde nostrum, veniam blanditiis aliquam exercitationem. */}
              <Routing />
            </div>
          </NavbarLayout>
        </div>
        {/* <Navbar /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
