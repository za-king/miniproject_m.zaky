import React, { useState } from "react";

function HomePage() {
 
  // const [inputFields, setInputFields] = useState([
  //   { answerText: "", isCorrect: false },
  //   { answerText: "", isCorrect: false },
  //   { answerText: "", isCorrect: false },
  //   { answerText: "", isCorrect: false },
  // ]);
  // const [soal, setSoal] = useState([
  //   { questionText: "", answerOptions: [...inputFields] }
  // ]);

  // const handleFormChange = (index, event) => {
  //   let data = [...inputFields];

  //   console.log(data[index]);
  //   const isCheckbox = event.target.type === "checkbox";
  //   if (isCheckbox) {
  //     data[index][event.target.name] = event.target.checked;
  //   } else if (event.target.value) {
  //     data[index][event.target.name] = event.target.value;
  //   }
  //   setInputFields(data);
  //   console.log(inputFields);
  // };

  // const handleSoalForm = (index, event) => {
  //   let data = [...soal];
  //   data[index][event.target.name] = event.target.value;
  //   setSoal(data);

  //   console.log(soal);
  // };

  

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

  const handleSoal =(index, event) =>{
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
   
    console.log(baseSoal)
    // console.log(json)
    console.log(datas[index][event.target.name])
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

  
  

  return (
    <div className="border bg-blue-300 py-24">
      <div >
        {baseSoal.map((x, index) => {
          return (
            <>
              <input
                type="text"
                name="questionText"
                value={x.name}
                onChange={(event) => handleSoal(index, event)}
                className=" mr-2 mt-8  block w-full h-8 shadow-sm sm:text-sm border-gray-300 rounded"
              />

                {x.answerOptions.data.map((y , index) =>{
                  return(
                    <>
                    <div className="flex justify-content-center items-center mt-4" key={index}>
                    <input
                    type="text"
                    name="answerText"
                    id="answerText"
                    className=" mr-2  block w-full h-8 shadow-sm sm:text-sm border-gray-300 rounded"
                    value={y.name}
                    onChange={(event) => handleSoal(index, event)}
                  />
                    <input
                    id="push-nothing"
                    name="isCorrect"
                    type="checkbox"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    value={y.isCorrect}
                    onChange={(event) => handleSoal(index, event)}
                  />
                  </div>
                    </>
                  )
                })}


            </>
          );
        })}
        <button onClick={addSoal}>add</button>
    
      </div><br />
      <br />
      <br />
      <br />

{/* 
      {soal.map((input, index) => {
        return (
          <>
            <div key={index}>
              <input
                type="text"
                name="questionText"
                id="questionText"
                value={input.name}
                onChange={(event) => handleSoalForm(index, event)}
                defaultValue={""}
                className=" mr-2  block w-full h-8 shadow-sm sm:text-sm border-gray-300 rounded"
              />
            </div>
          </>
        );
      })}

      <div className="flex justify-content-center items-center mt-4">
        <form action="">
          {inputFields.map((input, index) => {
            return (
              <div key={index}>
                <div className="flex justify-content-center items-center mt-4">
                  <input
                    type="text"
                    name="answerText"
                    id="answerText"
                    className=" mr-2  block w-full h-8 shadow-sm sm:text-sm border-gray-300 rounded"
                    value={input.name}
                    onChange={(event) => handleFormChange(index, event)}
                    defaultValue={""}
                  />
                  <input
                    id="push-nothing"
                    name="isCorrect"
                    type="checkbox"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                    value={input.isCorrect}
                    onChange={(event) => handleFormChange(index, event)}
                    defaultValue={""}
                  />
                </div>
              </div>
            );
          })}
        
        </form>
       
      </div>
       */}
    </div>
  );
}

export default HomePage;
