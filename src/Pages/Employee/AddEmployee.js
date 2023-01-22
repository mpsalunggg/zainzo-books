import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import AddPersonal from "./addEmployee/AddPersonal";
import AddEmployement from "./addEmployee/AddEmployment";
import AddPayroll from "./addEmployee/AddPayroll";
import AddInvite from "./addEmployee/AddInvite";

function AddEmployee() {
  const [pages, setPages] = useState(1);

  const handleNext = (page) => {
    if (page < 1) {
      setPages(1);
    } else if (page > 4) {
      setPages(4);
    } else {
      setPages(page);
    }
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="py-10 px-10 bg-gray-main h-auto ml-24">
        <div className="container mx-auto h-full drop-shadow-md bg-white rounded-xl p-3 overflow-auto divide-x">
          {
          pages === 1 ? (
            <AddPersonal setDone1={pages == 1 ? 1 : false} />
          ) : pages === 2 ? (
            <AddEmployement setDone2={pages == 2 ? 2 : false} />
          ) : pages === 3 ? (
            <AddPayroll setDone3={pages == 3 ? 3 : false}/>
          ) : 
            <AddInvite />
          }
          <section className="my-8 flex gap-4 justify-end">
            <button
              className="w-24 h-8 border-2 border-gray-500 rounded-full text-sm text-gray-500"
              onClick={() => handleNext(pages - 1)}
            >
              Cancel
            </button>
            <button
              className="w-24 h-8 bg-redColor rounded-full text-sm text-white"
              onClick={() => handleNext(pages + 1)}
            >
              Next
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
