import React from "react";
import Logo from "../assets/logo.png";
import Trademark from "../assets/trademark.png";
import { NavLink } from "react-router-dom";

import {
  RiGithubFill,
  RiGlobalLine,
  RiLinkedinFill,
  RiInstagramLine,
} from "@remixicon/react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden hero-bg border-t border-white/10 mt-24">
      {/* Background Glow */}
      <div className="absolute left-1/4 top-0 w-72 h-72 bg-cyan-500/10 blur-[150px] rounded-full" />
      <div className="absolute right-1/4 bottom-0 w-72 h-72 bg-purple-500/10 blur-[150px] rounded-full" />

      <div className="relative z-10 px-4 sm:px-10 xl:px-16 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <div>
            <img src={Logo} alt="Nexora AI" className="w-44" />

            <p className="text-white/60 mt-4 max-w-sm text-base md:text-lg leading-relaxed">
              Unlock limitless creativity with Nexora AI. From content creation
              and image generation to productivity enhancement, our AI-powered
              tools help you create faster, smarter, and better.
            </p>

            {/* Trademark */}
            <div className="flex items-center gap-4 mt-6">
              <img
                src={Trademark}
                alt="AP Trademark"
                className="w-12 h-12 rounded-full border border-white/10 opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300"
              />

              <div>
                <p className="text-white/80 text-sm font-medium">
                  Crafted by AP
                </p>

                <p className="text-white/40 text-xs">Creator & Developer</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-white text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-white/60 text-base">
              <li className="hover:text-secondary transition-colors cursor-pointer">
                <NavLink
                  to="/"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="hover:text-secondary transition-colors cursor-pointer">
                <NavLink
                  to="/pricing"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                >
                  Pricing
                </NavLink>
              </li>

              <li className="hover:text-secondary transition-colors cursor-pointer">
                <NavLink
                  to="/about"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                >
                  About
                </NavLink>
              </li>

              <li className="hover:text-secondary transition-colors cursor-pointer">
                <NavLink
                  to="/contact"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col items-center">
            <h3 className="text-white text-lg font-semibold mb-5 text-center">
              Follow Us On
            </h3>

            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 w-full lg:w-48">
              {[
                {
                  icon: RiGithubFill,
                  name: "GitHub",
                  link: "https://github.com/atulrpatel007",
                },
                {
                  icon: RiGlobalLine,
                  name: "Portfolio",
                  link: "https://atul-patel.vercel.app",
                },
                {
                  icon: RiLinkedinFill,
                  name: "LinkedIn",
                  link: "https://www.linkedin.com/in/atulrpatel007",
                },
                {
                  icon: RiInstagramLine,
                  name: "Instagram",
                  link: "https://www.instagram.com/atulrpatel007",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                              group
                              flex
                              items-center
                              gap-3
                              px-4
                              py-3
                              rounded-xl

                              bg-white/[0.03]
                              border border-white/10

                              hover:bg-[linear-gradient(135deg,#22DDF4,#06B6D4,#3B82F6)]
                              hover:border-transparent

                              hover:shadow-[0_10px_25px_rgba(34,221,244,0.25),0_0_20px_rgba(59,130,246,0.15)]

                              transition-all
                              duration-500

                              hover:-translate-y-1"
                >
                  <social.icon
                    size={18}
                    className="text-white/60 group-hover:text-primary transition-colors"
                  />

                  <span className="text-white/60 group-hover:text-primary text-sm font-medium transition-colors">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />

        {/* Bottom */}
        <div className="flex flex-col items-center">
          <p className="text-center text-white/40 text-base">
            © 2026 Nexora AI. All rights reserved.
          </p>

          <p className="text-center text-white/50 text-base md:text-lg mt-3 tracking-[0.15em] font-medium">
            Create • Generate • Innovate
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
