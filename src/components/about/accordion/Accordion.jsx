import React from 'react';

const Accordion = () => {
    return (
        <div className='mt-8 lg:mt-0'>
            <div className='flex gap-2 mb-4'>
                <div className='w-2 bg-[rgb(240,236,229)]'>
                </div>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold my-2'>Education</h2>
            </div>
            <h2>B.Sc in <span className='font-bold mb-4'>CSE</span></h2>
            <div className='mt-2 flex justify-between items-end'>
                <div>
                    <h2>East West University</h2>
                    <h2 className='text-base lg:text-xl'>Dhaka, Bangladesh</h2>
                </div>
                <h2 className='text-base lg:text-xl'>2020-2024</h2>
            </div>
        </div>
    );
};

export default Accordion;