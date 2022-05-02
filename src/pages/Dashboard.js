import React, { useContext } from "react";
import Quiz from "../components/Quiz";
import { useNavigate } from "react-router-dom";
import QuizNameContext from "../helper/QuizNameContext";
import LoadingSpin from "react-loading-spin";
function Dashboard() {
  const { data,loading } = useContext(QuizNameContext);
  const navigate = useNavigate()

  const handleIkuti = (id) =>{
    navigate(`/quizdetail/${id}`)

  }

  if(loading) {
    return <div className="w-screen h-screen ">

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
  }
  return (
    <>
      <div className=" pt-24 container right-0 inset-0">
        <div className="w-full border h-full flex justify-center items-center rounded">
          <div className="grid grid-cols-3 w-full h-full">
            <div className="border">profile user</div>
            <div className="col-span-2 border  rounded">
              <div className="grid grid-cols-3 gap-4 p-4">
                {data?.miniproject_quizName.map((items,index) => {
                  return (
                    <div className="h-24 border rounded cursor-pointer" key={items.id}>
                      <div>
                        <p className="font-bold">{items.name}</p>
                        <button onClick={() =>{handleIkuti(index)} } className="bg-black text-white rounded w-14 h-8">ikuti</button>
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
