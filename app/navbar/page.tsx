
import Link from "next/link";
function Navbar() {
  return (
    <div className="h-auto bg-gray-800/50 z-30 w-full  flex justify-between  p-3">
      <div className=" bg-none">
        
        <img className="h-16 rounded-full" src="profile.jpg" alt="" />
      </div>
      <div className="  w-1/2 text-2xl md:block ">
        <ul className=" w-full hidden md:flex  justify-between  items-center">
          
        <Link href="/home">  <li  className=" hover:scale-110 cursor-pointer shadow hover:shadow-lg hover:shadow-emerald-500/50 p-3 rounded-xl">
            Home
          </li></Link>
          <Link href="/about"><li className="  hover:scale-110 cursor-pointer shadow hover:shadow-lg hover:shadow-emerald-500/50 p-3 rounded-xl">
            About us
          </li></Link>
         <Link href="/contactUs"> <li className="hover:scale-110 cursor-pointer shadow hover:shadow-lg hover:shadow-emerald-500/50 p-3 rounded-xl">
            Contact Us
          </li></Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
