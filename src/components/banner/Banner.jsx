import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Resume from "../Resume/Resume";

const Banner = () => {
    return (
        <div className='px-4 md:py-0 mt-32 md:mt-16 flex lg:px-[5%] xl:px-[8%] flex-col-reverse items-center gap-4 md:flex-row md:justify-between md:min-h-[680px] xl:min-h-[900px]' id="Home">
            <div className='flex flex-col items-center md:items-start mt-4'>
                <h2>I&apos;m</h2>
                <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold'>Kazi Ehsanul Haque</h2>
                <h2 className='mt-4'>MERN Developer</h2>

                <div className="my-8 flex gap-4">
                    <h2 className="text-4xl lg:text-5xl"><Link href={"https://github.com/EhsanulSakib"} target="_blank"><FaGithub /></Link></h2>
                    <h2 className="text-4xl lg:text-5xl"><Link href={"https://www.linkedin.com/in/kazi-ehsanul-haque"} target="_blank"><FaLinkedin /></Link></h2>
                    <h2 className="text-4xl lg:text-5xl"><Link href={"https://www.facebook.com/kazi.ehsanul.haque.sakib"} target="_blank"><FaFacebook /></Link></h2>
                </div>

                <Resume></Resume>
            </div>
            <div className="w-full md:w-2/5 bg-gradient-to-tl from-[#31304D] to-[#31304d31] rounded-full">
                <Image width={1000} height={1000} src="/banner-4.png" alt="Ehsanul Image" className="w-full rounded-full object-cover object-center shadow-sm drop-shadow-xl rotate-3" />
            </div>
        </div>
    );
};

export default Banner;