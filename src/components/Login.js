import React, { useState, useEffect } from "react";
import { gql, useQuery, useLazyQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import LoadingSpin from "react-loading-spin";
import Cookies from "universal-cookie";
import img2 from '../images/img2.jpg' 

import { BsPeopleFill } from "react-icons/bs";

const GetAuth = gql`
  query MyQuery($_eq: String, $_eq1: String) {
    miniproject_auth(
      where: { name: { _eq: $_eq1 }, password: { _eq: $_eq } }
      limit: 1
    ) {
      id
      level
      name
      password
    }
  }
`;

function Login() {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [getdata, { data, loading, error }] = useLazyQuery(GetAuth);

  useEffect(() => {
    if (
      data?.miniproject_auth.length === 1 &&
      data?.miniproject_auth[0].level === "user"
    ) {
      console.log(data?.miniproject_auth[0].level);
      cookies.set("auth", true, { path: "/" });
      return navigate("/dashboard");
    }
    if (
      data?.miniproject_auth.length === 1 &&
      data?.miniproject_auth[0].level === "admin"
    ) {
      console.log(data?.miniproject_auth[0].level);
      cookies.set("auth2", true, { path: "/" });
      return navigate("/admindashboard");
    }
  }, [data]);

  const handleName = (e) => {
    const value = e.target.value;
    setName(value);
  };
  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleSubmit = () => {
    getdata({
      variables: {
        _eq: name,
        _eq1: password,
      },
    });
  };

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
    
      <div className=" pt-24  bg-cover h-screen  justify-center justify-items-center flex items-center" style={{backgroundImage: `url(${img2})`}}>
        <div className="w-[300px] h-[350px] border  bg-white rounded shadow-lg ">
          <div>
          <h1 className="text-center font-bold text-lg mt-4">Login</h1>
          <div className="justify-center justify-items-center flex items-center">
          <BsPeopleFill  />
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
          {data && <div>gagal</div>}
          <div className="text-center mt-1">
            <button
              type="submit"
              onClick={handleSubmit}
              className=" w-[80%] inline-flex justify-center py-2 px-4 mt-4 border border-transparent shadow-sm text-sm font-medium rounded text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
