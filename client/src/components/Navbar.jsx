import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const windowname = window.location.pathname;
  return (
    <div className="flex absolute flex-row justify-between top-0 left-0 right-0 pt-16 px-32 text-4xl bg-gradient-to-b from-black/80 to-transparent text-white z-10">
      <div
        className="font-semibold cursor-pointer"
        onClick={() => navigate("/")}
      >
        ActiveEye
      </div>
      <div className="flex flex-row gap-6 font-light">
        <div
          className={`${
            windowname === "/" ? "font-semibold" : ""
          } text-2xl cursor-pointer hover:font-semibold px-2`}
          onClick={() => navigate("/")}
        >
          Home
        </div>
        <div
          className={`${
            windowname === "/about" ? "font-semibold" : ""
          } text-2xl cursor-pointer hover:font-semibold px-2`}
          onClick={() => navigate("/about")}
        >
          About
        </div>
      </div>
    </div>
  );
};

export default Navbar;
