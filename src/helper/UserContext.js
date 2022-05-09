import { gql, useQuery, useLazyQuery } from "@apollo/client";
import { createContext, useState } from "react";

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

    const value = {
      data,
      loading,
      handleName,
      handlePassword,
      handleSubmit,
      name
    };
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContext