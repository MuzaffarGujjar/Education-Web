import React from 'react'
import Heading from '../layouts/Heading'
import webimg from "../assets/web-dev.svg"
import appimg from "../assets/App-dev.svg"
import graphicimg from "../assets/graphic.svg"
import digitalimg from "../assets/digital.svg"
import CoursesCard from '../layouts/CoursesCard'

const Courses = () => {
    return (
        <div className='min-h-screen flex flex-col items-center md:px-32 px-5 my-10'>
            <Heading title="Our" title2="Courses" />

            <div className='flex flex-wrap justify-center gap-6 mt-6'>
                <CoursesCard img={webimg} title="Web Development" />
                <CoursesCard img={appimg} title="App Development" />
                <CoursesCard img={graphicimg} title="Graphic Designer" />
                <CoursesCard img={digitalimg} title="Digital Marketing" />
            </div>
        </div>
    )
}

export default Courses