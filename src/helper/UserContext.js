import { gql, useQuery, useLazyQuery } from "@apollo/client";
import { createContext, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
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


const UserContext = createContext()

export function UserContextProvider ({ children }) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [getdata, { data, loading, error }] = useLazyQuery(GetAuth);
    const navigate = useNavigate();
    const cookies = new Cookies();

    
    


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

    useEffect(() => {
      if (
        data?.miniproject_auth.length === 1 &&
        data?.miniproject_auth[0].level === "user"
      ) {
        console.log(data?.miniproject_auth[0].name);
        cookies.set("auth", true, { path: "/" });
        localStorage.setItem('name' ,data?.miniproject_auth[0].name)
        localStorage.setItem('id' ,data?.miniproject_auth[0].id)
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

    const value = {
      data,
      loading,
      handleName,
      handlePassword,
      handleSubmit,
      
    };
   
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContext