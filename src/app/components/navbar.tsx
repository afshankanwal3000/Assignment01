import Link from "next/link";

export const Navbar = () => {
    return(
        
        <div className=" bg-blue-900 text-yellow-300 rounded-lg justify-between items-center">
          <nav className="w-[full] h-10 flex justify-between bg-red-6 ">
             <h1 className="font-semibold ml-6 mt-2  items-center ">Look Well Fashion</h1>
            <ul className="flex gap-6 items-center">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="about" className="hover:text-white">About</Link></li>
              <li><Link href="contact" className="hover:text-white">Contact</Link></li>            
              <li><Link href="services" className="hover:text-white">Services</Link></li>
              <li><Link href="job" className="hover:text-white">Job</Link></li>
             </ul>
             <div className=" mt-2 px-6 space-x-5 font-medium ">
             <button className="  hover:text-white"> Sign In</button>
             <button className=" hover:text-white" >Sign Up</button>
             </div>
          </nav>
        </div>
       
    )
}