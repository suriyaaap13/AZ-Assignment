import './App.css';
import hero from './images/hero-image-1.png';
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
        <div className="gradient-bg-welcome flex flex-col lg:flex-row overflow-hidden">       
            
            {/* Text Section */}
            <div className='text-white ml-[10.417vw] tracking-[-0.03em] my-[5vw]'>
              
              {/* Welcome text */}
              <div className='font-extrabold text-[3.75vw] not-italic font-rubik w-100'>
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

                
                <button className='flex justify-center items-center h-[3.33vw] gradient-bg-dark px-[20px] py-[8px] text-[1.146vw] text-[#FFFFFF] rounded-lg '>
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
            <div> 
              <img src={hero} className='lg: mt-[40px] mx-[-75px] scale-150' />
            </div>
          
        </div>
      </div>
      
      

      {/* Buy Course Section */}
      <div>

      </div>
      <div className='gradient-bg-course flex'>

        {/* Left Part */}
        <div className='ml-[10.417vw] my-[11vw] letter-spacing'>
          
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
        <div>
          {/* Course Card */}
          <div>
            {/* Upper Card */}
            <div>
              <div>Premium Victory Batch</div>
              <div>₹19,999</div>
              <div>₹13,999</div>
              {/* Image part of the Card */}
              <div>

              </div>
            </div>
            {/* List of Content in the course */}
            <div>
              
              <CourseContent>100+ Hrs Live Content</CourseContent>
              <CourseContent>50+ Hrs Contest</CourseContent>
              <CourseContent>500+ Problems</CourseContent>
              <CourseContent>Includes an interview bootcamp and access to a mentor network</CourseContent>
              <CourseContent>Enjoy access to our content for one year (paid extensions available)</CourseContent>
              <CourseContent>Flexible payment options, including no-cost EMI, are available.</CourseContent>


              <button className='gradient-big-bg-light  text-[#043C53] flex justify-center items-center'>Join Now <FiArrowRight/></button>
            </div>
          </div>
        </div>
      </div>


    </div>
      
  )
}