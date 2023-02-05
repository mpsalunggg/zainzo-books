import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import NavbarFacit from "../Components/NavbarFacit";
import SidebarFacit from "../Components/SidebarFacit";
import { getToken } from "../Utils/Common";

const NavbarLayout = ({ children }) => {
  const sidebarRef = useRef(null);
  const location = useLocation();

  return (
    <div className={`w-full flex mb-18`}>
      <SidebarFacit ref={sidebarRef} />
      <div className="mx-4 flex-1 flex flex-col">
        <NavbarFacit onMenuLeftButtonClicked={() => sidebarRef.current.handleSetMinimize(false)} />
        {children}
      </div>
    </div>
  );
};

export default NavbarLayout;
