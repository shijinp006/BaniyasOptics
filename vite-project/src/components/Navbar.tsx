import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.webp";
import serachIcon from "../assets/searchicon.svg";
import cartIcon from "../assets/cart.svg";
import userIcon from "../assets/user.svg";
import { HiOutlineMenu } from "react-icons/hi";
import { menuItems } from "../menuItems/menuItems";
import { Link, useLocation } from "react-router-dom";


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef<HTMLUListElement>(null!);
  const location = useLocation();



  const routeMap: any = {
    Home: "/home",
    Shop: "/shop",
  
  };



  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);


  return (
    <>
      <div className="flex items-center justify-center w-full h-25 flex-wrap bg-[#000000] relative">
        <div className="flex flex-wrap items-center justify-center w-full px-2 mx-auto md:px-6 lg:px-3 max-w-7xl">
          {/* Logo + Right Icons (mobile) + Desktop Menu */}
          <div className="flex flex-wrap items-center justify-between w-full">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:gap-0 ">
              <img
                src={logo}
                alt="Logo"
                className=" w-10 lg:w-23 lg:h-[42px] object-contain"
              />
              <h1 className=" font-[limelight] text-[14px] lg:text-[16px] leading-none text-[#F1F1F1]">
                Baniyas Optics
              </h1>
            </div>

            {/* Mobile Right Icons */}
            <div className="flex items-center gap-4 ml-auto lg:hidden">
              <div className="flex items-center justify-center cursor-pointer">
                <img src={cartIcon} alt="cart Icon" className="w-6" />
              </div>
              <div className="flex items-center justify-center cursor-pointer">
                <img src={userIcon} alt="user Icon" className="w-6" />
              </div>
              <div
                className="cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <HiOutlineMenu className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center justify-center w-full lg:w-[700px] lg:gap-3 flex-wrap h-10">
              <div className="flex items-center justify-between w-[190px] h-10 px-2 rounded-lg bg-[#FFFFFF]">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[140px] h-8 px-2 outline-none"
                />
                <div className="flex items-center justify-center">
                  <img src={serachIcon} alt="search icon" />
                </div>
              </div>

              <ul className="flex flex-wrap gap-6">
                {menuItems.map((item: any) => (
                  <li
                    key={item.id}
                    className={`flex items-center justify-center w-[${item.width}] h-8`}
                    onClick={() => {
                      setMenuOpen(false);


                    }}
                  >

                    <Link
                      to={routeMap[item.text]}
                      onClick={() => {

                      }}
                      className={`gradient-hover-underline text-[16px] leading-[100%] tracking-[0%] align-middle text-[#F3F3F3] font-[montserrat] ${routeMap[item.text] === location.pathname ? "font-bold" : ""
                        }
                        `}
                    >
                      {item.text}
                    </Link>


                  </li>
                ))}
              </ul>

            </div>

            {/* Desktop Icons + Button */}
            <div className="hidden lg:flex items-center justify-around w-[110px] h-8">
              <div className="flex items-center justify-center cursor-pointer">
                <img src={cartIcon} alt="cart Icon" />
              </div>
              <div className="flex items-center justify-center cursor-pointer">
                <img src={userIcon} alt="user Icon" />
              </div>
            </div>

            <button className="hidden lg:flex items-center justify-center w-[165px] h-11 rounded-xl bg-[#00B1C6] cursor-pointer hover:bg-[#019bab] text-[14px] leading-[100%] tracking-[0%] align-middle text-[#F3F3F3] font-[montserrat] font-bold">
              Find Product
            </button>
          </div>
          {/* Mobile Menu with Framer Motion */}
          {menuOpen && (
            <div className="absolute top-0 right-0 flex items-center justify-center w-full h-screen overflow-hidden lg:hidden z-100 border-amber-500">
              <motion.ul
                ref={menuRef}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                className="
        relative
        h-full w-full
        bg-[#000000]
        p-4
        flex flex-col
        items-center  
        py-10
        gap-6
        shadow-lg
        rounded-lg
        overflow-y-auto
      "
              >
                {/* Close Button */}
                <button
                  onClick={() => setMenuOpen(false)}
                  className="absolute top-4 right-4 text-[#F3F3F3] text-2xl"
                >
                  ✕
                </button>

                {menuItems.map((item: any) => (
                  <li
                    key={item.id}
                    className={`text-[#F3F3F3] font-[montserrat] text-xl cursor-pointer text-center ${routeMap[item.text] === location.pathname ? "font-bold" : ""
                      }
                      `}
                    onClick={() => {
                      setMenuOpen(false);

                    }}
                  >
                    <Link
                      to={routeMap[item.text]}
                      onClick={() => {

                      }}
                      className={`gradient-hover-underline text-[16px] leading-[100%] tracking-[0%] align-middle text-[#F3F3F3] font-[montserrat] ${routeMap[item.text] === location.pathname ? "font-bold" : ""
                        }
                        `}
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </motion.ul>
            </div>
          )}



          {/* Bottom Delivery Banner */}
          <div className="hidden lg:flex items-center justify-center w-[237px] h-5 bg-[#282828] mr-14 rounded-sm absolute bottom-0">
            <p className="font-[montserrat] font-normal text-[14px] leading-2.5 text-[#00E5FF]">
              We deliver across the UAE!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
