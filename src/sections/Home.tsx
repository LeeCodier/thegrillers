import service1 from '../assets/pics/service1.jpg'
import awardwinning from '../assets/pics/awardwinning.jpg'
import century from '../assets/pics/century.jpg'

export const Home = () => {
  return (
    <div id="Home" className="w-552.5 al:w-1105 flex flex-col">

     <div className="flex flex-col al:flex-row">
        <div className="w-552.5 h-294 flex  flex-col justify-center gap-20">
           <div className="font-julius text-center text-base">
            At Your Service
           </div>
           <div className="font-montserrat text-center text-sm">
           After first opening our doors our doors in 1923, we have dedicated ourselves to over a century of excellence. 
           Having garnered a loyal following, we are known for award-winning 
           steaks, legendary Poultry and Staple Wine House.
           </div>
       </div>

       <div className='w-552.5 h-294 flex flex-col justify-center'>
         <img src={service1} alt=""  className=' object-cover object-top w-552.5 h-274'/>
       </div>
     </div>

     <div className="flex flex-col al:flex-row-reverse">
        <div className="w-552.5 h-294 flex  flex-col justify-center gap-20">
           <div className="font-julius text-center text-base">
            award-winning
           </div>
           <div className="font-montserrat text-center text-sm">
           The Grillers have won many prestigious awards over the past 100 years.
            Ranked one of our counties top ten Grill houses and we are pa
            rt of the Platinum Diners club
           </div>
       </div>

       <div className='w-552.5 h-294 flex flex-col justify-center'>
         <img src={awardwinning} alt=""  className=' object-cover object-top w-552.5 h-274'/>
       </div>
     </div>
   
     <div className="flex flex-col al:flex-row">
        <div className="w-552.5 h-294 flex  flex-col justify-center gap-20">
           <div className="font-julius text-center text-base">
           A century of excellence
           </div>
           <div className="font-montserrat text-center text-sm">
           We maintain our award-winning reputation by
            ensuring only the finest ingredients & only the most premium wines .
           </div>
       </div>

       <div className='w-552.5 h-294 flex flex-col justify-center'>
         <img src={century} alt=""  className=' object-cover w-552.5 h-274'/>
       </div>
     </div>


    </div>
  )
}
