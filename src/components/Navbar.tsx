import { Link } from "react-scroll"

export const Navbar = () => {
  return (
        
           <nav className="">
             <ul className="py-2.5 font-montserrat  hidden headersm:flex flex-row text-lg justify-center gap-x-20 mdl:gap-x-14 hover:cursor-pointer">
              <li> <Link smooth spy offset={-84} to="Home" activeClass="" className="active:text-b">Home</Link> </li>
              <li><Link smooth spy offset={-104} to="Grillers" activeClass="Grillers">Grillers</Link></li>
              <li><Link smooth spy offset={-84} to="Menu">Menu</Link></li>
              <li><Link smooth spy offset={-84} to="WineHouse">Wine House</Link></li>
              <li>Reserve a table</li>
             </ul>
           </nav>
    
    
  )
}
