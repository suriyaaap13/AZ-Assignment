import React from 'react'

export default function CourseContent({children}) {
  return (
    <div className='flex'>
      <div className='gradient-bg-checkbox w-[3.33vw] h-[3.33vw] p-4 mr-[1.25vw]'></div>
      <div className='flex justify-center items-center'>
        {children}
      </div>
    </div>
  );
}
