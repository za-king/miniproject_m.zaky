import React from "react";
import Fade from "react-reveal/Fade";
import img from "../images/Group 1.png";
import Quote from "../components/Quote";

function HomePage() {
  return (
    <>
      <div className="min-h-screen max-h-full font-sans">
        <div className="">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="w-[80%]">
                <p className="text-7xl font-bold pb-12 ">QuizApp</p>
                <p className="text-3xl font-normal">
                  Live as if you were to die tomorrow. Learn as if you were to
                  live forever
                </p>
              </div>

              <div className="flex mt-12">
                <Fade left>
                  <button className="bg-black w-40 h-12 hover:bg-inherit hover:border-2 hover:border-black hover:text-black hover:shadow-2xl rounded-full text-white text-center align-middle mr-4 border-orange-600">
                    Get Started
                  </button>
                </Fade>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="bg-white rounded-r-lg">
                <img src={img} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    <Quote/>
    </>
  );
}

export default HomePage;
