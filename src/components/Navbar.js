import React, { useState } from "react";
import {Link} from 'react-router-dom'
function Navbar() {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 50) {
      setScroll(true);
    }
  };
  return (
    <nav className="container hover:bg-white hover:shadow hover:bg-opacity-50  w-screen h-[50px] fixed z-50 flex justify-between">
      <div className="flex justify-items-center items-center">
        <p className="font-sans text-2xl font-bold">QuizApp</p>
      </div>

      <ul className="flex justify-items-center items-center ">
        <li className="pr-4 ">
        <Link to='/'><button className="hover:bg-white rounded-full w-14 h-8 font-bold">Home</button></Link></li>

        <li  className="pr-4">
        <Link to='/login'><button className="hover:bg-white rounded-full w-14 h-8 font-bold">Login</button></Link>
          
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
