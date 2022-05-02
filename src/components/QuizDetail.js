import React, { useContext, useState } from "react";
import Swal from 'sweetalert2'

import { useNavigate } from "react-router-dom";
import QuizNameContext from "../helper/QuizNameContext";
import LoadingSpin from "react-loading-spin";
import { useParams } from "react-router-dom";
function QuizDetail() {
  const {
    data,
    loading,
    currentQuestion,
    handleCurrentQuestion,
    handleResult,
    result,
  } = useContext(QuizNameContext);
  console.log(data?.miniproject_quizName);

  const { id } = useParams();

  console.log(id);
  const navigate = useNavigate();

  const handleFinish = () => {
    Swal.fire({
      title: 'Apakah anda sudah yakin ?',
      showCancelButton: true,
      cancelButtonText: 'batal',
      confirmButtonText: 'simpan',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        return navigate(`/result/${id}`);
      } 
    })
    
  };


 

  return (
    <>
      {loading ? (
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
      ) : (
        <div className="container pt-24  justify-center flex justify-items-center items-center">
          <div className="border rounded w-full  ">
          <div className="ml-4 font-bold text-lg ">
              {data?.miniproject_quizName[id].name}
            </div>
            <div className="ml-4 font-bold">
              question
              <p>
                {currentQuestion + 1 + "/" +  data?.miniproject_quizName[id].questionsId.length}
              </p>
            </div>
            
            <div className="border m-4 rounded text-xl ">
              {
                data?.miniproject_quizName[id].questionsId[currentQuestion]
                  .questionText
              }
            </div>
            

            <div className="w-full flex flex-col ">
              {data?.miniproject_quizName[id].questionsId[
                currentQuestion
              ].answerOptions.map((x, index) => {
                return (
                  <button
                    className="bg-black focus:bg-violet-700 rounded text-white hover:bg-neutral-700 hover:text-black w-[80%] h-12 mb-4 ml-4 pl-4 text-left"
                    onClick={(e) => {
                      handleResult(x.isCorrect);
                    }}
                  >
                    {x.answerText}
                  </button>
                );
              })}
            </div>

            <div>
              {currentQuestion ===
              data?.miniproject_quizName[id].questionsId.length - 1 ? (
                <button
                  onClick={handleFinish}
                  className="bg-black rounded w-20 h-10 text-white ml-4"
                >
                  finish
                </button>
              ) : (
                <div className="ml-4">
                  {" "}
                  <button
                    className="bg-black rounded w-20 h-10 text-white"
                    onClick={handleCurrentQuestion}
                  >
                    next
                  </button>
                </div>
              )}
            </div>
            
          </div>
        </div>
      )}
    </>
  );
}

export default QuizDetail;
