import React, { useContext, useState } from "react";
import Swal from 'sweetalert2'
import { gql, useMutation, useLazyQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import QuizNameContext from "../helper/QuizNameContext";
import LoadingSpin from "react-loading-spin";
import { useParams } from "react-router-dom";

const ResultUser = gql`
mutation MyMutation($object: miniproject_result_insert_input = {}) {
  insert_miniproject_result_one(object: $object) {
    resulttest
    authref
  }
}

`;


function QuizDetail() {

  const [InsertResult, { loading: loadingUpdate }] = useMutation(ResultUser);
  const {
    data,
    loading,
    currentQuestion,
    handleCurrentQuestion,
    handleResult,
    resultQuizUser,
  } = useContext(QuizNameContext);
  
  console.log(data?.miniproject_quizName);

  const { id } = useParams();
  const userId = localStorage.getItem('id')
  console.log(data?.miniproject_quizName[id].id);
  const navigate = useNavigate();

  function Submit(){
    InsertResult({
      "variables": {
        "object":{
          "resulttest": resultQuizUser,
          "authref": userId,
          "quizref": data?.miniproject_quizName[id].id
          
        }
      }})
  }

  const handleFinish = () => {
    Swal.fire({
      title: 'Apakah anda sudah yakin ?',
      showCancelButton: true,
      cancelButtonText: 'batal',
      confirmButtonText: 'selesai',
    }).then((result) => {
      if (result.isConfirmed) {
        Submit()
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
        <div className="container py-24 mx-auto  justify-center flex justify-items-center items-center">
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
                    className="bg-black focus:bg-gray-500 rounded text-white hover:bg-gray-500 hover:text-black w-[80%] h-12 mb-4 ml-4 pl-4 text-left"
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
