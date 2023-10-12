

export const Menu = () => {
  return (
    <div id="Menu" className=" w-full">
       <div className="w-full flex flex-col justify-end text-center h-54 text-xl font-julius mb-2.5">
        Menu
       </div>
        
     <div className="grid grid-cols-2 ">

         <div className="grid al:grid-cols-2">
         <div className="w-276.25 bg-lb">
            <div className=" text-xl text-center w-full my-4 font-julius">Beef</div>
            <ul className="list-bullet  text-sm font-julius pl-35">
              <li className="mb-20">Grilled Beef Galbi</li>
              <li className="mb-20">Crying Tiger</li>
              <li className="mb-20">Nigerian Beef Suya</li>
              <li className="mb-20">Grilled Skirt Steak Fajitas</li>
              <li className="mb-20">Carne Asada</li>
              <li className="mb-20">Barbecue Smoked Beef Chuck</li>
              <li className="mb-20">Grilled & Smoked Brisket</li>
              <li className="mb-20">Grilled Black Diamond-Style Steak</li>
            </ul>
          </div>
            
          <div className="w-276.25 bg-lb">
            <div className=" text-xl text-center w-full my-4 font-julius">Poultry</div>
            <ul className="list-bullet text-sm font-julius pl-35">
              <li className="mb-20">Bruschetta Grilled Chicken</li>
              <li className="mb-20">Harissa Grilled Chicken</li>
              <li className="mb-20">Spicy Coconut Grilled Chicken</li>
              <li className="mb-20">California Grilled Chicken</li>
              <li className="mb-20">Grilled Chicken Sandwich</li>
              <li className="mb-20">Grilled Chicken Kebabs</li>
              <li className="mb-20">Tex-Mex Chicken Fajita Foil Packets</li>
              <li className="mb-20">Grilled Chicken Salad</li>
              <li className="mb-20">Peach Balsamic Grilled Chicken</li>
            </ul>
          </div>
         </div>
   

           <div className="grid al:grid-cols-2">
            
           <div className="w-276.25 bg-lb">
            <div className=" text-xl text-center w-full my-4 font-julius">seafood</div>
            <ul className="list-bullet text-sm font-julius pl-35">
              <li className="mb-20">Spicy Grilled Shrimp</li>
              <li className="mb-20">Summer Grilled Bluefish</li>
              <li className="mb-20">Honey Grilled Shrimp</li>
              <li className="mb-20">Grilled Halibut with Cilantro Garlic Butter</li>
              <li className="mb-20">Grilled Salmon Kyoto</li>
              <li className="mb-20">Whole Grilled Trout</li>
              <li className="mb-20">Grilled Rock Lobster Tails</li>
              <li className="mb-20">Char-grilled Oysters</li>
              <li className="mb-20">grilled citrus Swordfish With Citrus Salsa</li>
            </ul>
          </div>

          <div className="w-276.25 bg-lb">
            <div className=" text-xl text-center w-full my-4 font-julius">sides</div>
            <ul className="list-bullet text-sm font-julius pl-35">
              <li className="mb-20">Grilled Garlic bread</li>
              <li className="mb-20">garlic knots</li>
              <li className="mb-20">Grilled Blue cheese sauce</li>
              <li className="mb-20">grilled greek salad</li>
            </ul>
          </div>
           </div>

        </div>

     </div>
  )
}
