import { Navbar } from './components/Navbar';

import insta from '../src/assets/icons/insta.svg';
import facebook from './assets/icons/facebook.svg';
import linkedin from './assets/icons/linkedin.svg';
import { Menu } from './sections/Menu';
import { Home } from './sections/Home'; 
import { Grillers } from './sections/Grillers';
import { WineHouse } from './sections/WineHouse';
function App() {


  return (
    <div>
      <header className='w-full flex justify-center flex-col al:flex-row gap-x-103.45 pt-20 sticky top-[0px] bg-b '>

         <div className=' font-julius text-xl text-center self-center'>
          The Grillers
         </div>
         <div className=' '><Navbar/></div>
      </header>
 
    <div className='flex w-full justify-center'>
      <div className='grid grid-cols-1'>
        <Home/>
        <Grillers/>
        <Menu/>
        <WineHouse/>
      </div>

    </div>


  

    <div className='bg-lb w-full mt-12 flex flex-col items-center al:flex-row py-27px bottom-0  gap-3'>



                 <div className=' h-285 text-center text-lg font-montserrat flex flex-col w-410'>
                 <div className='w-full text-center text-xxl '>Locations</div>
                Midrand: 16 Sundance View
                Capetown: 8 Dilport Boulevard
                 Durban: 12 Podfil Street
                 <div className='w-full text-center text-xxl mt-9'>Operating Hours</div>
                Midrand: 16 Sundance View
                Capetown: 8 Dilport Boulevard
                Durban: 12 Podfil Street
                 </div>

                 <div className='flex flex-col w-410 h-285 gap-1'>
                      <div className='text-xxl font-montserrat text-center'>Join the Family</div>
                       <div className='flex justify-center'><button className='rounded-3xl h-62 w-290 bg-llb flex text-center'></button></div> 
                      <div className='text-lg text-center'> Join or family for access to news, updates and the latest deals just as they happen.</div>
                 </div>


              <div className='flex flex-col w-410 h-285'>
              <div className='text-center text-lg font-montserrat'>
                 <div className='w-full text-center text-xxl '>Socials</div>
                     <div className='flex gap-10 justify-center'>
                      <img src={insta} alt="" className='hover:cursor-pointer hover:scale-125 '/> 
                      <img src={facebook} alt="" className='hover:cursor-pointer hover:scale-125'/> 
                      <img src={linkedin} alt="" className='hover:cursor-pointer hover:scale-125'/> 
                      </div> 
                     
                 <div className='w-full text-center text-xxl mt-9'>Contact Us</div>
                 thegrillers@gmail.com <br />
                  062 549 2139
                 </div>
            
              </div>
  


    </div>

    </div>
  )
}

export default App
