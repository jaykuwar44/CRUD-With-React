import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { useNavigate } from "react-router-dom";

function TableData() {
  const [readData, setReadData] = useState();
  const navigate = useNavigate();

  // with axios
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/users")
      .then((res) => {
        // console.log("API - Data : ", res);
        setReadData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // with fetch method
  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const response = await fetch("https://fakestoreapi.com/users");
  //       const data = await response.json();
  //       // console.log("--", data);
  //       setReadData(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchUserData();
  // }, []);

  const readHandler = (id) => {
    navigate(`/read-user/${id}`);
  };

  const editHandler = (id) => {
    navigate(`/edit-user/${id}`);
    console.log(id);
  };

  const deleteHandler = (id) => {
    navigate(`/delete-user/${id}`);
    console.log(id);
  };
  return (
    <div>
      <div className="col-10 mx-auto mt-3">
        <Table className="px-3" bordered hover>
          <thead>
            <tr className="tableHeading">
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Phone No</th>
              <th>City</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {readData &&
              readData.map((item, index) => {
                // console.log(item.address["city"]);
                return (
                  <tr>
                    <th scope="row">{item.id}</th>
                    <td>{item.name["firstname"]}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>{item.phone}</td>
                    <td>{item.address["city"]}</td>
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
    </div>
  );
}

export default TableData;
