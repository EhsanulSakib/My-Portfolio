import React from 'react';
import Accordion from './accordion/Accordion';

const About = () => {
    return (
        <div className='mt-10 md:mt-0 bg-[#161A30] p-4 py-10 text-[rgb(240,236,229)]' id="About">
            <div className='flex gap-4 mb-6'>
                <div className='w-3 bg-[rgb(240,236,229)]'></div>
                <h2 className='text-5xl font-semibold my-3'>ABOUT ME</h2>
            </div>
            <div className='mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 text-xl md:text-2xl xl:text-4xl'>
                <div className='text-justify'>
                    <p>I'm <span className='font-bold'>Kazi Ehsanul Haque</span>, a <span className='font-bold'>MERN stack Web Developer</span> with expertise includes HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. As a graduated fresher, I am actively seeking job opportunities to kickstart my career and make a meaningful impact.</p>
                    <p className='mt-8'>I consistently stay updated with the latest technologies and enjoy learning new ones. I'm always excited to seize opportunities to work on real-life projects.</p>
                </div>
                <div>
                    <Accordion></Accordion>
                </div>

            </div>
        </div>
    );
};

export default About;