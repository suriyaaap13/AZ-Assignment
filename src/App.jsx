import './App.css';
import hero from './images/hero-image-1.png';

export default function App() {

  return (
    <div
      className="gradient-bg-welcome bg-[url('./images/bg-texture.png')] flex absolute"
    >

      
      <div className='text-white relative left-[10.417vw] top-[12.865vw] tracking-[-0.03em]'>
        
        <div className='font-extrabold text-[3.75vw] not-italic font-rubik w-100'>
          Be better at DSA & CP
        </div>
      

        <div className='font-normal font-dmSans w-[38.75vw] text-[1.25vw]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          <span className='block'>eiusmod tempor incididunt ut labore et dolore magna aliqua</span>
        </div>
      
      
        {/* Buttons */}
        <div className='mt-[1.589vw] font-inter flex font-bold'>
          
          
          
          {/* <button className='flex justify-center items-center  h-[5.926vh] gradient-bg-light px-[20px] py-[8px] text-[1.146vw] text-[#05445E] rounded-lg mr-[1.67vw]'>
            <span className='py-[8px] '>Join now</span>
          </button>
          
            <button className='flex justify-center items-center  h-[5.926vh] gradient-bg-dark px-[20px] py-[8px] text-[1.146vw] text-[#FFFFFF] rounded-lg'>
              <span className='py-[8px] '>View curriculum</span>
            </button> */}
        </div>
      
      </div>

      {/* Hero Image */}

      <div>
        <img src={hero} />
      </div>

      


    </div>  
  )
}