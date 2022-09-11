import React from "react";
import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { deleteUser, getAllUsers } from "../actions/userActions";
import Nav1 from "../components/Nav1";
export default function Userslist() {
  const dispatch = useDispatch()
  const getallusersstate = useSelector((state) => state.getAllUsersReducer);
  const { users, loading, error } = getallusersstate;
  useEffect(() => {
    dispatch(getAllUsers());
  }, [])
 
  return (
    <div className="table-responsive-sm me-3 ms-2 card text-center shadow p-3 mb-5 bg-white rounded">
    <Nav1/>
      <h2 className="justify-content-center ">User list</h2>
      <table className='table table-bordered '>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Email</th>
          
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {loading && <Loader />}
          {error && <Error error="Something went wrong" />}
          {users &&  users.map((user) => {
              return (
                <tr>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>          
                  <td>
                    <i
                      class="far fa-trash-alt"
                      onClick={() => {
                        dispatch(deleteUser(user._id));
                      }}
                    ></i>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      
    </div>
  );
}
