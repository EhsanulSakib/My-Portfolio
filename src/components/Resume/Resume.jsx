import Link from 'next/link';
import React from 'react';

const Resume = () => {
    return (
        <div className='mt-4 flex gap-4 text-xl lg:text-2xl xl:text-3xl'>
            <a href="https://drive.usercontent.google.com/u/0/uc?id=1CC7e_kGrkpgCyyxe8OE8E_u0nq4UoW3a&export=download" download>
                <button className='duration-300 ease-in-out bg-[#161A30] p-4 rounded-md text-white hover:bg-transparent border-2 border-[#161A30] hover:text-[#161A30]'>Resume</button>
            </a>

            <Link href={"#Contact"}>
                <button className='duration-300 ease-in-out  bg-transparent p-4 rounded-md text-[#161A30] hover:bg-[#161A30] border-2 border-[#161A30] hover:text-white'>Contact</button>
            </Link>
        </div>
    );
};

export default Resume;