import React from 'react'

export default function CourseAchiev({title, subtitle}) {
  return (
    <div className='flex mt-[-2px]'>
        <div className='w-[4.167vw] h-[4.167vw] bg-[#D9D9D9] rounded-lg p-4 mr-[1.25vw]'></div>
        <div >
            <div className='font-bold text-[1.67vw]'>{title}</div>
            <div className='font-normal text-[1.25vw]'>{subtitle}</div>
        </div>
    </div>
  )
}
