import React, { useState, useContext } from "react";
import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";
import LoadingSpin from "react-loading-spin";
import { useNavigate } from "react-router-dom";

const InsertQuiz = gql`
mutation MyMutation($object: miniproject_quizName_insert_input = {}) {
  insert_miniproject_quizName_one(object: $object) {
    name
    id
  }
}


`;

function AddQuiz() {
  const [InsertQuizList, { loading, insertLoading,error }] = useMutation(InsertQuiz);


  const [quizName, setquizName] = useState("");
  // const [soal, setSoal] = useState("");
  
  // const [Jawaban1, setJawaban1] = useState("");
  // const [Jawaban2, setJawaban2] = useState("");
  // const [Jawaban3, setJawaban3] = useState("");
  // const [Jawaban4, setJawaban4] = useState("");
  // const [trueAnswer, setTrueAnswer] = useState(false);
  // const [trueAnswer1, setTrueAnswer1] = useState(false);
  // const [trueAnswer2, setTrueAnswer2] = useState(false);
  // const [trueAnswer3, setTrueAnswer3] = useState(false);
  const handleQuizName = (e) => {
    const value = e.target.value;

    setquizName(value);
  };

  // const handleSoal = (e) => {
  //   const value = e.target.value;

  //   setSoal(value);
  // };
  // const handleJawaban1 = (e) => {
  //  const name = e.target.name
  //  const value = e.target.value
  //  console.log(name)
  //  console.log(value)
  //   setJawaban1(e.target.value);
  // };
  // const handleJawaban2 = (e) => {
  //   setJawaban2(e.target.value);
  // };
  // const handleJawaban3 = (e) => {
  //   setJawaban3(e.target.value);
  // };
  // const handleJawaban4 = (e) => {
  //   setJawaban4(e.target.value);
  // };

  // const handleChecked = (e) => {
  //   let checked = e.target.checked
  //   setTrueAnswer(checked);
  //   console.log(checked)
  // };
  // const handleChecked1 = (e) => {
  //   setTrueAnswer1(!trueAnswer1);
  // };
  // const handleChecked2 = (e) => {
  //   setTrueAnswer2(!trueAnswer2);
  // };
  // const handleChecked3 = (e) => {
  //   setTrueAnswer3(!trueAnswer3);
  // };

 
 
  
  const navigate = useNavigate()


  const [baseSoal, setBaseSoal] = useState([
    {
      questionText: "",
      answerOptions: {
        data: [
          { answerText: "", isCorrect: false },
          { answerText: "", isCorrect: false },
          { answerText: "", isCorrect: false },
          { answerText: "", isCorrect: false },
        ],
      },
    },
  ]);

  const handleSoal1 =(index, event) =>{
    const datas = [...baseSoal]
      
    const isSoal = event.target.type === "text"
    const isCheckbox = event.target.type === "checkbox";
    const isAnswer = event.target.name === "answerText" && event.target.type === "text"
    if(isAnswer){
      
      datas[index].answerOptions.data[index][event.target.name] = event.target.value;
    }else if (isCheckbox) {
      datas[index].answerOptions.data[index][event.target.name] = event.target.checked;
    }else if(isSoal){
      datas[index][event.target.name] = event.target.value;
    }
    
  setBaseSoal(datas)
    // console.log(baseSoal)
    // console.log(json)
    // console.log(data[index][event.target.name])
    // console.log(event.target.value)
  }

  

  const addSoal = () =>{
    const newSoal = 
      {
        questionText: "",
        answerOptions: {
          data: [
            { answerText: "", isCorrect: false },
            { answerText: "", isCorrect: false },
            { answerText: "", isCorrect: false },
            { answerText: "", isCorrect: false },
          ],
        },
      }
    

    setBaseSoal([...baseSoal,newSoal])
  }


  const handleSoalSubmit = () => {
 
    try {
      InsertQuizList({
        "variables": {
          "object":{"name": quizName,
          "questionsId": {"data": baseSoal}}
        }})

        navigate('/admindashboard')
      
    } catch (error) {
      console.log(error)
    }
   
    
    
    }

    // [{"questionText":  soal ,"answerOptions": {"data":
    //       [{"answerText": Jawaban1 ,"isCorrect": trueAnswer  },
    //       {"answerText":  Jawaban2 ,"isCorrect": trueAnswer1 },
    //       {"answerText":  Jawaban3 ,"isCorrect": trueAnswer2 },
    //       {"answerText":  Jawaban4 ,"isCorrect": trueAnswer3 }]}}
    //      ] 
  
  return (
    <div className=" container font-mono bg-white h-screen w-full pt-24">
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
                onChange={handleQuizName}
                className="mt-1   block w-full h-8 shadow-sm sm:text-sm border border-gray-300 rounded"
              />
            </div>
          </form>
        </div>
        <div >
        {baseSoal.map((input, index) => {
          return (
            <>
            <label htmlFor="soal" className="block  text-gray-700">
                Soal
              </label>
              <input
                type="text"
                name="questionText"
                value={input.name}
                onChange={(event) => handleSoal1(index, event)}
                className=" mr-2 mt-8  block w-full h-8 shadow-sm sm:text-sm border-gray-300 rounded"
              />
              <label htmlFor="Jawaban"></label>
            Jawaban <br />

                {input.answerOptions.data.map((input , index) =>{
                  return(
                    <>
                    
                    <div className="flex justify-content-center items-center mt-4" key={index}>
                    <input
                    type="text"
                    name="answerText"
                    id="answerText"
                    className=" mr-2  block w-full h-8 shadow-sm sm:text-sm border-gray-300 rounded"
                    
                    onChange={(event) => handleSoal1(index, event)}
                  />
                    <input
                    id="push-nothing"
                    name="isCorrect"
                    type="checkbox"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    
                    onChange={(event) => handleSoal1(index, event)}
                  />
                  </div>
                    </>
                  )
                })}


            </>
          );
        })}
        <button  className="inline-flex justify-center py-2 px-4 mt-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={addSoal}>add</button>
    
      </div>
      </div>
         
          
        </div>
        <button
              type="submit"
              onClick={() => {
                handleSoalSubmit();
              }}
              className="inline-flex justify-center py-2 px-4 mt-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
      </div>
     
    </div>
  );
}

export default AddQuiz;
