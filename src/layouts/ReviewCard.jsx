import React from 'react'

const ReviewCard = (props) => {
  return (
    <div className='w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all'>
        <div>
            <p className='text-lightText'>Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Quod voluptas minima
            voluptatem? Illum eveniet explicabo commodi
            quae ad quas molestiae.</p>
        </div>
        <div className='flex fex-row justify-center'>
            <img className='rounded-full w-1/4' src={props.img} alt="img" />
        </div>
    </div>
  )
}

export default ReviewCard