import React, { useContext, useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import QuizNameContext from "../helper/QuizNameContext";
import { BsPlusLg } from "react-icons/bs";
import LoadingSpin from "react-loading-spin";
import Swal from 'sweetalert2'

import { gql, useMutation, useQuery, useSubscription } from "@apollo/client";

const DeleteTodoList = gql`
  mutation MyMutation($id: Int!) {
    delete_miniproject_quizName_by_pk(id: $id) {
      name
      id
    }
  }
`;

function AdminDashboard() {
  const { data,GetQuizName ,loading} = useContext(QuizNameContext);
  const navigate = useNavigate();

  const handleTambah = () => {
    navigate("/addquiz");
  };
  const handleEdit = (e) => {
    navigate(`/editquiz/${e}`);
  };
  const handleDetail = (e) => {
    navigate(`/detailquiz/${e}`);
  };
  const [deleteTodo, { loading: loadingDelete }] = useMutation(DeleteTodoList, {
    refetchQueries: [GetQuizName],
  });
  const handleDelete = (items) => {
    Swal.fire({
      title: 'Apakah anda sudah yakin ?',
      showCancelButton: true,
      cancelButtonText: 'batal',
      confirmButtonText: 'delete',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        console.log(items);
    deleteTodo({ variables: { id: items } });
      } 
    })
    
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
    <div className="h-screen w-full py-12">
      {/* <AddQuiz /> */}

      <div className="px-24">
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="w-full justify-end flex p-4 flex-">
              <button
                className="bg-black w-24 h-8 rounded text-white flex justif-center items-center px-2 "
                onClick={handleTambah}
              >
                tambah{" "}
                <i className="mx-2">
                  <BsPlusLg />
                </i>
              </button>
            </div>

            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8 bg-gray-200">
              <div class="overflow-hidden">
                <table class="min-w-full">
                  <thead class="bg-white border-b">
                    <tr>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left w-[10%]"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-center w-[40%]"
                      >
                        QuizName
                      </th>

                      <th
                        scope="col"
                        class="text-sm font-medium text-gray-900 px-6 py-4 text-center w-[50%]"
                      >
                        Handle
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.miniproject_quizName.map((items, index) => {
                      return (
                        <>
                          {" "}
                          <tr class="bg-gray-100 border-b ">
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {index + 1}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {items.name}
                            </td>
                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              <button onClick={() => {
                                  handleDetail(index);
                                }} className="bg-black rounded text-white w-24 h-8 mx-4">
                                detail
                              </button>
                              <button onClick={() => {
                                  handleEdit(index);
                                }}   className="bg-black rounded text-white w-24 h-8 mx-4">
                                edit
                              </button>
                              <button
                                onClick={() => {
                                  handleDelete(items.id);
                                }}
                                className="bg-black rounded text-white w-24 h-8 mx-4"
                              >
                                delete
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
