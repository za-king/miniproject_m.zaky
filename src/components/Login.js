import React, { useEffect, useContext } from "react";
import UserContext from "../helper/UserContext";

import LoadingSpin from "react-loading-spin";
import { Link } from "react-router-dom";
import img2 from "../images/img2.jpg";
import { BsPeopleFill } from "react-icons/bs";

function Login() {
  const { data, loading, handleName, handlePassword, handleSubmit } =
    useContext(UserContext);

  if (loading) {
    return (
      <div className="w-screen h-screen ">
        <div className="ml-[45%] pt-[15%]">
          <LoadingSpin
            duration="2s"
            width="15px"
            timingFunction="ease-in-out"
            direction="alternate"
            size="100px"
            primaryColor="white"
            secondaryColor="#333"
            numberOfRotationsInAnimation={2}
          />
        </div>
      </div>
    );
  }
  return (
    <>
      <div
        className=" pt-24  bg-cover h-screen  justify-center justify-items-center flex items-center"
        style={{ backgroundImage: `url(${img2})` }}
      >
        <div className="w-[300px] h-[350px] border  bg-white rounded shadow-lg ">
          <div>
            <h1 className="text-center font-bold text-lg mt-4">Login</h1>
            <div className="justify-center justify-items-center flex items-center">
              <BsPeopleFill />
            </div>
          </div>

          <div className=" mt-8 px-8">
            <label htmlFor="first-name" className="block  text-gray-700">
              Nama
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="mt-1  block w-full h-8 shadow-sm sm:text-sm border border-gray-300 rounded"
              onChange={handleName}
            />
          </div>
          <div className="mt-1 px-8">
            <label htmlFor="first-name" className="block  text-gray-700">
              Password
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              className="mt-1   block w-full h-8 shadow-sm sm:text-sm border border-gray-300 rounded"
              onChange={handlePassword}
            />
          </div>
          {data && (
            <div className="bg-red-500 h-[2rem] text-center mx-8 mt-2 rounded">
              gagal login
            </div>
          )}
          <div className="text-center mt-1">
            <button
              type="submit"
              onClick={handleSubmit}
              className=" w-[80%] inline-flex justify-center py-2 px-4 mt-4 border border-transparent shadow-sm text-sm font-medium rounded text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r from-cyan-600 to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
            <Link to="/register"><p>Belum Punya Akun ?</p></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
