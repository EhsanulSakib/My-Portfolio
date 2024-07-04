import React from 'react';
import Image from 'next/image';

const Skills = () => {
    return (
        <div className='px-4 py-12 lg:py-24 lg:px-[5%] xl:px-[8%]' id="Skills">
            <div className='flex gap-4 mb-6'>
                <div className='w-3 bg-[#161A30]'></div>
                <h2 className='text-5xl font-semibold my-3'>SKILLS</h2>
            </div>
            <div className='flex flex-col items-center gap-4 md:flex-row md:justify-between'>
                <div className='flex flex-wrap justify-center gap-10 items-center w-full'>
                    <div className='flex flex-col items-center gap-4'>
                        <h2 className='font-semibold mb-4'>Front End</h2>
                        <div className='flex flex-col items-center gap-y-6'>
                            <div className='flex gap-4'>
                                <Image src={"/html.png"} alt={"html logo"} height={150} width={150} className='w-24 h-24 xl:w-32 xl:h-32'></Image>

                                <Image src={"/css.png"} alt={"html logo"} height={150} width={150} className='w-24 h-24 xl:w-32 xl:h-32'></Image>

                                <Image src={"/tailwind.png"} alt={"html logo"} height={200} width={200} className='w-24 h-24 xl:w-32 xl:h-32'></Image>
                            </div>

                            <div className='flex gap-6'>
                                <Image src={"/js.png"} alt={"html logo"} height={150} width={150} className='w-24 h-24 xl:w-32 xl:h-32'></Image>
                                <Image src={"/react.png"} alt={"html logo"} height={150} width={150} className='w-24 h-24 xl:w-32 xl:h-32'></Image>
                            </div>
                        </div>

                    </div>

                    <div className='flex flex-col items-center gap-4'>
                        <h2 className='font-semibold mb-2'>Back End</h2>
                        <div className='flex flex-col items-center gap-y-6'>
                            <div className='flex gap-4'>
                                <Image src={"/nodejs.png"} alt={"html logo"} height={150} width={150} className='w-24 h-24 xl:w-32 xl:h-32'></Image>

                                <Image src={"/expressjs.png"} alt={"html logo"} height={150} width={150} className='w-24 h-24 xl:w-32 xl:h-32'></Image>
                            </div>
                        </div>

                        <div className='flex items-center flex-col'>
                            <h2 className='font-semibold mb-2'>Authentication</h2>
                            <Image src={"/firebase.png"} alt={"html logo"} height={150} width={300} className='w-4/5 h-24 xl:h-32'></Image>
                        </div>


                    </div>

                    <div className='flex items-center flex-col gap-4'>
                        <h2 className='font-semibold mb-2 '>Database</h2>
                        <div className='flex flex-row lg:flex-col items-center gap-6'>
                            <Image src={"/mysql.png"} alt={"html logo"} height={150} width={150} className='w-36 h-20 xl:w-52 xl:h-32'></Image>

                            <Image src={"/mongodb.png"} alt={"html logo"} height={150} width={250} className='w-36 h-20 xl:w-52 xl:h-32'></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;