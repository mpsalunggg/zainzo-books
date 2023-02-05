import React, { useEffect, useState } from "react";
import fotoprofil from "../../Assets/fotoprofil.svg";
import editicon from "../../Assets/editicon.svg";
import Personal from "./general/Personal";
import Employment from "./general/Employment";
import arrowIcon from "../../Assets/arrow-right.svg";
import userIcon from "../../Assets/user.svg";
import clockIcon from "../../Assets/clock.svg";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getToken } from "../../Utils/Common";
import UserPhoto from "../../Assets/userphoto.svg";

function DetailEmployee() {
  const [switchMenuIndex, setSwitchMenuIndex] = useState(0);
  const [menuOpenIndex, setMenuOpenIndex] = useState(-1);

  const { id } = useParams();
  const [datalist, setData] = useState([]);

  useEffect(() => {
    console.log(id);
    axios
      .get(`http://people.api.zainzo.com/api/admin/employee/personal/${id}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => {
        setData(res.data.data[0]);
      })
      .catch((err) => console.log(err.message));
  }, [id]);

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
      icon: userIcon,
      menuOpen: false,
    },
    { title: "Attendance", has_submenu: true, submenu: [], icon: clockIcon, menuOpen: false },
  ]);

  const CompPersonal = () => {
    return <Personal id={id} />;
  };
  const CompEmployment = () => {
    return <Employment id={id} />;
  };

  const [subMenuView, setSubMenuView] = useState([{ view: () => CompPersonal }, { view: () => CompEmployment }]);
  const [ViewNow, setViewNow] = useState(() => CompPersonal);

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
    <div className="flex flex-col">
      <div className="py-10 px-8 bg-white min-h-screen">
        {/* all container */}
        <div className="container mx-auto h-auto drop-shadow-xl bg-white rounded-xl p-3 overflow-auto flex flex-row divide-x pb-12">
          {/* sidebar kiri */}
          <div className="flex flex-col items-center">
            {/* profil */}
            <div className="max-w-prose flex-none p-8 grid">
              <img src={UserPhoto} alt="profil" className="w-20 mx-auto" />
              <img src={editicon} alt="edit" className="absolute left-36 top-26 " />
              {/* <div className="text-center font-semibold whitespace-normal mt-2">Muhammad Zaky Iqbal Ramadhan</div> */}
              <div className="text-center font-bold whitespace-normal text-lg mt-6">{datalist.employee_fullname}</div>
            </div>

            {/* menu list */}
            <div className="flex-auto py-4 pl-4 self-start w-56">
              <ul>
                {listMenu.map((item, index) => {
                  return (
                    <div key={index} className={`flex flex-col cursor-pointer text-sm `}>
                      <li
                        key={index}
                        className={`font-medium flex-col cursor-pointer`}
                        onClick={() => {
                          OpenMenu(index);
                        }}
                      >
                        <span className="flex font-medium gap-x-2 items-center">
                          <span className="">
                            <img src={item.icon} alt="menuicon" />
                          </span>
                          <span className="flex-1">{item.title} </span>
                          {item.has_submenu && <img src={arrowIcon} alt="open menu" className={` mt-1 mr-2 ${item.menuOpen ? "rotate-90 duration-200" : ""}`} />}
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
          {/* component kanan */}
          <div className="">
            {/* <div className="w-full"> */}
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
    </div>
  );
}

export default DetailEmployee;
