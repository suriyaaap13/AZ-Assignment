import './App.css';
import hero from './images/hero-image-1.png';
import AZLogo from './images/AZ-logo.png';
import Graph from './images/bg-graph.png';
import { FiArrowRight } from "react-icons/fi";
import CourseContent from './components/CourseContent';
import CourseAchiev from './components/CourseAchiev';

export default function App() {


  // Checkbox in Hero Section
  const renderedCheckbox = (
    <div className='flex items-center'>
      <div className='gradient-bg-checkbox w-[3.33vw] h-[3.33vw] p-4 mr-[2.63vw] md:mr-[1.25vw]'></div>
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
        <div className="gradient-bg-welcome md:grid md:grid-flow-col md:grid-cols-3 md:overflow-hidden">       
            
            {/* Text Section */}
            <div className='md:col-span-2 text-white mx-[4vw] md:ml-[8vw] md:mr-[0px] tracking-[-0.03em] pt-[5vw] md:py-[5vw] md:z-10'>
              
              {/* Welcome text */}
              <div className='font-extrabold text-[8.2vw] md:text-[3.5vw] not-italic font-rubik md:w-100'>
                Be better at DSA & CP
              </div>
            
              {/* Supporting Welcome Text */}
              <div className='md:font-normal font-dmSans text-[3vw] w-full text-center md:text-left md:text-[1.25vw]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/>
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </div>
            

              <div className='flex flex-col-reverse md:flex-col'>
                
                {/* Join Buttons */}
                <div className='font-inter font-bold mt-[1vw] md:mt-[0vw] md:flex'>
                  
                  <button className='flex justify-center gradient-bg-light text-[#05445E] items-center w-full md:w-[18vw] h-[3.72vw] md:h-[3.33vw] py-[3.3vw] my-[3.6vw] md:px-[20px] md:py-[8px] text-[3.1vw]  md:text-[1.146vw]  rounded md:rounded-lg md:mr-[1.67vw]'>
                    <span className='p-[2vw] md:py-[8px]'>Join now -&gt;</span>
                  </button>

                  
                  
                  <button className='flex gradient-bg-dark justify-center items-center text-[#FFFFFF] w-full md:w-[18vw] h-[3.72vw] md:h-[3.33vw] py-[3.3vw] mt-[3.6vw]  md:px-[20px] md:py-[8px] text-[3.1vw] md:text-[1.146vw] rounded md:rounded-lg '>
                    <span className='p-[2vw] md:py-[8px]'>View curriculum</span>
                  </button>
                
                </div>


                {/* Checkbox */}
                <div className='w-full mx-[15px] md:mx-[0px] grid grid-rows-2 grid-flow-col gap-4 my-[2.8vw] md:my-[0vw]'>

                  
                  {renderedCheckbox}
                  {renderedCheckbox}
                  {renderedCheckbox}
                  {renderedCheckbox}
                  
                </div>
              
              </div>
              
            
            </div>

            {/* AZ Logo */}
            <div className='md:col-span-1 md:shrink-0 md:ml-[-5.2vw]'> 
              <img src={hero} className='md:scale-150' />
            </div>
          
        </div>
      </div>

      {/* Buy Course Section */}
      <div className='relative isolate gradient-bg-course w-full block md:flex md:justify-between '>

        <img src={Graph} className='z-0 absolute inset-0'/>
        
        {/* Left Part */}
        <div className='relative z-10 mx-[4vw] md:ml-[8vw] py-[11vw] tracking-[-0.03em] md:letter-spacing '>
          
          {/* Hero Text in Course Purchase Section */}
          <div className=' font-rubik font-extrabold text-center lg:text-left text-[8.2vw] md:text-[3.33vw] text-[#000000]'>
            Invest in skills, <br/> <span className='block lg:inline gradient-earn10X'>earn 10X</span> of what you <span className='md:block'>paid.</span>
          </div>
          
          {/* Supporting Text in Purchase Section */}
          <div className='w-full my-[6.15vw] md:my-[2vw] text-[#000000] font-dmSans font-normal tracking-[-0.03em] md:leading-[2vw] text-[3.1vw] md:text-[1.25vw] text-center md:text-left'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/> eiusmod tempor incididunt ut labore et dolore magna aliqua. <span className='hidden md:inline'>Ut enim <br/> ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut <br/> aliquip ex ea commodo consequat.</span>
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
        <div className='relative z-10 my-[5.2vw] mx-[5.9vw] mr-[7vw] letter-spacing drop-shadow-2xl'>
          {/* Course Card */}
          <div className=''>
            {/* Upper Card */}
            <div className='border-2 rounded-t-lg w-full bg-[#FFFFFF] flex justify-between'>
              {/* Upper Card left Side */}
              <div className='ml-[4.05vw] my-[4.05vw] md:ml-[1.1vw] md:my-[1.1vw]'>
                <div className='font-dmSans font-medium text-[#0F0F0F] text-[3vw] md:text-[1.25vw]'>Premium Victory Batch</div>
                <div className='font-rubik font-bold line-through text-[#818181] text-[6.154vw] md:text-[3vw]'>₹19,999</div>
                <div className='font-rubik font-extrabold text-[8.2vw] md:text-[3.75vw] mt-[-2vw] gradient-price'>₹13,999</div>
              </div>
              {/* Image part of the Card */}
              <div className='opacity-40'>
                <img alt='Logo' className='h-[32vw] md:h-[14.5vw]' src={AZLogo}/>
              </div>
            </div>
            {/* End of Upper Card Part */}

            {/* Lower Part of the Card */}
            <div>
              {/* List of Content in the course */}
              <div className='gradient-bg-welcome text-[#FFFFFF] rounded-b-lg'>
                <div className='p-[6.14vw] md:p-[1.5vw]'>
                  <CourseContent>100+ Hrs Live Content</CourseContent>
                  <CourseContent>50+ Hrs Contest</CourseContent>
                  <CourseContent>500+ Problems</CourseContent>
                  <CourseContent>Includes an interview bootcamp and <br/> access to a mentor network</CourseContent>
                  <CourseContent>Enjoy access to our content for one year <br/> (paid extensions available)</CourseContent>
                  <CourseContent>Flexible payment options, including no-<br/>cost EMI, are available.</CourseContent>
                  <button className='py-[8px] w-full gradient-big-bg-light rounded-lg'>
                    <div className='flex justify-center items-center text-[#043C53] font-dmSans font-bold text-[3.1vw] md:text-[1.15vw]'>
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