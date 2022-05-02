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

export function UserContextProvider () {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [getdata, { data, loading, error }] = useLazyQuery(GetAuth);


}