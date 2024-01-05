import React from 'react'
import Heading from '../layouts/Heading'
import ReviewCard from '../layouts/ReviewCard'
import img1 from "../assets/img/pic1.png"
import img2 from "../assets/img/pic2.png"
import img3 from "../assets/img/pic3.png"

const Reviewa = () => {
  return (
    <div className='min-h-[80vh] flex flex-col items-center justify-center md:px-32 px-5'>
        <Heading title="Our" title2="Reviews" />
        
        <div className='flex flex-col md:flex-row gap-5 mt-5'>
            <ReviewCard img={img1}/>
            <ReviewCard img={img2}/>
            <ReviewCard img={img3}/>
            
        </div>
    </div>
  )
}

export default Reviewa