"use client"
import React, { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import Dropdown from "../dropdown/Dropdown";
import Link from "next/link";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false)
    const menuItems = [
        "Home",
        "About",
        "Skills",
        "Projects",
        "Contact"
    ];

    return (
        <nav className="text-2xl bg-[rgb(240,236,229)] w-full">
            <div className="mx-4 flex gap-2 lg:justify-between font-bold items-center py-4">
                <div className="lg:hidden flex items-center">
                    {
                        isOpen ?
                            <button onClick={() => setIsOpen(!isOpen)}>
                                <IoMdClose></IoMdClose>
                            </button>
                            :
                            <button onClick={() => setIsOpen(!isOpen)}>
                                <RiMenu2Line></RiMenu2Line>
                            </button>
                    }
                </div>
                <h2 className="py-2 text-3xl">Ehsanul</h2>

                <div className="hidden lg:flex gap-4 font-medium">
                    {
                        menuItems?.map((item, idx) => <Link key={idx} href={`#${item}`} className='hover:bg-[#31304D] hover:text-[#B6BBC4] hover: duration-300 hover:px-4 hover:py-2 hover:rounded-md'>{item}</Link>)
                    }
                </div>
            </div>

            <div className="lg:hidden">
                <Dropdown open={isOpen}></Dropdown>
            </div>

        </nav>
    );
}