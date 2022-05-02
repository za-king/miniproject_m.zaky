import React,{useState} from 'react'



function HomePage() {
  const [inputFields, setInputFields] = useState([
    { answerText: '', isCorrect: false },
    { answerText: '', isCorrect: false },
    { answerText: '', isCorrect: false },
    { answerText: '', isCorrect: false },
    
  ])

  const handleFormChange = (index, event) =>{
    let data = [...inputFields];
    // console.log(Object.keys(data[index]))
    
    data[index][event.target.name] = event.target.value;
    data[index][event.target.name] = event.target.checked;
    setInputFields(data);
    console.log(inputFields)
   
  }



  return (
    <div className='border bg-blue-300 py-24'>
      
      
      
       <div className="flex justify-content-center items-center mt-4">

         <form action="">
         {inputFields.map((input, index) => {
          return (<div key={index}>

            <div className="flex justify-content-center items-center mt-4">
              <input
                type="text"
                name="answerText"
                id="answerText"

                className=" mr-2  block w-full h-8 shadow-sm sm:text-sm border-gray-300 rounded"
                value={input.name}
                onChange={(event) => handleFormChange(index, event)}
              />
              <input
                id="push-nothing"
                name="isCorrect"
                type="checkbox"
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                value={input.isCorrect}
                onClick={(event) => handleFormChange(index, event)}
              />
            </div>
           
          </div>)})}
         </form>
   
  </div></div>
  )
}

export default HomePage