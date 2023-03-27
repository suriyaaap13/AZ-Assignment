import React from 'react'

export default function CourseAchiev({title, subtitle}) {
  return (
    <div className='flex items-center mt-[-2px]'>
        <div className='bg-[#D9D9D9] rounded-lg p-4 mr-[2.56vw] md:mr-[1.25vw] w-[7.7vw] h-[7.7vw] md:w-[4.167vw] md:h-[4.167vw] '></div>
        <div>
            <div className='font-bold text-[3.59vw] md:text-[1.67vw]'>{title}</div>
            <div className='font-normal text-[3.1vw] md:text-[1.25vw]'>{subtitle}</div>
        </div>
    </div>
  )
}
