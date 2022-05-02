import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import QuizNameContext from "../helper/QuizNameContext";
import LoadingSpin from "react-loading-spin";
function EditQuiz() {
  const {id} = useParams()
  const {
    data,
    loading,
    currentQuestion,
    handleCurrentQuestion,
    handleResult,
    result,
  } = useContext(QuizNameContext);
  return (
    <div><div className=" container font-mono bg-white h-screen w-full pt-24">
    <div className=" border  bg-gray-100">
      <div className="mx-[20%]">
      <div>
      <div className="  ">
        <form action="">
          <div className="">
            <label htmlFor="first-name" className="block  text-gray-700">
              Nama Quiz
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              value={data?.miniproject_quizName[id].name}
              
              className="mt-1   block w-full h-8 shadow-sm sm:text-sm border border-gray-300 rounded"
            />
          </div>
        </form>
      </div>
    </div>
        <form action="">
          
          <div>

          {data?.miniproject_quizName[id].questionsId.map((item1,index) => {
          return (
            <div>
               <label htmlFor="soal" className="block  text-gray-700 mt-4">
              soal { index + 1}
            </label>
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                rows={3}
                className="shadow-sm  mt-1 block w-full sm:text-sm border border-gray-300 rounded"
                placeholder=""
              value={item1.questionText}
                
              />
            </div><label htmlFor="Jawaban"></label>
          Jawaban <br />
              
              <div>
                {item1.answerOptions.map((item2) => {
                  return (
                    <div className="flex justify-content-center items-center mt-4">
            <input
              type="text"
              name="answerText"
              id="answerText"
              value={item2.answerText}
              className=" mr-2  block w-full h-8 shadow-sm sm:text-sm border-gray-300 rounded"
              
            />
            <input
              id="push-nothing"
              name="push-notifications"
              type="radio"
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              checked={item2.isCorrect}
            />
          </div>
                  );
                })}
              </div>
            </div>
          );
        })}
           
          </div>
          
          <button
            type="submit"
            
            className="inline-flex justify-center py-2 px-4 mt-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
        
      </div>
    </div>
    
  </div></div>
  )
}

export default EditQuiz