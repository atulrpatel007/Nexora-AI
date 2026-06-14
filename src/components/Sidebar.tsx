import React from "react";
import { useClerk, useUser,useAuth  } from "@clerk/react";
import { NavLink } from "react-router-dom";
import {
  House,
  SquarePen,
  Captions,
  Image,
  Eraser,
  FileText,
  Trash2,
  User,
  LogOut,
} from "lucide-react";

const Sidebar = ({ sidebar, setSidebar }) => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();
  const menuItems = [
    { to: "/app", label: "Dashboard", Icon: House, end: true },
    { to: "/app/article", label: "Article Writer", Icon: SquarePen },
    { to: "/app/blog", label: "Blog Title", Icon: Captions },
    { to: "/app/images", label: "Image Generator", Icon: Image },
    { to: "/app/background", label: "Background Remover", Icon: Eraser },
    { to: "/app/object", label: "Remove Object", Icon: Trash2 },
    { to: "/app/resume", label: "Resume Builder", Icon: FileText },
    { to: "/app/community", label: "Community", Icon: User },
  ];
  const { has, isLoaded } = useAuth();
  return (
    <aside
      className={`
        w-60
        hero-bg
        border-r border-accent

        flex flex-col
        justify-between

        sm:relative

        max-sm:fixed
        max-sm:top-[73px]
        max-sm:left-0
        max-sm:bottom-0

        z-40

        transition-all
        duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]

        ${
          sidebar
            ? "translate-x-0"
            : "max-sm:-translate-x-full sm:translate-x-0"
        }
      `}
    >
      {/* User Section */}
      <div className="my-7 w-full px-4">
        <img
          src={user?.imageUrl}
          alt="User Avatar"
          className="w-16 h-16 rounded-full mx-auto border-2 border-secondary/30"
        />

        <h2 className="mt-4 text-center text-white font-medium text-sm">
          {user?.fullName}
        </h2>

        <p className="text-center text-white/40 text-xs mt-1">
          Welcome Back
        </p>

        {/* Navigation */}
        <div className="mt-6">
          {menuItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.to}
              end={item.end}
              onClick={() => setSidebar(false)}
              className={({ isActive }) =>
                `
                  group
                  flex items-center
                  gap-3
                  px-4
                  py-3
                  rounded-xl
                  mb-2

                  transition-all
                  duration-300

                  ${
                    isActive
                      ? `
                        bg-[linear-gradient(135deg,#22DDF4,#06B6D4,#3B82F6)]
                        text-primary
                        shadow-[0_10px_25px_rgba(34,221,244,0.25),0_0_20px_rgba(59,130,246,0.15)]
                      `
                      : `
                        text-white/70
                        hover:bg-white/5
                        hover:text-white
                        hover:translate-x-2
                      `
                  }
                `
              }
            >
              {({ isActive }) => (
                <>
                  <item.Icon
                    size={18}
                    className={`
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "text-primary"
                          : "group-hover:text-secondary group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(34,221,244,0.8)]"
                      }
                    `}
                  />

                  <span
                    className={`
                      text-sm
                      font-medium
                      transition-all
                      duration-300
                      ${
                        !isActive
                          ? "group-hover:text-secondary group-hover:drop-shadow-[0_0_8px_rgba(34,221,244,0.8)]"
                          : ""
                      }
                    `}
                  >
                    {item.label}
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Bottom User Bar */}
      <div className="border-t border-white/10 p-4">
        <div className="flex items-center gap-3">
          <img
            src={user?.imageUrl}
            alt="User"
            className="w-10 h-10 rounded-full"
          />

          <div
            className="flex-1 min-w-0 cursor-pointer"
            onClick={() => openUserProfile()}
          >
            <p className="text-white text-sm font-medium truncate">
              {user?.fullName}
            </p>

            <p className="text-white/40 text-xs">
              {has({ plan: "pro_user" }) ? "Pro Plan" : "Free Plan"}
            </p>
          </div>

          <button
            onClick={() => signOut()}
            className="text-white/50 hover:text-red-500 transition-colors"
            title="Sign Out"
          >
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;