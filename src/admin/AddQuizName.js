import React from "react";

function AddQuizName() {
  return (
    <div className=" font-mono bg-gray-100 h-screen w-full pt-24">
      <div>
        <div className=" mx-[20%] ">
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
                className="mt-1   block w-full h-8 shadow-sm sm:text-sm border border-gray-300 rounded"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddQuizName;
