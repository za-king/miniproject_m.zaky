import React ,{useState}from 'react'
import { gql, useMutation, useLazyQuery } from "@apollo/client";
import img2 from "../images/img2.jpg";
import { BsPeopleFill } from "react-icons/bs"; 


const RegisterUser = gql`
mutation MyMutation($name: String = "", $password: String = "") {
    insert_miniproject_auth_one(object: {level: "user", name: $name, password: $password}) {
      password
      name
    }
  }
`;

function Register() {
    const [Regis, { loading: loadingUpdate }] = useMutation(RegisterUser);

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    
    const handleName = (e) => {
        const value = e.target.value;
        setName(value);
      };
      const handlePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
      };

      const handleRegister =()=>{

        Regis({
            variables: {
              name: name,
              password: password,
            },
          });
      }
    

  return (
    <div
        className=" pt-24  bg-cover h-screen  justify-center justify-items-center flex items-center"
        style={{ backgroundImage: `url(${img2})` }}
      >
        <div className="w-[300px] h-[350px] border  bg-white rounded shadow-lg ">
          <div>
            <h1 className="text-center font-bold text-lg mt-4">Register</h1>
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
          
          <div className="text-center mt-1">
            <button
              type="submit"
              onClick={handleRegister}
              className=" w-[80%] inline-flex justify-center py-2 px-4 mt-4 border border-transparent shadow-sm text-sm font-medium rounded text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r from-cyan-600 to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </div>
      </div>
  )
}

export default Register