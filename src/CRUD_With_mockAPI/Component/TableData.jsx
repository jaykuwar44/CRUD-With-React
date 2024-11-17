import React, { useState } from "react";
import { Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function TableData() {
  const navigate = useNavigate();
  const [readData, setReadData] = useState([]);

  useEffect(() => {
    // https://jsonplaceholder.typicode.com/users
    // https://66c968578a477f50dc309087.mockapi.io/crud
    // Used JSON Placeholder for how to use API METHODS how to pass id & data in API
    axios
      .get("https://66c968578a477f50dc309087.mockapi.io/crud")
      // API execute successfully then execute .then() method otherwise execute catch() method
      .then((res) => {
        // console.log("Get API Data : ", res);
        // res.data :=> we can directly access data from api
        setReadData(res.data);
      })
      .catch((err) => {
        console.log("Error : ", err);
      });
  }, []);

  // Crate function for API
  // & that function call here

  const readHandler = (id) => {
    navigate(`/read-user/${id}`);
  };

  const editHandler = (id) => {
    navigate(`/edit-user/${id}`);
  };

  const deleteHandler = (id) => {
    navigate(`/delete-user/${id}`);
  };

  return (
    <>
      <div className="col-10 mx-auto mt-5">
        <Table className="px-3" bordered hover>
          <thead>
            <tr className="tableHeading">
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Gender</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {readData &&
              readData.map((item, index) => {
                return (
                  <tr>
                    <th scope="row">{item.id}</th>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.age}</td>
                    <td>{item.gender}</td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <button
                          className="btn btn-primary"
                          onClick={() => readHandler(item.id)}
                        >
                          Read
                        </button>
                        <button
                          className="btn btn-warning mx-4"
                          onClick={() => editHandler(item.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteHandler(item.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default TableData;
