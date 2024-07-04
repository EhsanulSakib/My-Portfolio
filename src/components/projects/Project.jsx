import React from 'react';
import Project1 from './project1/Project1';
import Project2 from './project2/Project2';
import Project3 from './project3/Project3';

const Project = () => {
    return (
        <div className='px-4 py-12 lg:py-24 lg:px-[5%] xl:px-[8%]' id="Projects">
            <div className='flex gap-4 mb-6'>
                <div className='w-3 bg-[#161A30]'></div>
                <h2 className='text-5xl font-semibold my-3'>PROJECTS</h2>
            </div>
            <div className='flex flex-col gap-12 lg:gap-24 text-lg md:text-xl lg:text-2xl xl:text-3xl '>
                <Project1></Project1>
                <Project2></Project2>
                <Project3></Project3>
            </div>
        </div>
    );
};

export default Project;