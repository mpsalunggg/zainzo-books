/* eslint-disable no-unused-vars */

// Components
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import zainzoWhiteLogo from "../../Assets/facitIcons/white-logo.svg";
import dashboardIcon from "../../Assets/facitIcons/home-03.svg";
import employeeIcon from "../../Assets/facitIcons/users-01.svg";
import attendanceIcon from "../../Assets/facitIcons/calendar-check-01.svg";
import companyIcon from "../../Assets/facitIcons/building-05.svg";
import logoutIcon from "../../Assets/facitIcons/log-out-01.svg";
import sidebarToggle from "../../Assets/facitIcons/sidebar-toggle.svg";
import { TbArrowBarToLeft, TbArrowBarToRight } from "react-icons/tb";
import PersonDummyImage from "../../assetsfacit/img/person-dummy.jpg";
import { removeUserSession } from "../../Utils/Common";
import { getToken } from "../../Utils/Common";
import { useLocation, useNavigate } from "react-router-dom";

export const SidebarFacit = forwardRef((props, ref) => {
  const [minimize, setMinimize] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    removeUserSession();
    navigate("/");
  };

  useImperativeHandle(ref, () => ({
    handleSetMinimize(state) {
      setMinimize(state);
    },
  }));

  useEffect(() => {
    if (!minimize) {
      window.document.body.classList.add("overflow-hidden", "lg:overflow-auto");
      return;
    }

    window.document.body.classList.remove("overflow-hidden", "lg:overflow-auto");
  }, [minimize]);

  const handleSetMinimize = (state) => {
    setMinimize(state);
  };

  return (
    <>
      <div className={`hidden bg-transparet lg:block lg:p-4 pr-0 transition-all ${minimize ? "w-20" : "w-[212px]"}`}></div>
      <aside className={`group fixed top-0 bottom-0 left-0 lg:p-4 lg:pr-0 z-[101] h-screen transition-all ${minimize ? "-left-full lg:left-0 w-20 " : "w-[212px]"} ${!getToken() || location.pathname === "/onboarding" ? "hidden" : "flex"}`}>
        {/* <aside className={`group float float-left top-0 bottom-0 left-0 lg:p-4 lg:pr-0 z-[101] h-screen transition-all ${minimize ? "-left-full lg:left-0 w-20 " : "w-[212px]"}`}> */}
        <div className={`absolute top-0 left-0 w-screen h-screen lg:hidden bg-black/20 backdrop-blur-sm ${minimize ? "hidden" : ""}`}></div>
        <div
          className={`relative h-full w-full bg-red-main dark:bg-dark-1 text-white lg:rounded-xl z-[100] flex flex-col overflow-hidden transition-all ${
            minimize ? "items-center group-hover:items-start group-hover:bg-red-main group-hover:backdrop-blur-sm dark:group-hover:bg-dark-1/50" : ""
          }`}
        >
          {/* Header */}
          <div className={`w-full mb-2 p-3 flex gap-4 items-center ${minimize ? "justify-center" : "justify-between"}`}>
            <img src={zainzoWhiteLogo} className={` ${minimize && "hidden"}`} alt="logo" />
            {/* <div className={`h-8 w-1/2 cursor-pointer ${minimize ? "hidden" : ""}`}></div> */}
            <button className="rounded-full p-3 hover:bg-hover-sidebar flex items-center justify-center cursor-pointer" onClick={() => handleSetMinimize(!minimize)}>
              {/* {minimize ? <TbArrowBarToRight size={24} /> : <TbArrowBarToLeft size={24} />} */}
              <img src={sidebarToggle} alt="toggle-sidebar" className={` ${minimize && "rotate-180 duration-100"} w-4 h-4`} />
            </button>
          </div>
          {/* Menu */}
          <ScrollableContainer>
            <MenuListContainer>
              {/* <MenuHeader>Menu 3</MenuHeader> */}
              <MenuButton icon={dashboardIcon} text={"Dashboard"} iconOnly={minimize} onClick={() => navigate("/dashboard")} />
              <MenuButton icon={employeeIcon} text={"Employee"} iconOnly={minimize} onClick={() => navigate("/employees")} />
              <MenuButton icon={attendanceIcon} text={"Attendance"} iconOnly={minimize} />
            </MenuListContainer>
            <MenuLineDivider className="my-3" />
            <MenuListContainer>
              {/* <MenuHeader>Menu 3</MenuHeader> */}
              <MenuButton icon={companyIcon} text={"Company"} iconOnly={minimize} />
            </MenuListContainer>
          </ScrollableContainer>
          {/* Footer */}
          <MenuLineDivider />
          <div className={`w-full p-3 px-3 bg-red-main dark:bg-dark-1/70 flex ${minimize ? "justify-center" : ""} items-center cursor-pointer hover:bg-hover-sidebar`} onClick={() => handleLogout()}>
            <div className={` ${minimize ? "" : "mr-3"} rounded-full flex items-center justify-center overflow-hidden`}>
              <img src={logoutIcon} alt="Person" className="w-5 h-5" />
            </div>
            <div className={`flex flex-col justify-center gap-1 ${minimize ? "hidden" : ""}`}>
              <h6 className="text-xs leading-none">Logout</h6>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
});

const MenuLineDivider = ({ className = "" }) => {
  return <hr className={` border-t-2 border-border-red w-full ${className}`} />;
};

const ScrollableContainer = ({ children, className = "" }) => {
  return <div className={`overflow-y-scroll scrollbar-hide w-full h-screen px-3 ${className}`}>{children}</div>;
};

const MenuListContainer = ({ children }) => {
  return <div className="flex flex-col gap-2 ">{children}</div>;
};

const MenuHeader = ({ children }) => {
  return <h6 className="text-xs font-semibold text-[rgba(248,249,250,.6)] px-3">{children}</h6>;
};

const MenuButton = ({ icon, text, iconOnly = false, onClick }) => {
  return (
    <>
      <button className={`relative ${iconOnly ? "justify-center group-hover:aspect-auto rounded-xl py-3" : " rounded-2xl p-3"}  hover:bg-hover-sidebar text-start flex gap-3 items-center transition-all`} onClick={onClick}>
        <img src={icon} alt="menuicon" className={`w-5 h-5`} />
        <span className={`${iconOnly ? "hidden" : ""} text-xs text-ellipsis overflow-hidden whitespace-nowrap`}>{text}</span>
      </button>
    </>
  );
};

export default SidebarFacit;
