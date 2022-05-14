import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import QuizNameContext from "../helper/QuizNameContext";

import LoadingSpin from "react-loading-spin";
import Pattern from "../images/Planning.png";
import Avatars from "../images/Avatars.png";

import { BsPenFill } from "react-icons/bs";

function Dashboard() {
  const { data, loading,user } = useContext(QuizNameContext);

  console.log(user)
 
  const navigate = useNavigate();

  const handleIkuti = (id) => {
    navigate(`/quizdetail/${id}`);
  };

  if (loading) {
    return (
      <div className="w-screen h-screen ">
        <div className="ml-[45%] pt-[15%]">
          <LoadingSpin
            duration="2s"
            width="15px"
            timingFunction="ease-in-out"
            direction="alternate"
            size="100px"
            primaryColor="white"
            secondaryColor="#333"
            numberOfRotationsInAnimation={2}
          />
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="min-h-screen max-h-full py-24 container right-0 inset-0">
        <div className="w-full border-2 border-black h-full flex justify-center items-center rounded">
          <div className="grid grid-cols-3 w-full h-full">
            <div className=" w-full h-full border border-black flex flex-col justfy-center items-center ">
              <div>
                <img src={Avatars} alt="sd" width={200} />
              </div>
              <div>
                <p></p>
              </div>
            </div>
            <div className="col-span-2 border-2 border-black rounded">
              <div className="grid grid-cols-2 gap-[2rem] p-4">
                {data?.miniproject_quizName.map((items, index) => {
                  return (
                    <div
                      className="h-56 border-2 border-black rounded cursor-pointer"
                      key={items.id}
                    >
                      <div className="grid grid-cols-2 h-full">
                        <div className="border-r-2 border-black">
                          <img src={Pattern} alt="dsd" width={150} />
                        </div>

                        <div className="mt-12">
                          <p className="font-bold text-xl ml-4">{items.name}</p>
                          <div className="w-full flex justify-end px-4 mt-12">
                            <button
                              onClick={() => {
                                handleIkuti(index);
                              }}
                              className="bg-black w-20 h-8 rounded text-white flex justif-center items-center px-2 hover:bg-gradient-to-r from-cyan-500 to-blue-500"
                            >
                              ikuti{" "}
                              <i>
                                <BsPenFill className="mx-2" />
                              </i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Quiz/> */}
    </>
  );
}

export default Dashboard;
