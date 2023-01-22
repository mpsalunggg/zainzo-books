import React, { useState } from "react";
import fotoprofil from "../../Assets/fotoprofil.svg";
import editicon from "../../Assets/editicon.svg";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { RiUserLine } from "react-icons/ri";
import Personal from "./general/Personal";
import Employment from "./general/Employment";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";

function DetailEmployee() {
  const [switchMenuIndex, setSwitchMenuIndex] = useState(0);
  const [menuOpenIndex, setMenuOpenIndex] = useState(-1);
  const [listMenu, setListMenu] = useState([
    {
      title: "General",
      has_submenu: true,
      submenu: [
        { title: "Personal", viewIndex: 0 },
        { title: "Employment", viewIndex: 1 },
        { title: "Education and Experience", viewIndex: 2 },
        { title: "Additional Info", viewIndex: 3 },
      ],
      icon: RiUserLine,
      menuOpen: false,
    },
    { title: "Attendance", has_submenu: true, submenu: [], icon: AiOutlineClockCircle, menuOpen: false },
  ]);
  const [subMenuView, setSubMenuView] = useState([{ view: () => Personal }, { view: () => Employment }]);
  const [ViewNow, setViewNow] = useState(() => Personal);

  const OpenMenu = (index) => {
    const newArr = listMenu;
    newArr[index].menuOpen = !newArr[index].menuOpen;
    menuOpenIndex !== index ? setMenuOpenIndex(index) : setMenuOpenIndex(-1);
    setListMenu(newArr);
  };

  const showPage = (viewIndex) => {
    setViewNow(subMenuView[viewIndex].view);
    setSwitchMenuIndex(viewIndex);
    console.log(viewIndex);
  };

  return (
    <>
      <Navbar />
      {/* <Sidebar /> */}
      <div className="ml-24 py-10 px-8 bg-gray-main min-h-screen">
        <div className="container mx-auto h-screen drop-shadow-md bg-white rounded-xl p-3 overflow-auto flex flex-row divide-x">
          <div className="w-60 min-w-60 flex flex-col items-center">
            <div className="max-w-prose flex-none p-8 grid ">
              <img src={fotoprofil} alt="profil" className="mx-auto" />
              <img src={editicon} alt="edit" className="absolute left-36 top-26 " />
              {/* <div className="text-center font-semibold whitespace-normal mt-2">Muhammad Zaky Iqbal Ramadhan</div> */}
              <div className="text-center font-bold whitespace-normal text-lg mt-6">Margaret Febiola</div>
            </div>
            <div className="flex-auto py-4 pl-4 self-start w-56">
              <ul>
                {listMenu.map((item, index) => {
                  return (
                    <div className={`flex flex-col cursor-pointer text-sm `}>
                      <li
                        key={index}
                        className={`font-medium flex-col cursor-pointer`}
                        onClick={() => {
                          OpenMenu(index);
                        }}
                      >
                        <span className="flex font-medium gap-x-2 items-center">
                          <span className="">
                            <item.icon color="gray" />
                          </span>
                          <span className="flex-1">{item.title} </span>
                          {item.has_submenu && <IoIosArrowForward color="#717171" className={` mt-1 mr-2 ${item.menuOpen ? "rotate-90 duration-200" : ""}`} />}
                        </span>
                      </li>
                      <span className="whitespace-nowrap my-2">
                        {item.has_submenu && item.menuOpen ? (
                          <ul className="font-extralight">
                            {item.submenu.map((submenu, indexSub) => {
                              return (
                                <li
                                  className={`pl-6
                                hover:text-red-main font-thin ${switchMenuIndex === indexSub ? "text-red-main" : "text-gray-disabledText"}`}
                                  key={indexSub}
                                  onClick={() => {
                                    showPage(submenu.viewIndex);
                                  }}
                                >
                                  {submenu.title}
                                </li>
                              );
                            })}
                          </ul>
                        ) : (
                          ""
                        )}
                      </span>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="">
            <ViewNow />
            {/* <button
              onClick={() => {
              }}
            >
              press
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailEmployee;
