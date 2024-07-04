"use client"
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { IoMdMail } from "react-icons/io";
const Email = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            process.env.NEXT_PUBLIC_PUBLICE_KEY
        );
        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_SERVICE_ID,
                process.env.NEXT_PUBLIC_TEMPLATE_ID,
                form.current,
                process.env.NEXT_PUBLIC_PUBLICE_KEY
            )
            .then(
                (result) => {
                    toast.success(
                        "Thank you for contacting me. I'll get back to you as soon as possible!!. Thank you"
                    );
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="min-h-[80vh] bg-black-dark" id="contact">
            <div className='flex gap-4 mt-6 lg:mt-8 items-center text-3xl lg:text-4xl font-semibold'>
                <h2><IoMdMail /></h2>
                <h2>Send Email</h2>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <div className="my-6 flex flex-col">
                    <label
                        htmlFor="name"
                        className="cursor-pointer text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold"
                    >
                        Your Name
                    </label>
                    <input
                        id="name"
                        name="from_name"
                        type="text "
                        className=" mt-2 border-b-2 text-base md:text-lg lg:text-xl xl:text-2xl border-[#B6BBC4] focus:outline-none bg-transparent w-full md:w-3/5 lg:w-2/5"
                    />
                </div>
                <div className="my-10 flex flex-col">
                    <label
                        htmlFor="email"
                        className="cursor-pointer text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold"
                    >
                        Email
                    </label>
                    <input
                        required
                        type="text "
                        id="email"
                        name="from_email"
                        className=" mt-2 border-b-2 text-base md:text-lg lg:text-xl xl:text-2xl border-[#B6BBC4] focus:outline-none bg-transparent w-full md:w-3/5 lg:w-2/5"
                    />
                </div>
                <div className="my-10 flex flex-col">
                    <label
                        htmlFor="message"
                        className="cursor-pointer text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold"
                    >
                        Message
                    </label>
                    <textarea
                        required
                        id="message"
                        name="message"
                        type="text"
                        className=" mt-2 border-2 p-4 rounded-sm text-base md:text-lg lg:text-xl xl:text-2xl border-[#B6BBC4] focus:outline-none bg-transparent w-full md:w-3/5 lg:w-2/5 min-h-44 max-h-44" rows={4}
                    />
                </div>
                <button className="bg-[#B6BBC4] text-[#161A30] border border-[#B6BBC4] hover:border-[#F0ECE5] hover:bg-[#F0ECE5] px-6 py-1 md:px-8 md:py-2 mb-4 rounded-md active:scale-95 duration-[.4s] text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
                    SEND
                </button>
            </form>
        </div>
    );
};

export default Email;
