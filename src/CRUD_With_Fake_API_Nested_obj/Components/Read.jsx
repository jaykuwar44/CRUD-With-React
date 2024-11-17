import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Read() {
  const { id } = useParams();
  const [readData, setReadData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/users/${id}`)
      .then((res) => {
        console.log("Read API - Data : ", res.data);
        setReadData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  // const fetchUserData = async () => {
  //   try {
  //     const response = await fetch(`https://fakestoreapi.com/users/${id}`);
  //     const data = await response.json();
  //     setReadData(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchUserData();
  // }, [id]);

  const backHandler = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="card col-5 mx-auto p-3 shadow">
          {readData ? (
            <>
              <div className="d-flex align-items-center mb-3 gap-3">
                <h4 className="mb-0">Name : </h4>
                <span>{readData.name["firstname"]}</span>
              </div>
              <div className="d-flex align-items-center mb-3 gap-3">
                <h4 className="mb-0">Email : </h4>
                <span>{readData.email}</span>
              </div>
              <div className="d-flex align-items-center mb-3 gap-3">
                <h4 className="mb-0">Phone : </h4>
                <span>{readData.phone}</span>
              </div>
              <div className="d-flex align-items-center mb-3 gap-3">
                <h4 className="mb-0">City : </h4>
                <span>{readData.address["city"]}</span>
              </div>
              <div className="mx-auto">
                <button
                  className="btn btn-outline-dark mt-2 px-3"
                  onClick={backHandler}
                >
                  Back
                </button>
              </div>
            </>
          ) : (
            <h2 className="d-flex justify-content-center align-items-center h-100">
              Loading....!
            </h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default Read;
