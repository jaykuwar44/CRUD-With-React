import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Read() {
  const { id } = useParams(); // useParams is used to extract id from the URL.
  const [readData, setReadData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://66c968578a477f50dc309087.mockapi.io/crud/${id}`)
      .then((res) => {
        setReadData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data: ", err);
      });
  }, [id]);

  const backHandler = () => {
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card col-5 mx-auto p-3 shadow">
        {readData ? (
          <>
            <div className="d-flex align-items-center mb-3 gap-3">
              <h4 className="mb-0">Name : </h4>
              <span>{readData.name}</span>
            </div>
            <div className="d-flex align-items-center mb-3 gap-3">
              <h4 className="mb-0">Email : </h4>
              <span>{readData.email}</span>
            </div>
            <div className="d-flex align-items-center mb-3 gap-3">
              <h4 className="mb-0">Age : </h4>
              <span>{readData.age}</span>
            </div>
            <div className="d-flex align-items-center mb-3 gap-3">
              <h4 className="mb-0">Gender : </h4>
              <span>{readData.gender}</span>
            </div>
            <div className="mx-auto">
              <button
                className="btn btn-outline-dark mt-2 px-3"
                onClick={backHandler} // Pass the function reference, not the invocation
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
  );
}

export default Read;
