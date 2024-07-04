import React from 'react';
import Email from '../email/Email';
import OtherContact from '../otherContact/OtherContact';

const Contact = () => {
    return (
        <div className='mt-10 md:mt-0 bg-[#161A30] p-4 lg:px-[5%] xl:px-[8%] py-10 text-[rgb(240,236,229)]' id="Contact">
            <div className='flex gap-4 mb-6'>
                <div className='w-3 bg-[rgb(240,236,229)]'></div>
                <h2 className='text-5xl font-semibold my-3'>CONTACT</h2>
            </div>

            <div className='flex flex-col lg:flex-row w-full justify-between gap-10 items-center lg:items-start'>
                <Email></Email>
                <OtherContact></OtherContact>
            </div>
        </div>
    );
};

export default Contact;