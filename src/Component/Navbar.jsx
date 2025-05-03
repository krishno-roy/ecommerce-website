import React, { useState } from 'react'
import LoginImg from "../assets/avatar.png";
import { FaSearch, FaShoppingBag } from 'react-icons/fa';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
const [menuOpen, setMenuOpen]=useState(false)


const toggleMenu = () => {
  setMenuOpen(prev => !prev)
}

  return (
    <header className="shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-6 ">
        {/* desktop menu */}
        <div className="hidden md:block">
          <ul className="flex gap-6 font-semibold text-xl">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "text-black"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="shop"
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "text-black"
                }
              >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="pages"
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "text-black"
                }
              >
                Pages
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "text-black"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        {/* logo */}
        <div>
          <Link to="/" className="font-bold text-2xl ">
            E-commerce
          </Link>
        </div>
        {/* icon  */}
        <div className="flex gap-5 items-center">
          <FaSearch className="text-xl hidden md:block" />
          <FaShoppingBag className="text-xl" />
          <img src={LoginImg} sizes="" alt=" " className="h-6" />
          <div className="md:hidden" onClick={toggleMenu}>
            {menuOpen ? (
              <RiCloseLine className="text-2xl cursor-pointer" />
            ) : (
              <RiMenu3Line className="text-2xl cursor-pointer" />
            )}
          </div>
        </div>
        {/* mobile menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-gray-700 p-4 md:hidden">
            <ul className="space-y-3 text-white text-xl font-semibold text-center">
              <li>Home</li>
              <li>Shop</li>
              <li>Pages</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar