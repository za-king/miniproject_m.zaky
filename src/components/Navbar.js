import React, { useState,useEffect } from "react";
import {Link} from 'react-router-dom'
function Navbar() {
  const [scroll, setScroll] = useState(false);

  const changeBackground = () =>{
    if(window.scrollY >= 1){
      setScroll(true)
    }else{
      setScroll(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

  const ifActive = " hover:bg-white hover:shadow-lg    w-screen h-[50px] fixed z-50 flex justify-between"
  const ifScorll = " bg-white shadow-lg w-screen h-[50px] fixed z-50 flex justify-between"
  
  return (
    <nav className={scroll ? ifScorll :ifActive}>
      <div className="flex justify-items-center items-center cursor-pointer">
        <p className="font-sans text-2xl font-bold pl-8">QuizApp</p>
      </div>

      <ul className="flex justify-items-center items-center pr-8">
        <li className="pr-4 ">
        <Link to='/'><button className="hover:bg-white  w-14 h-8 font-bold hover:border-b-4 hover:border-black">Home</button></Link></li>

        <li  className="pr-4">
        <Link to='/login'><button className="hover:bg-white  w-14 h-8 font-bold hover:border-b-4 hover:border-black">Login</button></Link>
          
        </li>
      </ul>
    </nav>
  );
}


export default Navbar;
