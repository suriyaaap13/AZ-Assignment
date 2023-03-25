import './App.css';
import hero from './images/hero-image-1.png';
import { FiArrowRight } from "react-icons/fi";
import CourseContent from './components/CourseContent';

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

      {/* Hero Section */}
      <div className="gradient-bg-welcome hero-img flex">
        
          
          {/* Text Section */}
          <div className='text-white tracking-[-0.03em]'>
            
            {/* Welcome text */}
            <div className='font-extrabold text-[3.75vw] not-italic font-rubik w-100'>
              Be better at DSA & CP
            </div>
          
            {/* Supporting Welcome Text */}
            <div className='font-normal font-dmSans w-[38.75vw] text-[1.25vw]'>
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
              <div className='grid grid-rows-2 grid-flow-col gap-4'>

                {/* Component */}
                {renderedCheckbox}
                {renderedCheckbox}
                {renderedCheckbox}
                {renderedCheckbox}
                
              </div>
          
          </div>

          {/* AZ Logo */}
          <div>
            <img src={hero} width="864" height="864"/>
          </div>
        
      </div>
      

      {/* Buy Course Section */}
      <div className='gradient-graph'>

        {/* Left Part */}
        <div>
          <h1>
            Invest in skills, <br/> earn 10X of what you <br/> paid.
          </h1>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br/> ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br/> aliquip ex ea commodo consequat.
          </div>
          <div>
            {/* Check Box with Achiements */}
            <div className='grid grid-rows-2 grid-flow-col gap-4' >
              
              <div className='flex'>
                <div className='w-[4.167vw] h-[4.167vw] bg-[#D9D9D9] rounded-lg p-4'></div>
                <div>
                  <h2>1.2 Cr/Year</h2>
                  <h4>highest fresher package</h4>
                </div>
              </div>
              
              <div className='flex'>
                <div className='w-[4.167vw] h-[4.167vw] bg-[#D9D9D9] rounded-lg p-4'></div>
                <div>
                  <h2>Multiple &lt;100 Ranks</h2>
                  <h4>in kickstart last year</h4>
                </div>
              </div>

              <div className='flex'>
                <div className='w-[4.167vw] h-[4.167vw] bg-[#D9D9D9] rounded-lg p-4'></div>
                <div>
                  <h2>1000+ Offers</h2>
                  <h4>from top companies</h4>
                </div>
              </div>

              <div className='flex'>
                <div className='w-[4.167vw] h-[4.167vw] bg-[#D9D9D9] rounded-lg p-4'></div>
                <div>
                  <h2>Trusted by IITians</h2>
                  <h4>for their career prep</h4>
                </div>
              </div>

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