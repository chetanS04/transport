"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Lucide Icons
import {
    Facebook,
    Instagram,
    Youtube,
    Twitter,
    Phone,
    Clock,
    Menu,
    Search,
    X,
    Mail
} from "lucide-react";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [addShadow, setAddShadow] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [hideTopBar, setHideTopBar] = useState(false);

    useEffect(() => {
        let lastScrollY = 0;

        const handleScroll = () => {
            const currentScroll = window.scrollY;

            // Hide top bar when scrolling down, show when scrolling up
            if (currentScroll > lastScrollY && currentScroll > 80) {
                setHideTopBar(true);
            } else if (currentScroll < lastScrollY) {
                setHideTopBar(false);
            }

            // Update scrolled/shadow states
            setIsScrolled(currentScroll > 50);
            setAddShadow(currentScroll > 50);
            lastScrollY = currentScroll;
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const icons = [
        { icon: <Facebook size={14} />, href: "#" },
        { icon: <Instagram size={14} />, href: "#" },
        { icon: <Youtube size={14} />, href: "#" },
        { icon: <Twitter size={14} />, href: "#" },
    ];

    return (
        <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white' : 'bg-transparent'
            }`}>

            {/* ----------- Top Bar ----------- */}
            <div
                className={`w-full py-2 border-b md:flex md:items-center transform transition-all duration-300 ${hideTopBar ? 'max-h-0 opacity-0 -translate-y-full py-0 overflow-hidden' : 'max-h-20 opacity-100 translate-y-0'} ${isScrolled ? 'bg-white border-gray-200' : 'bg-white/90 backdrop-blur-sm border-white/20'} hidden`}
            >
                <div className="container mx-auto px-4 flex justify-between items-center text-sm">

                    {/* RIGHT Side */}
                    <div className="flex items-center gap-3 text-xs md:text-sm lg:text-base">


                        {/* Social Icons */}
                        <div className="flex items-center flex-wrap gap-2 mt-2">
                            {icons.map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    className="
                                        flex items-center justify-center 
                                        h-8 w-8 md:h-6 md:w-6 rounded-full border border-gray-200 
                                        text-gray-600 text-sm md:text-lg
                                        transition-all duration-300
                                        hover:text-primary hover:border-primary hover:scale-110
                                    "
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>

                    </div>

                    {/* LEFT Side */}
                    <div className="flex items-center gap-5">


                        <p className="flex items-center gap-2 text-[14px]">
                            <Clock size={12} />
                            Mon to Fri: <span>9:00am – 6:00pm</span>
                        </p>

                        <a href="tel:+01234567890">
                            <p className="flex items-center gap-2 text-[14px]">
                                <Phone size={12} />
                                +01234567890
                            </p>
                        </a>
                    </div>

                    {/* RIGHT Side */}
                    <div className="flex items-center text[14px]">
                        <a href="tel:+01234567890">
                            <p className="flex items-center gap-2">
                                <Mail size={12} />
                                info@yourdomain.com
                            </p>
                        </a>


                    </div>

                </div>
            </div>

            {/* ----------- Main Navbar ----------- */}
            <nav className={`w-full transition-all duration-300 ${addShadow ? "shadow-md" : ""} ${isScrolled ? 'pb-4 bg-white' : 'pt-4 bg-transparent'}`}>
                <div className="container mx-auto flex items-center justify-between px-4">

                    {/* Logo */}
                    <a href="#">
                        <Image
                            src={isScrolled ? "/images/logo1.png" : "/images/logo.png"}
                            alt="Logo"
                            width={175}
                            height={75}
                            className="w-32 sm:w-40 lg:w-44"
                        />
                    </a>

                    {/* Desktop Menu */}
                    <ul className={`hidden lg:flex items-center gap-8 transition-colors duration-300 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                        <a href="/"><li className="cursor-pointer hover:underline text-base xl:text-xl lg:text-[15px] font-semibold">Home</li></a>
                        <a href="/"><li className="cursor-pointer hover:underline text-base xl:text-xl lg:text-[15px] font-semibold">About us</li></a>
                        <a href="/"><li className="cursor-pointer hover:underline text-base xl:text-xl lg:text-[15px] font-semibold">Services</li></a>
                        <a href="/"><li className="cursor-pointer hover:underline text-base xl:text-xl lg:text-[15px] font-semibold">Jobs & Career</li></a>
                        <a href="/"><li className="cursor-pointer hover:underline text-base xl:text-xl lg:text-[15px] font-semibold">Contact Us</li></a>
                        <a href="/"><li className="cursor-pointer hover:underline text-base xl:text-xl lg:text-[15px] font-semibold">Blog & News</li></a>
                    </ul>

                    {/* Desktop Right (Search icon removed as per your request) */}
                    <div className="hidden lg:flex items-center gap-4"></div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`lg:hidden text-3xl transition-colors duration-300 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
                        onClick={() => setMobileOpen(true)}
                    >
                        <Menu size={28} />
                    </button>
                </div>

                {/* ----------- Mobile Menu Overlay ----------- */}
                {mobileOpen && (
                    <div
                        className="fixed inset-0 bg-black/40 z-50"
                        onClick={() => setMobileOpen(false)}
                    >
                        <div
                            className="absolute top-0 right-0 w-72 h-full bg-white shadow-lg p-6 flex flex-col gap-6 animate-slide-left"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button className="text-2xl ml-auto mb-4" onClick={() => setMobileOpen(false)}>
                                <X size={28} />
                            </button>

                            {/* Search Inside Mobile Menu (Lucide Search) */}
                            <div className="flex items-center gap-2 border rounded-md px-3 py-2">
                                <Search size={18} className="text-gray-600" />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="outline-none w-full text-sm"
                                />
                            </div>

                            {/* Mobile Links */}
                            <ul className="flex flex-col gap-4 text-lg font-semibold">
                                <a href="/"><li className="hover-text-primary">Home</li></a>
                                <a href="/"><li className="hover-text-primary">About us</li></a>
                                <a href="/"><li className="hover-text-primary">Services</li></a>
                                <a href="/"><li className="hover-text-primary">Jobs & Career</li></a>
                                <a href="/"><li className="hover-text-primary">Contact Us</li></a>
                                <a href="/"><li className="hover-text-primary">Blog & News</li></a>
                            </ul>

                            {/* Social Icons in Mobile Menu */}
                            <div className="flex items-center gap-4 mt-6 text-gray-600 text-xl">
                                <Facebook size={14} />
                                <Instagram size={14} />
                                <Youtube size={14} />
                                <Facebook size={14} />
                                <Twitter size={14} />
                            </div>
                        </div>
                    </div>
                )}
            </nav>

        </header>
    );
}
