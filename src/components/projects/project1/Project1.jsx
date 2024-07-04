import Image from 'next/image';
import React from 'react';

const Project1 = () => {
    return (
        <div>
            <div className='border-b-2 border-[#161A30]'>
                <h2 className='text-3xl font-semibold my-2'>Nexura Building</h2>
            </div>

            <div>
                <div className='flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 mt-8'>
                    <div className='relative w-11/12 m-auto'>
                        <div>
                            <Image src={"/Project1/project1(1).png"} height={1400} width={1400} alt='project1' className='w-11/12 lg:w-full rounded-md object-cover object-top border-2 lg:border-3 border-[#B6BBC4]'></Image>
                        </div>
                        <div className='drop-shadow-xl'>
                            <Image src={"/Project1/project1(6).png"} height={800} width={800} alt='project1' className='w-2/3 md:w-1/2 lg:w-3/4 rounded-md absolute -bottom-8 -right-2 lg:-right-8 object-cover object-top border-2 lg:border-3 border-[#F0ECE5]'></Image>
                        </div>
                    </div>

                    <div className='w-full'>
                        <div>
                            <h2 className='font-bold mb-2'>Description:</h2>
                            <p className='text-justify'>A Building Management Website, where a user can see the flats information of the building and request for rent. If admin approved his request the user will be registered as member and get the flat as rent. By using the website all members can pay the monthly rent of their apartment.</p>
                        </div>

                        <div className='mt-8 flex gap-4'>

                            <button className='px-4 py-2 border-2 rounded-md border-[#161A30] font-bold bg-[#161A30] text-[#F0ECE5] hover:text-[#161A30]'>Live</button>
                            <button>Client</button>
                            <button>Server</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project1;