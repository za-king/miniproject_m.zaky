import React from 'react'

function Jawaban() {
  return (
    <div className="flex justify-content-center items-center mt-4">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className=" mr-2  block w-full h-8 shadow-sm sm:text-sm border-gray-300 rounded"
                onChange={handleJawaban1}
              />
              <input
                id="push-nothing"
                name="push-notifications"
                type="radio"
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                onChange={handleChecked}
              />
            </div>
            <div className="flex justify-content-center items-center mt-4">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className=" mr-2  block w-full h-8 shadow-sm sm:text-sm border-gray-300 rounded"
                onChange={handleJawaban2}
              />
              <input
                id="push-nothing"
                name="push-notifications"
                type="radio"
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                onClick={handleChecked1}
              />
            </div>
            <div className="flex justify-content-center items-center mt-4">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className=" mr-2 block w-full h-8 shadow-sm sm:text-sm border-gray-300 rounded"
                onChange={handleJawaban3}
              />
              <input
                id="push-nothing"
                name="push-notifications"
                type="radio"
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                onClick={handleChecked2}
              />
            </div>
            <div className="flex justify-content-center items-center mt-4">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className=" mr-2  block w-full h-8 shadow-sm sm:text-sm border-gray-300 rounded"
                onChange={handleJawaban4}
              />
              <input
                id="push-nothing"
                name="push-notifications"
                type="radio"
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                onClick={handleChecked3}
              />
            </div>
  )
}

export default Jawaban