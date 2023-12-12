import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import NavBar from "../Components/Nav Bar/NavBar";
import FooterCopyRight from "../Components/Footer/FooterCopyRight";
import { useState } from "react";

function Base() {
  const [menuStyle, setMenuStyle] = useState(
    "bg-white p-5 col-span-2 hidden lg:flex border-x-2 shadow"
  );

  const menuExpander = () => {
    menuStyle == "bg-white p-5 col-span-2 hidden lg:flex border-x-2 shadow"
      ? setMenuStyle(
          "bg-white w-[100%] absolute pt-5 top-0 h-max shadow-xl rounded z-50"
        )
      : setMenuStyle(
          "bg-white p-5 col-span-2 hidden lg:flex border-x-2 shadow"
        );
  };

  return (
    <div className="lg:grid lg:grid-cols-12 bg-gray-100 min-h-screen">
      <div className={menuStyle}>
        <img
          src="src/assets/x-lg.svg"
          className="absolute top-5 right-5 lg:hidden"
          onClick={menuExpander}
        />
        <Sidebar className="" />
      </div>

      <div className="p-5 col-span-10 bg-gray-100 min-h-screen">
        <div className="flex justify-between ">
          <img
            src="src/assets/hamburger.svg"
            className="lg:hidden"
            onClick={menuExpander}
          />
          <NavBar />
        </div>
        <Outlet />
        <FooterCopyRight />
      </div>
    </div>
  );
}

export default Base;
