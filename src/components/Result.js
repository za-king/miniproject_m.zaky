import React, { useContext, useState } from "react";
import QuizNameContext from "../helper/QuizNameContext";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom'
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
      <div className="border w-96 h-96 rounded shadow-lg bg-black text-white">
        <div className="p-8">
          <h2 className="text-center font-bold text-xl">Hasil Test</h2>
          <div className="mt-8">
            <div className="py-4">
              <p className="text-xl">
                Nama Quiz : {data?.miniproject_quizName[id].name}
              </p>
            </div>
            <div className="py-4">
              <p className="text-xl">
                Jumlah Soal :{data?.miniproject_quizName[id].questionsId.length}
              </p>
            </div>
            <div className="py-4">
              <p className="text-xl">Jumlah Benar :{result}</p>
            </div>

            <div>
              <Link to='/dashboard'><button className="bg-white my-4 rounded text-black w-full h-[2rem]">kembali</button></Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
