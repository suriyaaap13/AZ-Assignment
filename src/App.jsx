import './App.css';
import hero from './images/hero-image-1.png';
import AZLogo from './images/AZ-logo.png';
import { FiArrowRight } from "react-icons/fi";
import CourseContent from './components/CourseContent';
import CourseAchiev from './components/CourseAchiev';

export default function App() {


  // Checkbox in Hero Section
  const renderedCheckbox = (
    <div className='flex'>
      <div className='gradient-bg-checkbox w-[3.33vw] h-[3.33vw] p-4 mr-[1.25vw]'></div>
      <div className='flex justify-center items-center'>
        Lorem ipsum dolor sit amet
      </div>
    </div>
  );

  
  
  
  

  return (
    <div>


      {/* Setting the background Texture */}
      <div className="bg-texture">
        {/* Hero Section */}
        <div className="gradient-bg-welcome grid grid-flow-col grid-cols-3 overflow-hidden">       
            
            {/* Text Section */}
            <div className='col-span-2 text-white ml-[8vw] tracking-[-0.03em] py-[5vw] z-10'>
              
              {/* Welcome text */}
              <div className='font-extrabold text-[3.5vw] not-italic font-rubik w-100'>
                Be better at DSA & CP
              </div>
            
              {/* Supporting Welcome Text */}
              <div className='font-normal font-dmSans text-[1.25vw]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/>
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </div>
            
            
              {/* Join Buttons */}
              <div className='mt-[1.589vw] font-inter flex font-bold'>
                <button className='flex justify-center items-center w-[12.24vw] h-[3.33vw] gradient-bg-light px-[20px] py-[8px] text-[1.146vw] text-[#05445E] rounded-lg mr-[1.67vw]'>
                  <span className='py-[8px]'>Join now -&gt;</span>
                </button>

                
                <button className='flex border-white justify-center items-center h-[3.33vw] gradient-bg-dark px-[20px] py-[8px] text-[1.146vw] text-[#FFFFFF] rounded-lg '>
                  <span className='py-[8px]'>View curriculum</span>
                </button>
              </div>


              {/* Checkbox */}
              <div className='grid grid-rows-2 grid-flow-col gap-4 my-[2.8vw]'>

                
                {renderedCheckbox}
                {renderedCheckbox}
                {renderedCheckbox}
                {renderedCheckbox}
                
              </div>
            
            </div>

            {/* AZ Logo */}
            <div className='col-span-1 shrink-0 ml-[-5.2vw]'> 
              <img src={hero} className='scale-150' />
            </div>
          
        </div>
      </div>

      {/* Buy Course Section */}
      <div className='gradient-bg-course flex justify-between w-full'>

        {/* Left Part */}
        <div className='ml-[8vw] my-[11vw] letter-spacing'>
          
          {/* Hero Text in Course Purchase Section */}
          <div className=' font-rubik font-bold lg:font-extrabold text-[3.33vw] text-[#000000]'>
            Invest in skills, <br/> <span className='gradient-earn10X'>earn 10X</span> of what you <br/> paid.
          </div>
          
          {/* Supporting Text in Purchase Section */}
          <div className='my-[2vw] text-[#000000] font-dmSans font-normal text-[1.25vw] leading-[2vw]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br/> ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br/> aliquip ex ea commodo consequat.
          </div>
          {/* End of Supporting Text in Purchase Section */}
          
          {/* Check Box with Achiements */}
          <div className='my-[5vw] font-dmSans fond-bold'>
            <div className='grid grid-rows-2 grid-flow-col gap-[2.4vw]' >
              <CourseAchiev title={"1.2 Cr/Year"} subtitle = {"highest fresher package"} />
              <CourseAchiev title={"1000+ Offers"} subtitle = {"from top companies"} />
              <CourseAchiev title={"Multiple <100 Ranks"} subtitle = {"in kickstart last year"} />
              <CourseAchiev title={"Trusted by IITians"} subtitle = {"for their career prep"} />
            </div>
          </div>
        </div>


        {/* Right Part */}
        <div className='my-[5.2vw] mx-[5.9vw] mr-[10.19vw] letter-spacing drop-shadow-2xl'>
          {/* Course Card */}
          <div className=''>
            {/* Upper Card */}
            <div className='border-2 rounded-t-lg w-full bg-[#FFFFFF] flex justify-between'>
              {/* Upper Card left Side */}
              <div className='ml-[1.1vw] my-[1.1vw]'>
                <div className='font-dmSans text-[1.25vw] font-medium text-[#0F0F0F]'>Premium Victory Batch</div>
                <div className='font-rubik font-bold text-[3vw] line-through text-[#818181]'>₹19,999</div>
                <div className='font-rubik font-extrabold text-[3.75vw] mt-[-27px] gradient-price'>₹13,999</div>
              </div>
              {/* Image part of the Card */}
              <div className='opacity-40'>
                <img alt='Logo' className='h-[14.5vw]' src={AZLogo}/>
              </div>
            </div>
            {/* End of Upper Card Part */}

            {/* Lower Part of the Card */}
            <div>
              {/* List of Content in the course */}
              <div className='gradient-bg-welcome text-[#FFFFFF] rounded-b-lg'>
                <div className='p-[1.5vw]'>
                  <CourseContent>100+ Hrs Live Content</CourseContent>
                  <CourseContent>50+ Hrs Contest</CourseContent>
                  <CourseContent>500+ Problems</CourseContent>
                  <CourseContent>Includes an interview bootcamp and <br/> access to a mentor network</CourseContent>
                  <CourseContent>Enjoy access to our content for one year <br/> (paid extensions available)</CourseContent>
                  <CourseContent>Flexible payment options, including no-<br/>cost EMI, are available.</CourseContent>
                  <button className='py-[8px] w-full gradient-big-bg-light rounded-lg'>
                    <div className='flex justify-center items-center text-[#043C53] font-dmSans font-bold text-[1.15vw] text-[#043C53]'>
                      Join Now 
                      <div className='ml-[5px] font-extrabold'>
                        <FiArrowRight/>
                      </div>
                      
                    </div>                    
                  </button>
                </div>
              </div>
              {/* End of List of Content in the course */}
            </div>
            {/* End of Lower Part of the Card */}
            

          </div>
        </div>
      
      </div>


    </div>
      
  )
}