import React from "react";
import Logo from "../../assets/svgs/Logo.svg";
import TelegramIcon from "../../assets/svgs/Telegram Icon .svg";
import FacebookIcon from "../../assets/svgs/Facebook Icon .svg";
import LinkedinIcon from "../../assets/svgs/Linkedin Icon.svg";
import Icon from "../../assets/svgs/Icon.svg";

const Footer = () => {
  return (
    <footer className="bg-[#151515] text-white">

      <div className="w-full mx-auto px-6 py-28">

        {/* main content */}
        <div className="flex flex-col xl:flex-row justify-between gap-4 items-start xl:items-center mb-24">
          {/* info */}
          <div className="w-full pr-12 xl:pr-36 md:w-3/5 xl:1/4 mb-8">
            <div className="flex items-center space-x-3">
              <img src={Logo} alt="Logo" className=" invert h-24 md:h-14 w-auto" loading="lazy"/>
              <span className="sr-only">University</span>
            </div>
            <p className="mt-6 text-md leading-0">
              Through our collaborative approach and innovative design
              solutions, we transform visions into reality, blending
              functionality & expression.
            </p>

            <div className="mt-6 flex space-x-3">
              <a
                href="#"
                aria-label="Telegram"
                className="p-3 border border-white/40 rounded-full hover:bg-gray-700"
              >
                <img src={TelegramIcon} alt="Telegram" className="h-3 w-3" loading="lazy"/>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="p-3 border border-white/40 rounded-full hover:bg-gray-700"
              >
                <img src={FacebookIcon} alt="Facebook" className="h-3 w-3" loading="lazy"/>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="p-3 border border-white/40 rounded-full hover:bg-gray-700"
              >
                <img src={LinkedinIcon} alt="LinkedIn" className="h-3 w-3" loading="lazy"/>
              </a>
            </div>
          </div>

          {/* links */}
          <div className="flex gap-4 md:gap-[8.5rem] justify-start md:justify-between flex-wrap md:flex-nowrap xl:justify-start w-full xl:w-3/4">
            <div className="w-2/5 md:w-1/4 xl:w-auto">
              <h4 className="text-lg md:text-xl  text-gray-400 ">Pages</h4>
              <ul className="mt-4 space-y-4 text-md md:test-lg text-gray-100 leading-relaxed">
                <li>
                  <a href="#" className="hover:text-red-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-400">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-400">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-400">
                    Programs
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-2/5 md:w-1/4 xl:w-auto">
              <h4 className="text-lg md:text-xl  text-gray-400 ">Support</h4>
              <ul className="mt-4 space-y-4 text-md md:test-lg text-gray-100">
                <li>
                  <a href="#" className="hover:text-red-400">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-400">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-400">
                    404
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-2/5 md:w-1/4 xl:w-auto">
              <h4 className="text-lg md:text-xl  text-gray-400 ">Address</h4>
              <address className="not-italic mt-4 text-md md:text-lg text-gray-100">
                Emily Hattson 940
                <br />
                Goldendale Dr, Wasilla, Alaska
                <br />
                99654, USA
              </address>
              <a
                href="#"
                className="mt-4 inline-flex items-center text-lg gap-2 text-gray-300 hover:text-red-400 hover:underline"
              >
               <img src={Icon} alt="" className="h-8" loading="lazy"/>
                See on Map
              </a>
            </div>
          </div>
        </div>

        {/* copyright */}
        <div className="border-t border-gray-800 mt-10 pt-6">
          <p className="text-center text-sm ">
            Copyright 2024 Harbor, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
