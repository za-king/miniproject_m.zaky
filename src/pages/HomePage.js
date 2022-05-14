import React from "react";
import img from  '../images/Group 1.png'
function HomePage() {
  return (
    <div className="h-screen w-full">
      <div className="">
        <div className="grid grid-cols-2">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="w-[80%]">
              <p className="text-7xl font-bold">QuizApp</p>
              <p className="text-3xl font-bold">Live as if you were to die tomorrow. Learn as if you were to live forever</p>
              <p className=" text-2xl text-justify mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                sequi dolore qui doloribus odit quae consectetur 
              </p>
            </div>

            <div className="flex mt-12">
              <button className="bg-black w-40 h-12 rounded text-white text-center align-middle mr-4 border-orange-600">
                get started
              </button>
              <button className="bg-black w-40 h-12 rounded text-white text-center align-middle  ">
                explore
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <img src={img} alt="g" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
