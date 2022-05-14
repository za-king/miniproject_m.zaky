import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import QuizNameContext from "../helper/QuizNameContext";
import LoadingSpin from "react-loading-spin";
function DetailQuiz() {
  const { id } = useParams();
  const {
    data,
    loading,
    currentQuestion,
    handleCurrentQuestion,
    handleResult,
    result,
  } = useContext(QuizNameContext);
  return (
    <div className=" py-12 container flex min-h-screen max-h-full  justify-center justify-items-center">
      <div className="py-24 w-full h-full border">
        <div className="ml-4  font-bold text-lg ">
        {data?.miniproject_quizName[id].name}
        </div>
      
      <div>
        {data?.miniproject_quizName[id].questionsId.map((item1) => {
          return (
            <div>
              <div  className="ml-4 py-4 font-bold text-lg ">
              {item1.questionText}

              </div>
            
              <div>
                {item1.answerOptions.map((item2) => {
                  return (
                    <button className="bg-black focus:bg-violet-700 rounded text-white hover:bg-neutral-700 hover:text-black w-[80%] h-12 mb-4 ml-4 pl-4 text-left">
                      {item2.answerText}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      </div>
      
      <div></div>
    </div>
  );
}

export default DetailQuiz;
