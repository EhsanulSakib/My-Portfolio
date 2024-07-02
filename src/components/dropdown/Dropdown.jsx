import Link from 'next/link';
import React from 'react';

const Dropdown = ({ open }) => {
    const menuItems = [
        "Home",
        "About",
        "Skills",
        "Projects",
        "Contact"
    ];
    return (
        <div className={`${open ? "mt-0 opacity-100" : "-mt-[100vh] opacity-0"} absolute h-auto py-10 duration-500 flex flex-col items-center w-full bg-gradient-to-b from-[#B6BBC4FF] to-[#B6BBC4E6]`}>
            <div className='flex flex-col gap-y-4 items-center'>
                {
                    menuItems?.map((item, idx) => <Link key={idx} href={`#${item}`}>{item}</Link>)
                }
            </div>
        </div>
    );
};

export default Dropdown;