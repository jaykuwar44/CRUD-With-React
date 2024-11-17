import React, { useState } from "react";
import { Table } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { apiRequest } from "../Comman/Utils";

function TableData() {
  const navigate = useNavigate();
  const [readData, setReadData] = useState([]);

  useEffect(() => {
    apiRequest("get").then((res) => {
      // console.log("Get API Data : ", res);
      // res.data :=> we can directly access data from api
      setReadData(res.data);
    });
  }, []);

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
      <div className="col-8 mx-auto mt-3">
        <Table className="px-3" bordered hover>
          <thead>
            <tr className="tableHeading">
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
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
