"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 py-3 w-full">
      <div className="container mx-auto flex items-center justify-between px-6">

        {/* LEFT SECTION */}
        <div className="flex items-center space-x-10">
          <a href="#" className="text-2xl font-semibold text-primary dark:text-black">
            Trackage.in
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex space-x-8 text-gray-700 font-medium">
            <li><a href="#" className="hover:text-primary">Home</a></li>
            <li><a href="#" className="hover:text-primary">Features</a></li>
            <li><a href="#" className="hover:text-primary">Pricing</a></li>
            <li><a href="#" className="hover:text-primary">Partners</a></li>
            <li><a href="#" className="hover:text-primary">Integrations</a></li>
          </ul>
        </div>

        {/* DESKTOP RIGHT */}
        <div className="hidden lg:flex items-center space-x-6">
          <a href="tel:+919914327671" className="flex items-center text-primary font-medium dark:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h1.28a1 1 0 01.948.684l1.493 4.48a1 1 0 01-.502 1.21l-1.507.754a11.042 11.042 0 006.032 6.032l.754-1.506a1 1 0 011.21-.502l4.48 1.493a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z" />
            </svg>
            +91 9914327671
          </a>

          <a
            href="#"
            className="btn-primary py-2 rounded-lg font-semibold hover:bg-primary-dark transition"
          >
            Start free
          </a>
        </div>

        {/* MOBILE BUTTONS (Start Free + Toggle) */}
        <div className="flex items-center space-x-3 lg:hidden">

          {/* Start Free beside toggle */}
          <a
            href="#"
            className="btn-primary py-2 rounded-lg font-semibold hover:bg-primary-dark transition"
          >
            Start free
          </a>

          {/* Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden px-6 pb-6 pt-2 space-y-4 text-gray-700 font-medium">

          <a href="#" className="block hover:text-primary">Home</a>
          <a href="#" className="block hover:text-primary">Features</a>
          <a href="#" className="block hover:text-primary">Pricing</a>
          <a href="#" className="block hover:text-primary">Partners</a>
          <a href="#" className="block hover:text-primary">Integrations</a>

          <hr className="border-gray-300" />

          <a href="tel:+919914327671" className="block text-primary">
            +91 9914327671
          </a>

          
        </div>
      )}
    </nav>
  );
}
