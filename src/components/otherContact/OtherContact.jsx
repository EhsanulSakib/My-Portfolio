import Link from 'next/link';
import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const OtherContact = () => {
    return (
        <div className="my-8 flex lg:flex-col gap-4">
            <h2 className="text-4xl lg:text-5xl"><Link href={"https://www.linkedin.com/in/kazi-ehsanul-haque"} target="_blank"><FaLinkedin /></Link></h2>
            <h2 className="text-4xl lg:text-5xl"><Link href={"https://www.facebook.com/kazi.ehsanul.haque.sakib"} target="_blank"><FaFacebook /></Link></h2>
            <h2 className="text-4xl lg:text-5xl"><Link href={"https://www.instagram.com/ehsanulsakib"} target="_blank"><FaInstagram /></Link></h2>
        </div>
    );
};

export default OtherContact;