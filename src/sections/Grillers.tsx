import Greta from '../assets/pics/Greta.png'
import KenDanPun from '../assets/pics/KenDanPun.jpg'
import Mill from '../assets/pics/Mill.png'


export const Grillers = () => {



  return (
    




    <div id='Grillers' className="mt-7 w-552.5 al:w-1105">
        <div className="mb-4 flex justify-center items-center">
              <div className="font-julius text-xl">Grillers</div>
        </div>

        <div className="w-full flex justify-center gap-x-100">
       

             <div className='grid grid-cols-2 w-280 h-250 bg-lb'>
                 <div className=''>

                    <div className=' h-54 flex flex-col justify-center text-md font-montserrat text-center'>
                        Ken Dan Pun
                    </div>

                    <div className=' h-17 flex flex-col justify-center text-sm font-julius text-center'>
                        Somalier
                    </div>

                    <div className='h-179 flex flex-col justify-center text-sm font-montserrat italic text-center'>
                    “Interlinked are my soul and grill's flames.”
                    </div>
                
                 </div>

                 <div className='flex justify-center items-center'>
                 <img src={KenDanPun} alt="" className='w-120 h-230 hover:cursor-pointer object-cover object-top'/>
                 </div>
             </div>

              <div className='hidden al:grid grid-cols-2 w-280 h-250 bg-lb'>
                 <div className=''>

                    <div className=' h-54 flex flex-col justify-center text-md font-montserrat text-center'>
                    Greta Jiksues
                    </div>

                    <div className=' h-17 flex flex-col justify-center text-sm font-julius text-center'>
                    Sous Chef
                    </div>

                    <div className='h-179 flex flex-col justify-center text-sm font-montserrat italic text-center'>
                    “Love your work and it will love you back.”
                    </div>
                
                 </div>

                 <div className='flex justify-center items-center'>
                 <img src={Greta} alt="" className='w-120 h-230 hover:cursor-pointer object-cover object-top'/>
                 </div>
             </div>

             <div className='hidden al:grid grid-cols-2 w-280 h-250 bg-lb'>
                 <div className=''>

                    <div className=' h-54 flex flex-col justify-center text-md font-montserrat text-center'>
                     Mill Charjetu
                    </div>

                    <div className=' h-17 flex flex-col justify-center text-sm font-julius text-center'>
                    Head chef
                    </div>

                    <div className='h-179 flex flex-col justify-center text-sm font-montserrat italic text-center'>
                    “Excellence is a choice.”                    </div>
                
                 </div>

                 <div className='flex justify-center items-center'>
                 <img src={Mill} alt="" className='w-120 h-230 hover:cursor-pointer object-cover object-top'/>
                 </div>
             </div>
        
                
        </div>
    </div>
  )
}
