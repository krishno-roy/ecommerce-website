import React from "react";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import Instagram1 from "../assets/instagram-1.jpg";
import Instagram2 from "../assets/instagram-2.jpg";
import Instagram3 from "../assets/instagram-3.jpg";
import Instagram4 from "../assets/instagram-4.jpg";
import Instagram5 from "../assets/instagram-5.jpg";
import Instagram6 from "../assets/instagram-6.jpg";

const Footer = () => {
  return (
    <div className="py-16 container mx-auto flex justify-between">
      <div className="space-y-4">
        <h2 className="uppercase text-2xl font-bold">Contactinfo</h2>
        <h1 className="flex items-center gap-3 text-md font-semibold">
          <FaMapMarkerAlt className="text-2xl text-red-600" />
          123 Nilphari
        </h1>
        <h2 className="flex items-center gap-3 ext-md font-semibold">
          <MdOutlineMail className="text-2xl text-red-600" />
          krishnoroooy@gmail.com
        </h2>
        <h2 className="flex items-center gap-3 ext-md font-semibold">
          <FaPhone className="text-2xl text-red-600" />
          +232156654
        </h2>
      </div>
      <div>
        <h2 className="uppercase text-2xl font-bold">Company</h2>
        <ul className="text-xl space-y-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Shop</a>
          </li>
          <li>
            <a href="/">Our Blog</a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="uppercase text-2xl font-bold">User Link</h2>
        <ul className="text-xl space-y-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Shop</a>
          </li>
          <li>
            <a href="/">Our Blog</a>
          </li>
        </ul>
      </div>
      <div className="space-y-2">
        <h2 className="uppercase text-2xl font-bold">Instagram</h2>
        <div className="grid grid-cols-3 space-y-2 space-x-2">
          <img src={Instagram1} alt="" className="h-15" />
          <img src={Instagram2} alt="" className="h-15" />
          <img src={Instagram3} alt="" className="h-15" />
          <img src={Instagram4} alt="" className="h-15" />
          <img src={Instagram5} alt="" className="h-15" />
          <img src={Instagram6} alt="" className="h-15" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
