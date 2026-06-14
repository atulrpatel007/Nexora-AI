import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { X, Menu } from "lucide-react";
import Logo from "../assets/logo.png";
import Sidebar from "../components/Sidebar";
import { SignIn, useUser } from "@clerk/react";

const Layout = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);

  return user ? (
    <div className="hero-bg min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full px-4 sm:px-8 py-4 border-b border-accent hero-bg flex items-center justify-between">
        <img
          src={Logo}
          alt="logo"
          className="w-32 sm:w-44 cursor-pointer"
          onClick={() => navigate("/")}
        />

        {sidebar ? (
          <X
            className="cursor-pointer text-white w-6 h-6 sm:hidden"
            onClick={() => setSidebar(false)}
          />
        ) : (
          <Menu
            className="cursor-pointer text-white w-6 h-6 sm:hidden"
            onClick={() => setSidebar(true)}
          />
        )}
      </nav>

      {/* Mobile Overlay */}
      {sidebar && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 sm:hidden"
          onClick={() => setSidebar(false)}
        />
      )}

      {/* Content Area */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />

        <main className="flex-1 hero-bg overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  ) : (
    <div className="hero-bg h-screen flex items-center justify-center">
      <SignIn />
    </div>
  );
};

export default Layout;