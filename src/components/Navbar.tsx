import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/react";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const [mobileMenu, setMobileMenu] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <>
      <div className="fixed z-50 w-full backdrop-blur-2xl flex justify-between items-center py-4 px-4 sm:px-10 xl:px-16">
        <img
          src={Logo}
          alt=" Logo"
          className="w-32 sm:w-44 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <ul className="hidden md:flex items-center gap-8 text-white">
          {navLinks.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative py-2 transition-colors duration-300 ${
                    isActive ? "text-secondary" : "hover:text-secondary"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}

                    <span
                      className={`absolute left-0 bottom-0 h-[2px] bg-secondary rounded-full transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={(e) => openSignIn()}
            className="hidden md:flex items-center gap-2 rounded-full text-sm md:text-base cursor-pointer bg-secondary text-black hover:bg-accent hover:scale-110 px-6 py-2.5 transition-all duration-200"
          >
            Get Started
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        )}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenu(true)}
        >
          <Menu size={28} />
        </button>
      </div>
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-primary backdrop-blur-xl z-[60] transform transition-transform duration-300 md:hidden ${
          mobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-5">
          <button onClick={() => setMobileMenu(false)}>
            <X size={28} className="text-white" />
          </button>
        </div>

        {/* Mobile Links */}
        <ul className="flex flex-col gap-8 px-8 py-4 text-white">
          {navLinks.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                onClick={() => setMobileMenu(false)}
                className={({ isActive }) =>
                  `text-lg transition-colors duration-300 ${
                    isActive
                      ? "text-secondary font-semibold"
                      : "hover:text-secondary"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}

          {/* Mobile Get Started */}
          {!user && (
            <button
              onClick={() => {
                setMobileMenu(false);
                openSignIn();
              }}
              className="flex items-center justify-center gap-2 rounded-full bg-secondary text-black py-3 mt-4 font-medium"
            >
              Get Started
              <ArrowRight size={18} />
            </button>
          )}
        </ul>
      </div>
      {mobileMenu && (
        <div
          className="fixed inset-0 bg-black/50 z-50 md:hidden"
          onClick={() => setMobileMenu(false)}
        />
      )}
    </>
  );
};

export default Navbar;
