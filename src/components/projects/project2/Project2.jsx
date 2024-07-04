import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Project2 = () => {
    return (
        <div>
            <div className='border-b-2 border-[#161A30]'>
                <h2 className='text-4xl font-semibold my-2'>Blood Bondhu</h2>
            </div>

            <div>
                <div className='flex flex-col lg:flex-row-reverse justify-between gap-16 lg:gap-24 mt-8'>
                    <div className='relative w-11/12 m-auto'>
                        <div>
                            <Image src={"/project2/3.png"} height={2000} width={2000} alt='project1' className='w-11/12 lg:w-full rounded-md object-cover border-2 lg:border-3 border-[#B6BBC4]'></Image>
                        </div>
                        <div className='drop-shadow-xl'>
                            <Image src={"/project2/2.png"} height={800} width={800} alt='project1' className='w-2/3 md:w-1/2 lg:w-3/4 rounded-md absolute -bottom-8 -right-2 lg:-right-8 object-cover object-top border-2 lg:border-3 border-[#F0ECE5]'></Image>
                        </div>
                    </div>

                    <div className='w-full'>
                        <div>
                            <h2 className='font-bold mb-2'>Description:</h2>
                            <p className='text-justify'>A <span className='font-semibold'>Blood Donation Website</span>, where people can register as donors and users can post requests for blood in emergencies. The site also uses a mapping technique to notify donors who are close to the request location.</p>

                            <div className='mt-4 lg:mt-8'>
                                <h2 className='font-bold mb-2'>Features: </h2>
                                <ul className='ml-8 grid grid-cols-2 gap-x-6 gap-y-2'>
                                    <li className=' list-disc'>Dark Mode</li>

                                    <li className=' list-disc'>Authentication</li>

                                    <li className=' list-disc'>Donor Registration</li>

                                    <li className=' list-disc'>Top Donor List</li>

                                    <li className=' list-disc'>Post for Blood</li>

                                    <li className=' list-disc'>Emergency Notification</li>

                                    <li className=' list-disc'>Post Response</li>

                                    <li className=' list-disc'>Comments</li>

                                    <li className=' list-disc'>Personal Message</li>


                                </ul>
                            </div>
                        </div>

                        <div className='mt-4 lg:mt-8 flex gap-4'>

                            <button className='px-4 py-2 border-2 rounded-md font-bold bg-[#161A30] text-[#F0ECE5] hover:bg-[#B6BBC4] hover:text-[#161A30] ease-in-out duration-300'><Link href={"https://blood-bondhu.web.app"} target='_blank'>
                                Live
                            </Link></button>

                            <button className='px-4 py-2 border-2 rounded-md border-[#B6BBC4] font-bold bg-[#F0ECE5] text-[#161A30] hover:bg-[#B6BBC4] ease-in-out duration-300'><Link href={"https://github.com/EhsanulSakib/BloodBondhuClient"} target='_blank'>
                                Client
                            </Link></button>

                            <button className='px-4 py-2 border-2 rounded-md border-[#B6BBC4] font-bold bg-[#F0ECE5] text-[#161A30] hover:bg-[#B6BBC4] ease-in-out duration-300'><Link href={"https://github.com/EhsanulSakib/BloodBondhuServer"} target='_blank'>
                                Server
                            </Link></button>
                        </div>

                        <div className='mt-4 lg:mt-8 gap-4 font-bold mb-2'>
                            <h2>Technologies</h2>
                            <div className='mt-2 flex flex-wrap gap-2'>
                                <Image src={"/react.png"} alt={"html logo"} height={150} width={150} className='w-12 h-12 xl:w-16 xl:h-16'></Image>

                                <Image src={"/tailwind.png"} alt={"html logo"} height={150} width={150} className='w-12 h-12 xl:w-16 xl:h-16'></Image>

                                <Image src={"/express.png"} alt={"html logo"} height={150} width={150} className='w-20 h-12 xl:w-24 xl:h-16'></Image>

                                <Image src={"/firebase-small.png"} alt={"html logo"} height={150} width={150} className='w-12 h-12 xl:w-16 xl:h-16'></Image>

                                <Image src={"/mongodb-small.png"} alt={"html logo"} height={150} width={150} className='w-12 h-12 xl:w-16 xl:h-16'></Image>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project2;