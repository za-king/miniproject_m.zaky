import React, { useContext, useState } from "react";
import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import QuizNameContext from "../helper/QuizNameContext";
import LoadingSpin from "react-loading-spin";


const UpdateNameQuiz = gql`
mutation MyMutation($id: Int!, $name: String = "") {
  update_miniproject_quizName_by_pk(pk_columns: {id: $id}, _set: {name: $name}) {
    name
    id
  }
}
`;


function EditQuiz() {
  const { id } = useParams();
  

  const {
    data,
    loading,
    currentQuestion,
    handleCurrentQuestion,
    handleResult,
    result,
    GetQuizName
  } = useContext(QuizNameContext);

  const [updateName, { loading: loadingUpdate }] = useMutation(UpdateNameQuiz, {
    refetchQueries: [GetQuizName],
  });

  const [nameQuiz , setNameQuiz] =useState("")
  
  const handleName = (event) =>{
    const name = event.target.value
    console.log(name)
    console.log(data?.miniproject_quizName[id].id)
    setNameQuiz(name)
  }
  const handleQuizNameUpdate =() =>{
    updateName({
      variables: {
        id: data?.miniproject_quizName[id].id,
        name: nameQuiz,
      },
    });
  }

  

  return (
    <div>
      <div className=" container font-mono bg-white min-h-screen max-h-full py-24">
        <div className=" border  bg-gray-100">
          <div className="mx-[20%]">
            <div>
              <div className="  ">
                <form action="">
                  <div className="">
                    <label
                      htmlFor="first-name"
                      className="block  text-gray-700"
                    >
                      Nama Quiz
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      defaultValue={data?.miniproject_quizName[id].name}
                      className="mt-1   block w-full h-8 shadow-sm sm:text-sm border border-gray-300 rounded"
                      onChange={(event) =>{handleName(event)}}
                    />
                  </div>
                </form>
              </div>
            </div>
            <form action="">
              <div>
                {data?.miniproject_quizName[id].questionsId.map(
                  (item1, index) => {
                    return (
                      <div key={item1.id}>
                        <label
                          htmlFor="soal"
                          className="block  text-gray-700 mt-4"
                        >
                          soal {index + 1}
                        </label>
                        <div className="mt-2">
                          <textarea
                            id="about"
                            name="about"
                            rows={3}
                            className="shadow-sm  mt-1 block w-full sm:text-sm border border-gray-300 rounded"
                            placeholder=""
                            defaultValue={item1.questionText}
                          />
                        </div>
                        <label htmlFor="Jawaban"></label>
                        Jawaban <br />
                        <div>
                          {item1.answerOptions.map((item2, index) => {
                            return (
                              <div className="flex justify-content-center items-center mt-4">
                                <input
                                  type="text"
                                  name="answerText"
                                  id="answerText"
                                  defaultValue={item2.answerText}
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
                  }
                )}
              </div>

              <button
                type="submit"
                onClick={handleQuizNameUpdate}
                className="inline-flex justify-center py-2 px-4 mt-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditQuiz;
