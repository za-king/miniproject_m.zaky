import React, { useContext, useState } from "react";
import QuizNameContext from "../helper/QuizNameContext";
import { useParams } from "react-router-dom";

function Result() {
  const {
    data,
    loading,
    currentQuestion,
    handleCurrentQuestion,
    handleResult,
    result,
  } = useContext(QuizNameContext);

  const { id } = useParams();
  return (
    <div className="flex h-screen w-full justify-center items-center  py-48">
      <div className="">
        {"benar " +
          result +
          " dari " +
          data?.miniproject_quizName[id].questionsId.length +
          " soal "}
      </div>
    </div>
  );
}

export default Result;
